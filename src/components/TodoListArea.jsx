import React, { useContext, useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "../css/TodoListArea.scss";
import { TodoContext } from "./Store";

export function ListForm({ todoname, Info }) {
  const [todolist, setTodoList, onCreate, donelist, setDoneList] =
    useContext(TodoContext);

  // checkBoxClick함수.
  const CheckBoxClick = () => {
    todolist[Info.id - 1].finish = !todolist[Info.id - 1].finish;
    const AfterFilter = todolist.filter((Info) => Info.filter === true);
    setTodoList(AfterFilter);

    setDoneList([
      ...donelist,
      {
        id: donelist.length,
        todoname: Info.todoname,
        finish: Info.finish,
      },
    ]);
  };

  useEffect(() => {
    console.log(donelist);
  }, [donelist]);

  return (
    <div
      className="ListFormArea"
      onClick={(e) => {
        console.log("세부정보가 나와야 합니다.");
      }}
    >
      <input
        type="checkbox"
        onClick={(e) => {
          CheckBoxClick();
        }}
      />
      <span>{todoname}</span>
    </div>
  );
}

function TodoListArea() {
  const [todolist] = useContext(TodoContext);

  useEffect(() => {});

  return (
    <div className="TodoListArea">
      <div
        className="TopIntroduceArea"
        style={todolist.length === 0 ? { display: "none" } : {}}
      >
        {" "}
        {/* TodoListArea에서 Todo의 영역이라 알려주는 텍스트가 들어갑니다.*/}
        <BsChevronDoubleRight />
        <span>TODOLIST</span>
      </div>

      {todolist.map((Info) => (
        <ListForm key={Info.id} todoname={Info.todoname} Info={Info} />
      ))}
    </div>
  );
}

export default TodoListArea;
