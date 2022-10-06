import "../css/RightSlide.scss"; // css
// react
import React, { useContext, useEffect } from "react";
// react-icons.
import { BsArrowRepeat, BsSun, BsCalendarDate, BsTrash } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineBell,
  AiOutlinePaperClip,
} from "react-icons/ai";
// Context.
import { TodoContext } from "./Store";
import { RightSideContext } from "./Context/RightSide";

export function RightSlide() {
  // TodoContext에서 값을 가져옵니다.
  const [todolist, setTodoList] = useContext(TodoContext);

  const [
    RightSideChecked, // div를 클릭여부 BOOL
    setRightSideChecked,
    RightSideInfo, // 클릭한 div의 정보
    setRightSideInfo,
    todoname,
    setTodoname,
    onChange,
  ] = useContext(RightSideContext);

  // Enter 이벤트 (수정)
  const todonameKeyDown = (e) => {
    if (e.keyCode === 13) {
      todolist[RightSideInfo.id - 1].todoname = todoname; // todolist[선택한Todo].투두명 = 수정할 이름.
      setTodoList([...todolist]); // setTodoList로 수정한 값 업데이트.
    }
  };

  // RightSideInfo가 변할 때 마다 setTodoname을 수정하기
  useEffect(() => {
    setTodoname(RightSideInfo.todoname);
  }, [RightSideInfo]);

  return (
    <div
      className="RightSideArea"
      style={
        RightSideChecked === true ? { display: "flex" } : { display: "none" } // div클릭 했다면 RightSideChecked가 true가 되고 화면에 출력됩니다.
      }
    >
      {/* 전체 버튼을 감싸는 div */}
      <div className="ButtonParentBox">
        {/* 첫번째 버튼 박스. */}
        <div className="Group">
          <div className="Button">
            <input type="checkbox" />
            <input
              type="text"
              value={todoname || ""}
              onChange={(e) => {
                setTodoname(e.target.value);
              }}
              onKeyDown={(e) => {
                todonameKeyDown(e);
              }}
              className="TextInfo"
            />
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
            <span>지정된 알림 없음</span>
          </div>

          <div className="Button">
            <BsCalendarDate className="Icon" />
            <span>{RightSideInfo.deadline}</span>
          </div>

          <div className="Button">
            <BsArrowRepeat className="Icon" />
            <span>반복</span>
          </div>
        </div>

        <div className="Button Solo">
          <AiOutlinePaperClip className="Icon" />
          <span></span>
        </div>
      </div>

      <div className="BottomArea">
        <BiExit
          className="Icon"
          onClick={() => {
            setRightSideChecked(false);
          }}
        />
        <span>TODO 정보</span>
        <BsTrash className="Icon" />
      </div>
    </div>
  );
}
