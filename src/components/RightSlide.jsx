import "../css/RightSlide.scss"; // css
// react
import React, { useContext, useState, useEffect } from "react";
// react-icons.
import { BsArrowRepeat, BsSun, BsCalendarDate, BsTrash } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
// Context.
import { TodoContext } from "./Store";
import { RightSideContext } from "./Context/RightSide";
import Calendar from "react-calendar";
import "../css/Calendar.css"

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
  ] = useContext(RightSideContext);

  const [value, onChange] = useState(new Date());

  // Enter 이벤트 (수정)
  const todonameKeyDown = (e) => {
    if (e.keyCode === 13) {
      todolist[RightSideInfo.id - 1].todoname = todoname; // todolist[선택한Todo].투두명 = 수정할 이름.
      setTodoList([...todolist]); // setTodoList로 수정한 값 업데이트.
    }
  };

  // 날짜 수정 이벤트.
  const EditDate = () => {
    const EditDeadLine = value.toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    todolist[RightSideInfo.id - 1].deadline = EditDeadLine;
    setTodoList([...todolist]);
  };

  const [RightSideCalendarClick, setRightSideCalendarClick] = useState(false);

  // TODOLIST SORTID
  const TodoSortId = () => {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id > RightSideInfo.id) {
        todolist[i].id -= 1;
        setTodoList(todolist);
        console.log(todolist);
      }
    }
  }
  // 삭제 이벤트.
  const DeleteData = () => {
    TodoSortId();
    setTodoList(todolist.filter((Info) => RightSideInfo.todoname !== Info.todoname));
  }

  // RightSideInfo가 변할 때 마다 setTodoname을 수정하기
  useEffect(() => {
    setTodoname(RightSideInfo.todoname);
    setRightSideCalendarClick(false);
    onChange(new Date());
    console.log(RightSideInfo);
  }, [RightSideInfo]);

  return (
    <div className="ModalBackground" style={RightSideChecked === true ? { display: "flex" } : { display: "none" }}>
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
              <MdDriveFileRenameOutline className="Icon"/>
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

            <div
              className="Button"
              onClick={() => {
                setRightSideCalendarClick(!RightSideCalendarClick);
              }}
            >
              <BsCalendarDate className="Icon" />
              <span>{RightSideInfo.deadline}</span>
            </div>

            <div
              className="RightSlideCalendar"
              style={
                RightSideCalendarClick === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Calendar className="calendar" onChange={onChange} />
              <button
                onClick={() => {
                  EditDate();
                  setRightSideCalendarClick(false);
                }}
                className="EditDateButton"
              >
                수정하기
              </button>
            </div>

            <div className="Button">
              <BsArrowRepeat className="Icon" />
              <span>반복</span>
            </div>
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
          <BsTrash className="Icon" onClick={()=>{DeleteData(); setRightSideChecked(false);}} />
        </div>
      </div>
    </div>
  );
}
