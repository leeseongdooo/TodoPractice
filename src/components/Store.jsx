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
  const [todoname, setTodoname] = useState("");

  const Today = new Date();

  let [DateString, setDateString] = useState(
    Today.toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
  ); // 변수에 오늘의 날짜를 String식으로.

  const onCreate = (todoName) => {
    setTodoList([
      ...todolist,
      {
        id: todolist.length + 1,
        todoname: todoName,
        finish: false,
        deadline: DateString,
      },
    ]);
  };

  return (
    <RightSideContext.Provider
      value={[
        RightSideChecked,
        setRightSideChecked,
        RightSideInfo,
        setRightSideInfo,
        todoname,
        setTodoname,
      ]}
    >
      <TodoContext.Provider
        value={[
          todolist,
          setTodoList,
          onCreate,
          donelist,
          setDoneList,
          setDateString,
        ]}
      >
        <Header />
        <MainTodo />
      </TodoContext.Provider>
    </RightSideContext.Provider>
  );
}

export default Store;
