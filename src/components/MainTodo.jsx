import "../css/MainTodo.scss"; // MainTodo css
// React-Icons.
import { BiSort } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai"; // React-icons.
import { BsLightbulb, BsSun } from "react-icons/bs";

// Component
import WriteArea from "./WriteArea";
import TodoListArea from "./TodoListArea";
import DoneListArea from "./DoneListArea";
import { RightSlide } from "./RightSlide";

// React.
import React, { useEffect, useState } from "react";
import LeftSlide from "./LeftSlide";
import { useLocation } from "react-router-dom";
import ImportantArea from "./ImportantArea";
import Schedule from "./Schedule";

function MainTodo() {
  const Today = new Date();
  let TodayString = Today.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }); // 변수에 오늘의 날짜를 String식으로.

  const [ShowLeftSlide, setShowLeftSlide] = useState(false); // ShowLeftSlide는 LeftSlide를 보여줄지 안보여줄지에 대한 bool값을 저장하는 변수입니다.

  const testParam = useLocation();

  useEffect(() => {
    console.log(ShowLeftSlide);
  }, [ShowLeftSlide]);

  return (
    <div className="MainTodoFlex">
      <LeftSlide
        setShowLeftSlide={setShowLeftSlide}
        ShowLeftSlide={ShowLeftSlide}
      />
      {/* MainTodoFlex = Main영역의 가장 큰 div. */}
      {/* 여기에 사이드 메뉴가 들어가면 될듯. */}
      <div className="MainTodoBox">
        {/* TopArea는 오늘의 날짜 정보, 정렬 기능이 있습니다. */}
        <div className="TopArea">
          <div className="FirstBox">
            {ShowLeftSlide !== true ? (
              <AiOutlineMenu
                className="menu-Icon"
                onClick={() => {
                  setShowLeftSlide(true);
                }}
              />
            ) : (
              <BsSun className="menu-Icon" />
            )}
            <div>
              <h3>
                {testParam.pathname === "/Important"
                  ? "중요"
                  : testParam.pathname === "/Schedule"
                  ? "계획된 일정"
                  : "오늘 할 일"}
              </h3>
              <span className="TodayString">{TodayString}</span>
            </div>
          </div>
        </div>

        {/* WriteArea는 새로운 TODO의 TODO명, 날짜, 알림설정을 할 수 있는 영역입니다. */}
        {testParam.pathname === "/" ? (
          <WriteArea Today={TodayString} />
        ) : (
          <div></div>
        )}

        {/* WriteArea에서 작성한 정보는 TODOListArea, DoneListArea에 값이 전달된 후 화면에 출력됩니다. */}
        <div
          className="ListParentArea"
          style={
            testParam.pathname === "/"
              ? { margin: "60px 0px 0px 0px" }
              : { margin: "0px 0px 0px 0px" }
          }
        >
          <div style={testParam.pathname === "/" ? {} : { display: "none" }}>
            <TodoListArea />
            <DoneListArea />
          </div>

          {testParam.pathname === "/Important" ? (
            <ImportantArea pathname={testParam.pathname} />
          ) : (
            <></>
          )}
          {testParam.pathname === "/Schedule" ? (
            <Schedule pathname={testParam.pathname} />
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* RightSlide는 오른쪽 슬라이드 메뉴바[수정기능이 있는]를 담당합니다. */}

      <RightSlide />
    </div>
  );
}

export default MainTodo;
