import React from "react";
import { useParams } from "react-router-dom";

function TestParam() {
  const { testParam } = useParams();

  console.log(testParam);

  return (
    <>
      <h1>ㅇㅇ</h1>
    </>
  );
}

export default TestParam;
