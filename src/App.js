import logo from "./logo.svg";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import MainTodo from "./components/MainTodo";
import Store from "./components/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestParam from "./components/TestParam";

const AppStyled = styled.div`
  padding: 0;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  background: #f3f2f1;
`;

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="/Important" element={<Store />}></Route>
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
