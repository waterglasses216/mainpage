// import React from "react";
import React, { useState } from "react";
import "../pages/main/Main.css";

function Pick() {
  return (
    <div className="AppCardPick">
      <div className="pickCard">
        <img className="pickImg" src="./assets/card1.png" />
        <div className="pickInfo">
          <div className="pickTitle">개인화 추천 서비스 홈페이지 리뉴얼</div>
          <div className="pickSubtitle">웹개발 펀딩 설명과 개요 등등</div>
        </div>
        <button className="pickButton">바로가기</button>
      </div>
    </div>
  );
}

export default Pick;
