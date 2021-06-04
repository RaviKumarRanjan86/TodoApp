import React, { useState } from "react";
import data from "./data";

function TodoForm({ addTask }) {
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setinput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (input !== "") {
      e.preventDefault();
      addTask(input);
      setinput("");
      e.currentTarget.value = "";
    }
  };

  return (
    <form onClick={handleSubmit}>
      <input
        value={input}
        type="text"
        placeholder="Add Task..."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
