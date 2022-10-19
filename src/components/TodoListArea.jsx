import React, { useContext, useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "../css/TodoListArea.scss";
import { TodoContext } from "./Store";
import { RightSideContext } from "./Context/RightSide";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { HeaderContext } from "./Context/HeaderContext";

export function ListForm({ Info }) {
  const [
    RightSideChecked,
    setRightSideChecked,
    RightSideInfo,
    setRightSideInfo,
    todoname,
  ] = useContext(RightSideContext);

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

  const [] = useContext(TodoContext);

  // id 정렬.
  const sortId = () => {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id > Info.id) {
        todolist[i].id -= 1;
        setTodoList(todolist);
        console.log(todolist);
      }
    }
  };

  // checkBoxClick함수.
  const CheckBoxClick = () => {
    todolist[Info.id - 1].finish = !todolist[Info.id - 1].finish;
    sortId();
    setTodoList(todolist.filter((Info) => Info.finish === false));

    setDoneList([
      ...donelist,
      {
        id: donelist.length + 1,
        todoname: Info.todoname,
        finish: Info.finish,
        deadline: Info.deadline,
      },
    ]);
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div
      className="ListFormArea"
      onClick={(e) => {
        setRightSideChecked(true);
        setRightSideInfo(Info);
      }}
    >
      <div className="FrontBox">
        {Info.finish !== true ? (
          <GrCheckbox
            onClick={(e) => {
              CheckBoxClick();
            }}
            className="CheckBoxIcon"
          />
        ) : (
          <GrCheckboxSelected className="CheckBoxIcon" />
        )}

        <div className="TodolistInfoText">
          <span className="TodoNameText">{Info.todoname}</span>
          <span className="DeadLineText">{Info.deadline}</span>
        </div>
      </div>

      {Info.important === false ? (
        <AiOutlineStar
          className="Icon"
          onClick={() => {
            todolist[Info.id - 1].important = true;
            setTodoList(todolist);
            setImportant(true);
            setImportantCount(ImportantCount + 1);
          }}
        />
      ) : (
        <AiFillStar
          className="Icon"
          onClick={() => {
            todolist[Info.id - 1].important = false;
            console.log(todolist[Info.id - 1].important);
            setTodoList(todolist);
            setImportant(false);
            setImportantCount(ImportantCount - 1);
         
          }}
        />
      )}
    </div>
  );
}

function TodoListArea() {
  const [todolist, setTodoList] = useContext(TodoContext);
  const [SearchText, setSearchText, FilterList, setFilterList] =
    useContext(HeaderContext);
  const [
    RightSideChecked, // div를 클릭여부 BOOL
    setRightSideChecked,
    RightSideInfo, // 클릭한 div의 정보
    setRightSideInfo,
    todoname,
  ] = useContext(RightSideContext);

  useEffect(() => {
    console.log(todolist);
    console.log("검색문자 테스트" + SearchText.length);
  }, [SearchText]);

  return (
    <>
      <div className="TodoListArea">
        <div
          className="TopIntroduceArea"
          style={todolist.length === 0 ? { display: "none" } : {}}
        >
          {/* TodoListArea에서 Todo의 영역이라 알려주는 텍스트가 들어갑니다.*/}
          <BsChevronDoubleRight />
          <span>TODOLIST</span>
        </div>

        {SearchText.length > 0 && FilterList.length > 0
          ? FilterList.map((Info) => <ListForm key={Info.id} Info={Info} />)
          : todolist.map((Info) => <ListForm key={Info.id} Info={Info} />)}

        {/* {todolist.map((Info) => (
          <ListForm key={Info.id} Info={Info} />
        ))} */}
      </div>
    </>
  );
}

export default TodoListArea;
