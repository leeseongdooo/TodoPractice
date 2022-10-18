import "../css/Header.scss"; // css
import React, { useState, useEffect, useContext } from "react"; // react
import { TodoContext } from "./Store";
import { HeaderContext } from "./Context/HeaderContext";

function Header() {
  const [todolist, setTodoList] = useContext(TodoContext);
  const [SearchText, setSearchText, FilterList, setFilterList] =
    useContext(HeaderContext);

  useEffect(() => {
    console.log(FilterList);
    if (SearchText.length === 0) {
      // 검색 내용이 0이라면
      setFilterList([]); // 검색 내용을 저장하는 FIlterList를 초기화 해준다.
      setSearchText(SearchText + 1); // 임의의 값을 넣어서 무한반복을 막아준다.
    }
  }, [SearchText, FilterList]);

  return (
    <div className="HeaderParent">
      {/* Header의 가장 큰 div */}
      <div className="Left-Box">
        {/* 왼쪽 영역을 담당하는 사이트 로고가 있습니다. */}
        <h2>My TODO</h2>
      </div>
      <div className="InputBox">
        {/* 텍스트를 입력할 수 있는 영역입니다.  */}
        <input
          type="text"
          placeholder="검색하실 TODO명을 적어주세요"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // 엔터 눌렀을 떼
              if (todolist.length !== 0 && SearchText.length !== 0) {
                // todolist가 0이고, SearchText의 문자수가 0이 아니라면
                setFilterList(
                  todolist.filter((Info) => Info.todoname === SearchText) // filterList의 filter된 값을 넣어서 저장합니다.
                );
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
