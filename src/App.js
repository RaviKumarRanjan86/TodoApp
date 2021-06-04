import Headers from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todolist, settodolist] = useState(data);

  //Ask vikas
  const addTask = (taskItem) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let item = { id: id, task: taskItem, complete: false };
    let addedItem = [...todolist, item];

    settodolist(addedItem);
  };

  const handleFilter = () => {
    let filterdata = todolist.filter((task) => {
      return !task.complete;
    });

    settodolist(filterdata);
  };

  const toggleHandler = (id) => {
    let mapped = todolist.map((task) => {
      return task.id === Number(id)
        ? {
            ...task,
            complete: !task.complete
          }
        : { ...task };
    });
    console.log(mapped);
    console.log("toggle handler hit");

    settodolist(mapped);
  };

  //console.log(todolist);
  return (
    <div className="App">
      <Headers />
      <TodoList
        todolist={todolist}
        toggleHandler={toggleHandler}
        handleFilter={handleFilter}
        addTask={addTask}
      />
      <TodoForm addTask={addTask} />
    </div>
  );
}
