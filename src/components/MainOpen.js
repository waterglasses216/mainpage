// import React from "react";
import React, { useState } from "react";
import "../pages/main/Main.css";

function Open() {
  return (
    <div className="openCard">
      <div className="openImg"></div>
      <div className="openInfo">
        <div className="tag">금융</div>
        <div className="openTitle">이제 오픈할 웹개발 펀딩 타이틀</div>
        <div className="openSubtitle">웹개발 펀딩 설명과 개요 등등</div>
        <button className="openButton">
          <img className="bell" src="./assets/bell.png" />
          10월 11일 오픈 알림 신청
        </button>
      </div>
    </div>
  );
}

export default Open;
