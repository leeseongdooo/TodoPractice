import React, {useState, useEffect, useContext} from "react";
import { TodoContext } from "./Store";
import { ListForm } from "./TodoListArea"; // ListForm 가져오기
import { BsChevronDoubleRight } from "react-icons/bs"
import "../css/ImportantArea.scss";

function ImportantArea({pathname}) {

    const [
        todolist,
        setTodoList,
        onCreate,
        donelist,
        setDoneList,
        setDateString,
        setImportant,
        ImportantCount, 
        setImportantCount
      ] = useContext(TodoContext);

    const [importantList, setImportantList] = useState([]);
    
    useEffect(()=>{
        setImportantList(todolist.filter((Info) => Info.important === true));
    }, [ImportantCount])

    return (
        <div className="ImportantListArea">
            <div style={pathname === "/Important" ? { } : {dipslay: "none"}}>

                <div>
                    <BsChevronDoubleRight />
                    <span>중요</span>
                </div>

                {importantList.map((Info) => (
                    <ListForm key={Info.id} todoname={Info.todoname} Info={Info} />
                ))}

            </div>
        </div>
    )
}

export default ImportantArea;