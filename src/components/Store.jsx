import React, { useState, createContext } from "react";
import MainTodo from "./MainTodo";
import Header from "./Header";

export const TodoContext = createContext();

function Store() {
  const [todolist, setTodoList] = useState([]); // todolist를 저장할 변수.
  const [donelist, setDoneList] = useState([]);

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
    <>
      <TodoContext.Provider
        value={[todolist, setTodoList, onCreate, donelist, setDoneList]}
      >
        <Header />
        <MainTodo />
      </TodoContext.Provider>
    </>
  );
}

export default Store;
