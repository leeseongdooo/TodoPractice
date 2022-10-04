import React, { useContext, useEffect } from "react";
import { TodoContext } from "./Store";
import { BsChevronDoubleRight } from "react-icons/bs";
import { ListForm } from "./TodoListArea";
import "../css/DoneListArea.scss";

// 완료된 TODOLIST가 보관되는 영역입니다
function DoneListArea() {
  const [todolist, setTodoList, onCreate, donelist, setDoneList] =
    useContext(TodoContext);
  console.log("donelist" + donelist.length);

  return (
    <div className="DoneListArea">
      <div style={donelist.length === 0 ? { display: "none" } : {}}>
        {/* TodoListArea에서 Todo의 영역이라 알려주는 텍스트가 들어갑니다.*/}
        <BsChevronDoubleRight />
        <span>DONE</span>
        {donelist.map((Info) => (
          <ListForm key={Info.id} todoname={Info.todoname} Info={Info} />
        ))}
      </div>
    </div>
  );
}

export default DoneListArea;
