// import React from "react";
import React, { useState } from "react";
import Card from "../../components/MainCard";
import Open from "../../components/MainOpen";
import Pick from "../../components/MainPick";
import "../main/Main.css";
// import "../component/Slider";
// /export default

function Main() {
  return (
    <div className="Main">
      {/* <h1>Header</h1> */}
      <div class="slide slide_wrap">
        <div class="slide_item item1">1</div>
        <div class="slide_item item2">2</div>
        <div class="slide_item item3">3</div>
        <div class="slide_item item4">4</div>
        <div class="slide_item item5">5</div>
        <div class="slide_prev_button slide_button">&lt;</div>
        <div class="slide_next_button slide_button">&gt;</div>
        <ul class="slide_pagination"></ul>
      </div>
      <h2 className="mainTitle">인기 펀딩</h2>
      <div className="AppCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="line"></div>
      <h2 className="mainTitle">신규 펀딩</h2>
      <div className="AppCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="banner">banner</div>
      <h2 className="mainTitle">오픈 예정</h2>
      <div className="open">
        <Open />
      </div>
      <div className="line"></div>
      <h2 className="mainTitle">에디터의 Pick</h2>
      <div className="pick">
        <Pick />
        <Pick />
      </div>
    </div>
  );
}

export default Main;
