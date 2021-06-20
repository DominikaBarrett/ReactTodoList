import React from "react";
import React, { useState } from "react";
import './App.css';
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] =useState("";)
  return (
    <div className="App">
        <header>
            <h1>Hello my Todo List </h1>
            
        </header>

        <Form setInputText ={}/>
        <TodoList/>
        
    </div>
  );
}

export default App;

