import React from "react";
import "../css/NoList.scss";
import { useContext, useEffect } from "react";
import { HeaderContext } from "./Context/HeaderContext";
import { IoBan } from "react-icons/io5";
function NoList() {
  const [SearchText, setSearchText] = useContext(HeaderContext);

  useEffect(() => {
    setSearchText(SearchText);
  }, [SearchText]);

  return (
    <div className="NoListParent">
      <div className="InnerBox">
        <IoBan className="Icons" />
        <h2>검색된 결과가 없어요 ㅜㅜ</h2>
      </div>
    </div>
  );
}

export default NoList;
