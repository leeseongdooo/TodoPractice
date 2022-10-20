import React, {useState, useContext, useEffect} from "react";
import { TodoContext } from "./Store";
import "../css/Schedule.scss"
import { IoConstructOutline } from "react-icons/io5";

function Schedule() {

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

    const today = new Date(); // 날짜

    let TodayString = today.toLocaleDateString("ko-KR", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });


    const [BeforeDateList, setBeforeDateList] = useState([]); // 오늘을 기준으로 이전날짜인 데이터를 저장하는 변수입니다.
    const [TodayDateList, setTodayDateList] = useState([]); // 오늘을 기준으로 오늘 데이터를 저장하는 변수입니다.
    const [AfterDateList, setAfterDateList] = useState([]); // 오늘을 기준으로 다음날 데이터를 저장하는 변수입니다.   
   

    // setTodayDateList([...TodayDateList, {
    //     id: Info.id,
    //     todoname: Info.todoname,
    //     finish: Info.finish,
    //     deadline: Info.deadline,
    //     important: Info.important,
    // }]);

    todolist.map((Info) => {
        if(TodayString === Info.deadline)
        {
           
           
        }
        else {
            console.log("다른거다..!" + Info.deadline)
        }
    })
    
    



    return (
        <div className="ScheduleParent">
            
        </div>
    )
}

export default Schedule;