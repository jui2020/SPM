import React from "react";
import CompoC from "../components/CompoC";
// import CompoB from "../components/CompoB";
import Todo from "../components/Todo";
import "../components/Todo.css";
import ContactUs from "./ContactUs";
// import TodoList from "../todoUseRed/TodoList";
// import TodoForm from "../todoUseRed/TodoForm";
// import { TodoProvider } from "../todoUseRed/TodoContext";
// import { TodoSummary } from "../todoUseRed/TodoSummary";

const AboutUs = (props) => {


  return (
    <>
      {props.data && <CompoC />}

      {/* <CompoB /> */} 
       <Todo />
      {/* <TodoProvider>
        <TodoForm />
        <TodoList />
        <TodoSummary />
      </TodoProvider> */}

      <ContactUs />
    </>
  );
};

export default AboutUs;
