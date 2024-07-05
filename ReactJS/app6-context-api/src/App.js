import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import ClickCounter from "./HOC_Comp/ClickCounter";
import HoverCounter from "./HOC_Comp/HoverCounter";
// import HoverCounter from "./HOC_Comp/HoverCounter";

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <ClickCounter />
      <hr />
      <HoverCounter />
    </div>
  );
}

export default App;
