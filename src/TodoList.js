import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList({ todolist, toggleHandler, handleFilter, addTask }) {
  return (
    <>
      <ul>
        {todolist.map((todo) => {
          return (
            <Todo
              todo={todo}
              toggleHandler={toggleHandler}
              handleFilter={handleFilter}
            />
          );
        })}
      </ul>
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Delete completed Task
      </button>
    </>
  );
}

export default TodoList;
