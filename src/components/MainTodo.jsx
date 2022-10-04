import React, { useState, useContext, useEffect } from "react";
import {
  BsLightbulb,
  BsArrowRepeat,
  BsSun,
  BsCalendarDate,
  BsTrash,
} from "react-icons/bs";
import { BiSort, BiExit } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineBell,
  AiOutlinePaperClip,
} from "react-icons/ai";
import WriteArea from "./WriteArea";
import TodoListArea from "./TodoListArea";
import "../css/MainTodo.scss";
import { TodoContext } from "./Store";
import DoneListArea from "./DoneListArea";
// 투두리스트의 상세정보를 보여주는 Component 입니다.

function RightSide({}) {
  return (
    <div className="RightSideArea">
      {/* 전체 버튼을 감싸는 div */}
      <div className="ButtonParentBox">
        {/* 첫번째 버튼 박스. */}
        <div className="Group">
          <div className="Button">
            <input type="checkbox" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <AiOutlinePlus className="Icon" style={{ color: "royalblue" }} />
            <span>단계 추가</span>
          </div>
        </div>

        <div className="Button Solo">
          <BsSun className="Icon" />
          <span>나의 하루에 추가됨.</span>
        </div>

        <div className="Group">
          <div className="Button">
            <AiOutlineBell className="Icon" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <BsCalendarDate className="Icon" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <BsArrowRepeat className="Icon" />
            <span>투두명.</span>
          </div>
        </div>

        <div className="Button Solo">
          <AiOutlinePaperClip className="Icon" />
          <span>투두명.</span>
        </div>
      </div>

      <div className="BottomArea">
        <BiExit className="Icon" />
        <span>TODO 정보</span>
        <BsTrash className="Icon" />
      </div>
    </div>
  );
}

function MainTodo() {
  const myDate = new Date(); // new Date = 날짜를 가져온다

  let DateString = myDate.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }); // 변수에 오늘의 날짜를 String식으로.

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
      <RightSide />
    </div>
  );
}

export default MainTodo;
