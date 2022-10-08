import "../css/DoneListArea.scss"; // css
import React, { useContext } from "react"; // react
import { ListForm } from "./TodoListArea"; // ListForm 가져오기
import { TodoContext } from "./Store"; // Context api
import { RightSideContext } from "./Context/RightSide"; // Context api
import { BsChevronDoubleRight } from "react-icons/bs"; // React-icons.

// 완료된 TODOLIST가 보관되는 영역입니다
function DoneListArea() {
  // Store.jsx에서 Provider로 전송되는 값을 가져옴.
  const [RightSideChecked, setRightSideChecked] = useContext(RightSideContext);
  const [todolist, setTodoList, onCreate, donelist, setDoneList] =
    useContext(TodoContext);

  return (
    <div className="DoneListArea">
      <div style={donelist.length === 0 ? { display: "none" } : {}}>
        {/* donelist가 0이면 보이지 않고 0보다 크다면 보이게 설정.*/}
        <div className="TopIntroduceArea">
          <BsChevronDoubleRight />
          <span>DONE</span>
        </div>
       
        {/* DoneList에 있는 값을 map돌아서 화면에 출력합니다. */}
        {donelist.map((Info) => (
          <ListForm key={Info.id} todoname={Info.todoname} Info={Info} />
        ))}
      </div>
    </div>
  );
}

export default DoneListArea;
