import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User";
import Nethaji_Users from "./Components/Nethaji_Users";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import Sample from "./Sample";
import Main from "./Main";

function App() {
  // const showCompm = ()=>{
  //   return <Sample/>
  // }
  return (
    <div className="App">
      <NavBar />
      {/* <User/> */}
      {/* <Nethaji_Users/> */}
      {/* <Render_Comp/> */}
      {/* {showCompm()} */}
      {/* <Main>
        <Sample/>
        <p>hjelo</p>
        <h3>Hello</h3>
      </Main> */}

      <Main/>
    </div>
  );
}

export default App;

// Created Counter Component
