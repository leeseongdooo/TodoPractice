import React, { useState, useContext, useCallback, useEffect } from "react";

import { TodoContext } from "./Store";
import { ListForm } from "./TodoListArea";
import NoList from "./NoList";
import "../css/Schedule.scss";
import { IoIosArrowForward } from "react-icons/io";

function Schedule() {
  // 오늘에 대한 정보를 저장하는 변수
  const Today = new Date();
  let TodayString = Today.toLocaleDateString("ko-KR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // store에서 todolist를 context를 통해서 가져옴.
  const [todolist] = useContext(TodoContext);
  const [PreviousDay, setPreviousDay] = useState([]); // 날짜가 이전날인 데이터를 저장하는 변수 입니다.
  const [TodayList, setTodayList] = useState([]); // 날짜가 오늘과 같은 데이터를 저장하는 변수 입니다.
  const [NextDay, setNextDay] = useState([]); // 날짜가 다음날인 데이터를 저장하는 변수 입니다.

  // Arrow 아이콘 클릭시 이벤트.
  const [PreviousArrow, setPreviousArrow] = useState(false);
  const [TodayArrow, setTodayArrow] = useState(false);
  const [NextArrow, setNextArrow] = useState(false);

  // 사이트에 들어오면 날짜에 맞게 필터링 된다.
  useEffect(() => {
    setPreviousDay(todolist.filter((Info) => Info.deadline < TodayString));
    setTodayList(todolist.filter((Info) => Info.deadline === TodayString));
    setNextDay(todolist.filter((Info) => Info.deadline > TodayString));
  }, []);

  // 여기서부터 함수.
  const PreviousClick = () => {
    setPreviousArrow(!PreviousArrow);
  };

  const TodayClick = () => {
    setTodayArrow(!TodayArrow);
  };

  const NextClick = () => {
    setNextArrow(!NextArrow);
  };

  console.log(TodayList);

  return (
    <div className="ScheduleParent">
      {PreviousDay.length > 0 || TodayList.length > 0 || NextDay.length > 0 ? (
        <div className="ScheduleInsideBox">
          <div>
            <div
              className={PreviousDay.length > 0 ? "ListBox" : "NoListBox"}
              onClick={() => {
                PreviousClick();
              }}
            >
              <IoIosArrowForward
                className={PreviousArrow === true ? "Arrow Active" : "Arrow"}
              />
              <h4>다음날</h4>
            </div>

            <div className="ListArea">
              {PreviousArrow === true
                ? PreviousDay.map((Info) => (
                    <ListForm
                      key={Info.id}
                      todoname={Info.todoname}
                      Info={Info}
                    />
                  ))
                : ""}
            </div>
          </div>

          <div>
            <div
              className={TodayList.length > 0 ? "ListBox" : "NoListBox"}
              onClick={() => {
                TodayClick();
              }}
            >
              <IoIosArrowForward
                className={TodayArrow === true ? "Arrow Active" : "Arrow"}
              />
              <h4>오늘</h4>
            </div>

            <div className="ListArea">
              {TodayArrow === true
                ? TodayList.map((Info) => (
                    <ListForm
                      key={Info.id}
                      todoname={Info.todoname}
                      Info={Info}
                    />
                  ))
                : ""}
            </div>
          </div>

          <div>
            <div
              className={NextDay.length > 0 ? "ListBox" : "NoListBox"}
              onClick={() => {
                NextClick();
              }}
            >
              <IoIosArrowForward
                className={NextArrow === true ? "Arrow Active" : "Arrow"}
              />
              <h4>다음날</h4>
            </div>

            <div className="ListArea">
              {NextArrow === true
                ? NextDay.map((Info) => (
                    <ListForm
                      key={Info.id}
                      todoname={Info.todoname}
                      Info={Info}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <NoList />
      )}
    </div>
  );
}

export default Schedule;