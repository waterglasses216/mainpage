// import React from "react";
import React, { useState } from "react";
import "../pages/main/Main.css";

function Card() {
  return (
    <div className="mainCard">
      <div className="dday">D-30</div>
      <div className="cardImg">
        <img className="card1" />
      </div>
      <div></div>
      <div className="cardInfo">
        <div className="tag">금융</div>
        <div className="cardTitle">
          모두가 꿈꾸는 내일의 금융세상을 만듭니다. 신한은행
        </div>
        <div className="cardSubtitle">
          신한금융 앱을 새롭게 리뉴얼하며 이용하는 사람들의 사용성을 향상시키고
          필요한 정보를 한눈에 알아보기 쉽도록, 금융정보를 제공하는데 초점을
          맞춰 진행한 앱 리뉴얼 프로젝트입니다.
        </div>
        <div className="cardFooter">
          <div className="cardFunding">1,234,500 원 펀딩</div>
          <div className="cardPercent">달성률 %</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
