import "../css/Header.scss"; // css
import React from "react"; // react
import { AiOutlineMenu } from "react-icons/ai"; // React-icons.

function Header() {
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
        <input type="text" placeholder="검색하실 TODO명을 적어주세요" />
        {/* 여기에 검색기능 추가. */}
      </div>
    </div>
  );
}

export default Header;
