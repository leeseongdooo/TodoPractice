import React, { useState, useContext, useEffect } from "react";
import { BsLightbulb } from "react-icons/bs";
import { BiSort, BiExit } from "react-icons/bi";

import WriteArea from "./WriteArea";
import TodoListArea from "./TodoListArea";
import "../css/MainTodo.scss";
import { TodoContext } from "./Store";
import DoneListArea from "./DoneListArea";
import { RightSideContext } from "./Context/RightSide";
import { RightSlide } from "./RightSlide";
// 투두리스트의 상세정보를 보여주는 Component 입니다.

function MainTodo() {
  const myDate = new Date(); // new Date = 날짜를 가져온다

  let DateString = myDate.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }); // 변수에 오늘의 날짜를 String식으로.

  const [RightSideChecked, setRightSideChecked] = useContext(RightSideContext);

  return (
    <div className="MainTodoFlex">
      <div className="MainTodoBox">
        <div className="TopArea">
          <div>
            <h3>오늘의 TODO</h3>
            <span className="DateString">{DateString}</span>
          </div>

          <div className="IconBox">
            <BiSort className="Icon" />
            <span>정렬</span>
            <BsLightbulb className="Icon" />
            <span className="Plan">일정 계획</span>
          </div>
        </div>
        <WriteArea />

        <div className="ListParentArea">
          <TodoListArea />
          <DoneListArea />
        </div>
      </div>
      <RightSlide />
    </div>
  );
}

export default MainTodo;
