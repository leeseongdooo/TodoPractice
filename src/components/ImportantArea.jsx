import React, {useState, useEffect, useContext} from "react";
import { TodoContext } from "./Store";
import { ListForm } from "./TodoListArea"; // ListForm 가져오기
import { BsChevronDoubleRight } from "react-icons/bs"
import { BiError } from "react-icons/bi";
import "../css/ImportantArea.scss";


function NoImportant({pathname, importantList}) {
    return (
        <div className="NoImportant" style={pathname === "/Important" && importantList.length === 0 ? {} : {display: "none"}} >   
            <BiError className="Icons"/>
            <h2>아직 중요 투두리스트가 없어요 ㅜ.ㅜ</h2>
        </div>
    )
}

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
    }, [ImportantCount, todolist])
    console.log("지금 현재 주소는 : " + pathname)
    return (
        <>
            <div className="ImportantListArea">
                <div style={pathname === "/Important" && importantList.length > 0 ? {} : {display: "none"}}>
                    <div>
                        <BsChevronDoubleRight />
                        <span>중요</span>
                    </div>

                    {importantList.map((Info) => (
                        <ListForm key={Info.id} todoname={Info.todoname} Info={Info} />
                    ))}
                </div>
                <NoImportant pathname={pathname} importantList={importantList} />
                
            </div>
        </>
    )
}

export default ImportantArea;