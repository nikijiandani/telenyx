import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Chatbar from "./components/Chatbar";
import useFetch from "./useFetch";

function App() {
  let chat = useFetch();
  console.log(chat);

  return (
    <div className="App">
      <Navbar />
      <Chatbar data={chat} />
    </div>
  );
}

export default App;
