import requests
from bs4 import BeautifulSoup
import re

# 해당 all_area_no 변수는 http://ncov.mohw.go.kr/ 페이지의 지역별 코드입니다.
all_area_no = {
    '서울': 1,
    '부산': 2,
    '대구': 3,
    '인천': 4,
    '광주': 5,
    '대전': 6,
    '울산': 7,
    '세종': 8,
    '경기': 9,
    '강원': 10,
    '충북': 11,
    '충남': 12,
    '전북': 13,
    '전남': 14,
    '경북': 15,
    '경남': 16,
    '제주': 17,
}

# 해당 URL 코드에서 자바스크립트에 담겨있는 거리두기 단계 변수 정규표현식 사용해서 가져오기
def getTodayCovidLevel():
    response = requests.get('http://ncov.mohw.go.kr/regSocdisBoardView.do')
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')

        script_soup = soup.find_all(f'script')
        rss_data_script = script_soup[len(script_soup) - 1].contents[0]
        regex =  re.compile(r'\[[\s\S]*?\]')

        # 스크립트 태그에서 RSS_DATA 변수 값을 가져오고 value 값 가져오기
        rss_data_original = regex.search(rss_data_script)\
            .group()\
            .replace("\t","")\
            .split("\n")

        rss_data_arr = list(filter(lambda x: x.find('value') >= 0,rss_data_original))

        level_data = dict()

        for area, rss_data in zip(all_area_no, rss_data_arr):
            _, value = rss_data.split(',')[0:2]
            level = int(re.sub("[^0-9]" ,"",value))
            level_data[area] = level

        return level_data
    return None

# 오늘 지역별 확진자를 받아와서 딕셔너리 형태로 반환합니다.
def getTodayCovid():
    level_data = getTodayCovidLevel()

    if level_data != None:
        response = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdGubun=13')
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            updated_date = soup.select_one('#content > div > div.timetable > p > span').text

            result = {
                'status': 'success',
                'updated_data': updated_date,
                'data': dict()
            }

            for area in all_area_no:
                covid_num_text = soup.select_one(f'#main_maplayout > button:nth-child({all_area_no[area]}) > span.before').text
                covid_num = int(re.sub("[^0-9]" ,"",covid_num_text)) # 숫자 제외한 모든 문자 지우기.
                result['data'][area] = dict()
                result['data'][area]['num'] = covid_num
                result['data'][area]['level'] = level_data[area]
            return result

    return {
        'status': 'fail',
        'updated_data': None,
        'data': None
    }