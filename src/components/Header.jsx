import React from "react";
import "../css/Header.scss";
import { AiOutlineMenu } from "react-icons/ai";

// 배경색이 royalblue로 된 영역.
// menu를 열 수 있는 Icon과 검색기능이 있는 Input을 배치 하였습니다.

function Header() {
  return (
    <div className="HeaderParent">
      <div className="Left-Box">
        <AiOutlineMenu className="Icons" />
        <h2>My TODO</h2>
      </div>

      <div className="InputBox">
        <input type="text" placeholder="검색하실 TODO명을 적어주세요" />{" "}
        {/* 여기에 검색기능 추가. */}
      </div>
    </div>
  );
}

export default Header;
