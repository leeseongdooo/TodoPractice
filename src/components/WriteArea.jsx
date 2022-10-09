import "../css/WriteArea.scss"; // WriteArea.scss
import "../../node_modules/react-calendar/dist/Calendar.css"; // calender css.
import React, { useState, useContext, useEffect } from "react"; // react
// react-icons
import { BsCalendarDate, BsBroadcast } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
// Context
import { TodoContext } from "./Store";
// LiBrary
import Calendar from "react-calendar";

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
  }); // value값을 형변환 해준다.

  useEffect(() => {
    setDateString(EditDeadLine); // 수정한 값으로 저장될 수 있도록 설정.
  }, [value]);

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
              setCalendarClick(!CalendarClick); // 캘린더 아이콘 누를 시 CalendarClick이 현재 값과 반대로 바뀌며 true일 시 Calendar가 화면에 보입니다.
            }}
          />
          <BsBroadcast className="Icon" />
        </div>
        <button>추가</button>
      </div>
      <MiniCalendar CalendarClick={CalendarClick} /> {/* props로 값 전달. */}
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
  ] = useContext(TodoContext); // TodoContext 값 가져오기.

  const [inputText, setInputText] = useState(""); // 사용자가 입력하는 value값.
  const [CalendarClick, setCalendarClick] = useState(false); // 캘린더 아이콘 클릭 여부

  return (
    <div className="WriteArea">
      <div className="WriteForm WriteTopArea">
        <GrCheckbox className="CheckBoxIcon" /> {/* 체크박스[체크 전] 아이콘 */}
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
            if (e.keyCode == 13 && inputText.length !== 0) {
              onCreate(e.target.value);
              setInputText("");
              setDateString(Today);
              setCalendarClick(false);
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
