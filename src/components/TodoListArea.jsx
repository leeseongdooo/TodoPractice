import React, { useContext, useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "../css/TodoListArea.scss";
import { TodoContext } from "./Store";
import { RightSideContext } from "./Context/RightSide";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export function ListForm({ Info }) {
  const [
    RightSideChecked,
    setRightSideChecked,
    RightSideInfo,
    setRightSideInfo,
    todoname,
  ] = useContext(RightSideContext);

  const [todolist, setTodoList, onCreate, donelist, setDoneList] =
    useContext(TodoContext);

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
        deadline: Info.deadline
      },
    ]);
  };

  useEffect(() => {
    console.log("48");
    console.log(todolist);
  });

  return (
    <div
      className="ListFormArea"
      onClick={(e) => {
        setRightSideChecked(true);
        setRightSideInfo(Info);
      }}
    >
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
  );
}

function TodoListArea() {
  const [todolist, setTodoList] = useContext(TodoContext);
  const [
    RightSideChecked, // div를 클릭여부 BOOL
    setRightSideChecked,
    RightSideInfo, // 클릭한 div의 정보
    setRightSideInfo,
    todoname,
  ] = useContext(RightSideContext);

  useEffect(() => {
    console.log(todolist);
  }, [todoname]);

  return (
    <div className="TodoListArea">
      <div
        className="TopIntroduceArea"
        style={todolist.length === 0 ? { display: "none" } : {}}
      >
        {/* TodoListArea에서 Todo의 영역이라 알려주는 텍스트가 들어갑니다.*/}
        <BsChevronDoubleRight />
        <span>TODOLIST</span>
      </div>

      {todolist.map((Info) => (
        <ListForm key={Info.id} Info={Info} />
      ))}
    </div>
  );
}

export default TodoListArea;
