import React, { useState, useEffect, useContext } from "react";
import {
  AiOutlineMenu,
  AiOutlineStar,
  AiTwotoneCalendar,
  AiOutlineHome,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import "../css/LeftSlide.scss";
import { TodoContext } from "./Store";

function LeftSlide({ setShowLeftSlide }) {


  const [
    todolist,
    setTodoList,
    onCreate,
    donelist,
    setDoneList,
    setDateString,
    setImportant,
    ImportantCount, 
    setImportantCount
  ] = useContext(TodoContext);
  const [ImportantList, setImportantList] = useState([]);
  

  const CountCheck = () => {
   setImportantList(todolist.filter((Info) => Info.important === true));
  }

  useEffect(()=>{
    CountCheck();
  }, [ImportantCount])
  
  console.log(ImportantList)

  return (
    <div className="LeftSideArea">
      <div className="TopArea">
        <AiOutlineMenu
          className="Icons Menu-Icon"
          onClick={() => {
            setShowLeftSlide(false);
          }}
        />

        {/* 오늘 할 일 */}
        <Link to="/">
          <div className="Inner-Item">
            <BsSun className="Icons" />
            <span>오늘 할 일</span>
          </div>
        </Link>

        {/* 중요 */}
        <Link to="/Important">
          <div className="Inner-Item">
            <AiOutlineStar className="Icons" />
            <span>중요</span>
          </div>
        </Link>

        {/* 계획된 일정 */}
        <Link to="/Schedule" >
          <div className="Inner-Item">
            <AiTwotoneCalendar className="Icons" />
            <span>계획된 일정</span>
          </div>
        </Link>

        {/* 나에게 할당됨 */}
        <div className="Inner-Item">
          <GrWorkshop className="Icons" />
          <span>나에게 할당됨</span>
        </div>

        {/* 작업 */}
        <div className="Inner-Item">
          <AiOutlineHome className="Icons" />
          <span>작업</span>
        </div>
      </div>

      <div className="CategoryArea">
        <div className="Add-Category">
          <AiOutlinePlus className="Icons" />
          <span>새 목록</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSlide;
