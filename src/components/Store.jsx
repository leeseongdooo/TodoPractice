import React, { useState, createContext } from "react"; // react
import { RightSideContext } from "./Context/RightSide"; // Context 폴더에서 RightSideContext를 가져옵니다.
import { HeaderContext } from "./Context/HeaderContext";
import { ScheduleContext } from "./Context/ScheduleContext";
import MainTodo from "./MainTodo";
import Header from "./Header";

export const TodoContext = createContext(); // 다른 Component에서 TodoContext를 사용할 수 있게 export해줍니다.

function Store() {
  const [todolist, setTodoList] = useState([]); // todolist를 저장할 변수입니다.
  const [donelist, setDoneList] = useState([]); // donelist를 지정할 변수입니다.
  const [RightSideInfo, setRightSideInfo] = useState({}); // RightSideInfo는 클릭한 [todo, donetodo]의 정보를 저장합니다.
  const [RightSideChecked, setRightSideChecked] = useState(false); // 사용자가 특정한 투두의 div를 클릭 시 true로 변환되어 오른쪽 슬라이드가 나올 수 있게 설정.
  const [todoname, setTodoname] = useState(""); // RightSideInfo에서 TODO명을 수정하기 위해 만들었습니다.
  const [Important, setImportant] = useState(false); // 별을 누르면 true로 변환되게
  const [ImportantCount, setImportantCount] = useState(0);
  const [SearchText, setSearchText] = useState(""); // 검색할 문자를 저장하는곳.
  const [FilterList, setFilterList] = useState([]); // filter결과를 저장하는곳
  
  const [TodayList, setTodayList] = useState([]);

  const Today = new Date();

  let [DateString, setDateString] = useState(
    Today.toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
  );
  // WriteArea에서 Todo를 생성 시 날짜를 선택하지 않으면 오늘 날짜로 들어가고, 날짜를 선택한다면 선택한 날짜로 변경되어 저장되도록 하기 위해 만들었습니다.

  const onCreate = (todoName) => {
    setTodoList([
      ...todolist,
      {
        id: todolist.length + 1,
        todoname: todoName,
        finish: false,
        deadline: DateString,
        important: false,
      },
    ]);
  };

  return (
    <HeaderContext.Provider
      value={[SearchText, setSearchText, FilterList, setFilterList]}
    >
      <ScheduleContext.Provider value={[TodayList, setTodayList]}>

     

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
            setImportant,
            ImportantCount,
            setImportantCount
          ]}
        >
          <Header />
          <MainTodo />
        </TodoContext.Provider>
      </RightSideContext.Provider>
      </ScheduleContext.Provider>
    </HeaderContext.Provider>
  );
}

export default Store;
