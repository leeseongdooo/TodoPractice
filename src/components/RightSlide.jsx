import React from "react";
import {
  BsLightbulb,
  BsArrowRepeat,
  BsSun,
  BsCalendarDate,
  BsTrash,
} from "react-icons/bs";
import { BiSort, BiExit } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineBell,
  AiOutlinePaperClip,
} from "react-icons/ai";

export function RightSlide() {
  return (
    <div className="RightSideArea">
      {/* 전체 버튼을 감싸는 div */}
      <div className="ButtonParentBox">
        {/* 첫번째 버튼 박스. */}
        <div className="Group">
          <div className="Button">
            <input type="checkbox" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <AiOutlinePlus className="Icon" style={{ color: "royalblue" }} />
            <span>단계 추가</span>
          </div>
        </div>

        <div className="Button Solo">
          <BsSun className="Icon" />
          <span>나의 하루에 추가됨.</span>
        </div>

        <div className="Group">
          <div className="Button">
            <AiOutlineBell className="Icon" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <BsCalendarDate className="Icon" />
            <span>투두명.</span>
          </div>

          <div className="Button">
            <BsArrowRepeat className="Icon" />
            <span>투두명.</span>
          </div>
        </div>

        <div className="Button Solo">
          <AiOutlinePaperClip className="Icon" />
          <span>투두명.</span>
        </div>
      </div>

      <div className="BottomArea">
        <BiExit className="Icon" onClick={() => {}} />
        <span>TODO 정보</span>
        <BsTrash className="Icon" />
      </div>
    </div>
  );
}
