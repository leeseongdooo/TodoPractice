import React, { useRef, useState, useContext, useEffect } from "react";
import { BsCalendarDate, BsBroadcast } from "react-icons/bs";
import "../css/WriteArea.scss";
import { TodoContext } from "./Store";
import { GrCheckbox } from "react-icons/gr";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MiniCalendar({ CalendarClick }) {
  const [
    todolist,
    setTodoList,
    onCreate,
    donelist,
    setDoneList,
    setDateString,
  ] = useContext(TodoContext);

  const [value, onChange] = useState(new Date());

  const EditDeadLine = value.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  console.log(EditDeadLine);
  setDateString(EditDeadLine);
  return (
    <div
      className="MiniCalendar"
      style={
        CalendarClick === true ? { display: "block" } : { display: "none" }
      }
    >
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

function WriteAreaBottom({ test, CalendarClick, setCalendarClick }) {
  return (
    <>
      <div
        className="WriteForm WriteBottomArea"
        style={
          test === true
            ? { transform: "translateY(50px)" }
            : { transform: "translateY(0px)" }
        }
      >
        {/* 아이콘 박스 */}
        <div className="IconBox">
          <BsCalendarDate
            className="Icon"
            onClick={() => {
              setCalendarClick(!CalendarClick);
            }}
          />
          <BsBroadcast className="Icon" />
        </div>
        <button>추가</button>
      </div>

      <MiniCalendar CalendarClick={CalendarClick} />
    </>
  );
}

function WriteArea({ Today }) {
  const [focusBool, setFocusBool] = useState(false); // 클릭했다면 true로 변경 후 WriteAreaBottom이 나오도록 설정.
  const [
    todolist,
    setTodoList,
    onCreate,
    donelist,
    setDoneList,
    setDateString,
  ] = useContext(TodoContext);
  const [inputText, setInputText] = useState(""); // 사용자가 입력하는 value값.
  const [CalendarClick, setCalendarClick] = useState(false);
  return (
    <div className="WriteArea">
      <div className="WriteForm WriteTopArea">
        <GrCheckbox className="CheckBoxIcon" />
        <input
          type="text"
          placeholder="TODO 추가"
          value={inputText}
          onClick={() => {
            setFocusBool(true);
          }}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              onCreate(e.target.value);
              setInputText("");
              setCalendarClick(false);
              setDateString(Today);
              console.log(Today);
            }
          }}
        />
      </div>
      <WriteAreaBottom
        test={focusBool}
        setCalendarClick={setCalendarClick}
        CalendarClick={CalendarClick}
      />
    </div>
  );
}

export default WriteArea;
