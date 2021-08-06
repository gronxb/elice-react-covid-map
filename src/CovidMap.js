import React, { useState, useEffect } from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import axios from "axios";

// 코로나 단계별 색상
const fillColor = ["#4088da", "#ffb911", "#fc7001", "#e60000"];

function CovidView({ covidData, onAreaClick }) {
  return (
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
      <Seoul
        fill={fillColor[covidData["서울"]["level"] - 1]}
        onClick={() => onAreaClick("서울")}
      />
      <Gyeonggi
        fill={fillColor[covidData["경기"]["level"] - 1]}
        onClick={() => onAreaClick("경기")}
      />
      <Gangwon
        fill={fillColor[covidData["강원"]["level"] - 1]}
        onClick={() => onAreaClick("강원")}
      />
      <Incheon
        fill={fillColor[covidData["인천"]["level"] - 1]}
        onClick={() => onAreaClick("인천")}
      />
      <Chungnam
        fill={fillColor[covidData["충남"]["level"] - 1]}
        onClick={() => onAreaClick("충남")}
      />
      <Chungbuk
        fill={fillColor[covidData["충북"]["level"] - 1]}
        onClick={() => onAreaClick("충북")}
      />
      <Sejong
        fill={fillColor[covidData["세종"]["level"] - 1]}
        onClick={() => onAreaClick("세종")}
      />
      <Daejeon
        fill={fillColor[covidData["대전"]["level"] - 1]}
        onClick={() => onAreaClick("대전")}
      />
      <Gyeongnam
        fill={fillColor[covidData["경남"]["level"] - 1]}
        onClick={() => onAreaClick("경남")}
      />
      <Gyeongbuk
        fill={fillColor[covidData["경북"]["level"] - 1]}
        onClick={() => onAreaClick("경북")}
      />
      <Jeonbuk
        fill={fillColor[covidData["전북"]["level"] - 1]}
        onClick={() => onAreaClick("전북")}
      />
      <Jeonnam
        fill={fillColor[covidData["전남"]["level"] - 1]}
        onClick={() => onAreaClick("전남")}
      />
      <Ulsan
        fill={fillColor[covidData["울산"]["level"] - 1]}
        onClick={() => onAreaClick("울산")}
      />
      <Busan
        fill={fillColor[covidData["부산"]["level"] - 1]}
        onClick={() => onAreaClick("부산")}
      />
      <Daegu
        fill={fillColor[covidData["대구"]["level"] - 1]}
        onClick={() => onAreaClick("대구")}
      />
      <Gwangju
        fill={fillColor[covidData["광주"]["level"] - 1]}
        onClick={() => onAreaClick("광주")}
      />
      <Jeju
        fill={fillColor[covidData["제주"]["level"] - 1]}
        onClick={() => onAreaClick("제주")}
      />
    </svg>
  );
}

function CovidInfo({ area, todayNum, level }) {
  return (
    <div>
      {area !== "" && (
        <>
          <h2>오늘 {area} 코로나 정보</h2>
          <p>거리두기 단계 : {level}</p>
          <p>확진자 수 : {todayNum}</p>
        </>
      )}
    </div>
  );
}

function CovidMap() {
  const [covidData, setCovidData] = useState(null);
  const [selectArea, setSelectArea] = useState({
    area: "",
    level: 0,
    todayNum: 0,
  });

  useEffect(() => {
    console.log(covidData);
  }, [covidData]);

  useEffect(() => {
    axios.post("http://localhost:5000/covidData").then((response) => {
      if (response.data) {
        const { data } = response.data;
        setCovidData(data);
      }
    });
  }, []);

  const handlerAreaSelect = (area) => {
    setSelectArea({
      area: area,
      level: covidData[area]["level"],
      todayNum: covidData[area]["num"],
    });
  };

  return (
    <div>
      <h1>대한민국 코로나 현황</h1>
      {covidData === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <CovidInfo
            area={selectArea.area}
            todayNum={selectArea.todayNum}
            level={selectArea.level}
          />
          <CovidView covidData={covidData} onAreaClick={handlerAreaSelect} />
        </>
      )}
    </div>
  );
}
export default CovidMap;
