import React, { useContext, useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "../css/TodoListArea.scss";
import { TodoContext } from "./Store";
import {RightSideContext} from "./Context/RightSide";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export function ListForm({ todoname, Info, }) {

  const [RightSideChecked, setRightSideChecked, RightSideInfo, setRightSideInfo] = useContext(RightSideContext);

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
      },
    ]);
  };

  useEffect(() => {
    console.log(donelist);
  }, [donelist, todolist]);

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
      <span>{todoname}</span>
    </div>
  );
}

function TodoListArea() {
  const [todolist] = useContext(TodoContext);

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
        <ListForm
          key={Info.id}
          todoname={Info.todoname}
          Info={Info}
        />
      ))}
    </div>
  );
}

export default TodoListArea;
