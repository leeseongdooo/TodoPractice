import React, { useRef, useState, useContext, useEffect } from "react";
import { BsCalendarDate, BsBroadcast } from "react-icons/bs";
import "../css/WriteArea.scss";
import { TodoContext } from "./Store";
import { GrCheckbox } from "react-icons/gr";
// 아래 아이콘, 추가버튼 영역.
function WriteAreaBottom({ test }) {
  return (
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
        <BsCalendarDate className="Icon" />
        <BsBroadcast className="Icon" />
      </div>
      <button>추가</button>
    </div>
  );
}

function WriteArea() {
  const [focusBool, setFocusBool] = useState(false);
  const [todolist, setTodoList, onCreate, donelist] = useContext(TodoContext);
  const [inputText, setInputText] = useState(""); // 사용자가 입력하는 value값.
  //   const onCreate = (todoName) => {
  //
  //   };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

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
            }
          }}
        />
      </div>
      <WriteAreaBottom test={focusBool} />
    </div>
  );
}

export default WriteArea;
