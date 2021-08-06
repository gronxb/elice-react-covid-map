import React from "react";
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

function CovidMap() {


  return (
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
      <Seoul />
      <Gyeonggi />
      <Gangwon />
      <Incheon />
      <Chungnam />
      <Chungbuk />
      <Sejong />
      <Daejeon />
      <Gyeongnam />
      <Gyeongbuk />
      <Jeonbuk />
      <Jeonnam />
      <Ulsan />
      <Busan />
      <Daegu />
      <Gwangju />
      <Jeju />
    </svg>
  );
}
export default CovidMap;
