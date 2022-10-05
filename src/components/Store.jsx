import React, { useState, createContext } from "react";
import { RightSideContext } from "./Context/RightSide";
import MainTodo from "./MainTodo";
import Header from "./Header";

export const TodoContext = createContext();

function Store() {
  const [todolist, setTodoList] = useState([]); // todolist를 저장할 변수.
  const [donelist, setDoneList] = useState([]); // donelist를 지정할 변수
  const [RightSideInfo, setRightSideInfo] = useState({});
  const [RightSideChecked, setRightSideChecked] = useState(false);

  const onCreate = (todoName) => {
    setTodoList([
      ...todolist,
      {
        id: todolist.length + 1,
        todoname: todoName,
        finish: false,
      },
    ]);
  };

  return (
    <RightSideContext.Provider value={[RightSideChecked, setRightSideChecked, RightSideInfo, setRightSideInfo]}>
      <TodoContext.Provider
        value={[todolist, setTodoList, onCreate, donelist, setDoneList]}
      >
        <Header />
        <MainTodo />
      </TodoContext.Provider>
    </RightSideContext.Provider>
  );
}

export default Store;
