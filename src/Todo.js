import React, { useState } from "react";
import "./styles.css";

function Todo({ todo, toggleHandler, handleFilter }) {
  // console.log(props.data);
  let { id, task, complete } = todo;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
    toggleHandler(e.currentTarget.id);
  };

  //Ask vikas why id needed here
  return (
    <li
      id={id}
      key={id + task}
      value={id}
      onClick={handleClick}
      className={complete ? "StrikeThrough" : "todo"}
    >
      {task}
    </li>
  );
}

export default Todo;
