import React, {useState, useContext, useCallback, useEffect} from "react";
import { TodoContext } from "./Store";
import "../css/Schedule.scss"
import { IoConstructOutline } from "react-icons/io5";
import { ScheduleContext } from "./Context/ScheduleContext";




function Schedule() {

    const Today = new Date();
    let TodayString = Today.toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }); 

    const [todolist] = useContext(TodoContext);
    const [TodayList, setTodayList] = useContext(ScheduleContext);
    const [test, setTest] = useState(0);

   
    useEffect(()=>{
        todolist.map((Info) => {
            
                setTodayList([...TodayList, {
                    id: Info.id,
                    todoname: Info.todoname,
                    finish: Info.finish
                }])
            
            console.log(Info)
        })
    }, [])

    console.log(TodayList)
        
     

    return (
        <div className="ScheduleParent">
           {test}
           {todolist.length}
        </div>
    )
}

export default Schedule;