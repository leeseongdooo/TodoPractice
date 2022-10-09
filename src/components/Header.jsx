import "../css/Header.scss"; // css
import React, { useState, useEffect, useContext } from "react"; // react
import { AiOutlineMenu } from "react-icons/ai"; // React-icons.
import { TodoContext } from "./Store";

function Header() {
  const [todolist] = useContext(TodoContext);
  const [SearchText, setSearchText] = useState("");
  const [todonameList, setTodoNameList] = useState([]);

  useEffect(() => {
    console.log(SearchText);
    setTodoNameList(
      todolist.map((Info) => {
        return Info.todoname;
      })
    );
  }, [SearchText, todolist]);

  return (
    <div className="HeaderParent">
      {/* Header의 가장 큰 div */}
      <div className="Left-Box">
        {/* 왼쪽 영역을 담당하는 Left Box ICON과 사이트 로고가 있습니다. */}
        <AiOutlineMenu className="Icons" />
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
        />
        <button
          onClick={() => {
            for (let i = 0; i < todolist.length; i++) {
              const todo = todolist[i].todoname;
              const SearchResult = todo.includes(SearchText, 0);

              if (SearchResult === true) {
                console.log("이건 성공" + todo);
              } else {
                console.log("이건 성공 X");
              }
            }
          }}
        >
          TEST
        </button>
        {/* 여기에 검색기능 추가. */}
      </div>
    </div>
  );
}

export default Header;
