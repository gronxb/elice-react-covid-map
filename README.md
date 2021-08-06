# Elice 코로나 맵 실습
## Usage
```sh
> python app.py
> yarn start
```
## POST /covidData 
```json
{
    "data": [
        {
            "area": "서울",
            "level": 4,
            "num": 464
        },
        {
            "area": "부산",
            "level": 3,
            "num": 107
        },
        {
            "area": "대구",
            "level": 3,
            "num": 84
        },
        {
            "area": "인천",
            "level": 4,
            "num": 103
        },
        {
            "area": "광주",
            "level": 3,
            "num": 14
        },
        {
            "area": "대전",
            "level": 4,
            "num": 50
        },
        {
            "area": "울산",
            "level": 3,
            "num": 24
        },
        {
            "area": "세종",
            "level": 3,
            "num": 20
        },
        {
            "area": "경기",
            "level": 4,
            "num": 462
        },
        {
            "area": "강원",
            "level": 3,
            "num": 26
        },
        {
            "area": "충북",
            "level": 3,
            "num": 41
        },
        {
            "area": "충남",
            "level": 3,
            "num": 53
        },
        {
            "area": "전북",
            "level": 3,
            "num": 34
        },
        {
            "area": "전남",
            "level": 3,
            "num": 24
        },
        {
            "area": "경북",
            "level": 3,
            "num": 56
        },
        {
            "area": "경남",
            "level": 3,
            "num": 98
        },
        {
            "area": "제주",
            "level": 3,
            "num": 16
        }
    ],
    "status": "success",
    "updated_data": "2021년 08.06. 00시"
}
```