import logo from "./logo.svg";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import MainTodo from "./components/MainTodo";
import Store from "./components/Store";

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
      <Store></Store>
    </AppStyled>
  );
}

export default App;
