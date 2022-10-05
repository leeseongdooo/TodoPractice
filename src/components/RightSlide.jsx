import React, {useContext, useEffect, useState} from "react";
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
import "../css/RightSlide.scss";
import { TodoContext } from "./Store";
import {RightSideContext} from "./Context/RightSide";

export function RightSlide() {

  const [todolist, setTodoList] = useContext(TodoContext);
  const [RightSideChecked, setRightSideChecked, RightSideInfo, setRightSideInfo] = useContext(RightSideContext);
  const [todoname, setTodoname] = useState(""); // todoname 수정하기 위해 생성.
  let [count, setCount] = useState(0);
  const todonameKeyDown = (e) => {

    if(e.keyCode === 13)
    {
      
      setTodoname(e.target.value);
      RightSideInfo.todoname = todoname;
      setRightSideInfo(RightSideInfo);
      // ==============================
     
      setCount(count + 1);
      console.log(count);
    }
  }

  useEffect(()=>{ 
    setTodoname(RightSideInfo.todoname);
    todolist[RightSideInfo.id - 1] = RightSideInfo;
    // console.log(todolist[RightSideInfo.id - 1]);
    setTodoList(todolist);
  }, [RightSideInfo, count])

  return (
    <div className="RightSideArea" style={RightSideChecked === true ? {display: "flex"} : {display: "none"}}>
      {/* 전체 버튼을 감싸는 div */}
      <div className="ButtonParentBox">
        {/* 첫번째 버튼 박스. */}
        <div className="Group">
          <div className="Button">
            <input type="checkbox" />
            <input type="text" value={todoname || ""} onChange={(e)=>{setTodoname(e.target.value)}} onKeyDown={(e)=>{todonameKeyDown(e)}} className="TextInfo" />
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
        <BiExit className="Icon" onClick={() => {setRightSideChecked(false)}} />
        <span>TODO 정보</span>
        <BsTrash className="Icon" />
      </div>
    </div>
  );
}
