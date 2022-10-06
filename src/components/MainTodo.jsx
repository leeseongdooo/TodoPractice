import "../css/MainTodo.scss"; // MainTodo css
// React-Icons.
import { BiSort } from "react-icons/bi";
import { BsLightbulb } from "react-icons/bs";
// Component
import WriteArea from "./WriteArea";
import TodoListArea from "./TodoListArea";
import DoneListArea from "./DoneListArea";
import { RightSlide } from "./RightSlide";
// React.
import React from "react";

function MainTodo() {
  const Today = new Date();
  let TodayString = Today.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }); // 변수에 오늘의 날짜를 String식으로.

  return (
    <div className="MainTodoFlex">
      {/* MainTodoFlex = Main영역의 가장 큰 div. */}
      {/* 여기에 사이드 메뉴가 들어가면 될듯. */}
      <div className="MainTodoBox">
        {/* TopArea는 오늘의 날짜 정보, 정렬 기능이 있습니다. */}
        <div className="TopArea">
          <div>
            <h3>오늘의 TODO</h3>
            <span className="TodayString">{TodayString}</span>
          </div>

          <div className="IconBox">
            <BiSort className="Icon" />
            <span>정렬</span>
            <BsLightbulb className="Icon" />
            <span className="Plan">일정 계획</span>
          </div>
        </div>
        {/* WriteArea는 새로운 TODO의 TODO명, 날짜, 알림설정을 할 수 있는 영역입니다. */}
        <WriteArea Today={TodayString} />

        {/* WriteArea에서 작성한 정보는 TODOListArea, DoneListArea에 값이 전달된 후 화면에 출력됩니다. */}
        <div className="ListParentArea">
          <TodoListArea />
          <DoneListArea />
        </div>
      </div>
      {/* RightSlide는 오른쪽 슬라이드 메뉴바[수정기능이 있는]를 담당합니다. */}
      <RightSlide />
    </div>
  );
}

export default MainTodo;
