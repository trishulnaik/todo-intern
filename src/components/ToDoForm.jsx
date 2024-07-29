import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../features/todos/todosSlice";
import "./ToDoForm.css";

const defaultState = {
  id: null,
  text: "",
  priority: "-1",
  category: "personal",
};
export default function ToDoForm() {
  const dispatch = useDispatch();
  const [taskTitle, settaskTitle] = useState({ ...defaultState });
  const txtInputHandler = (e) => {
    settaskTitle((prev) => ({
      ...prev,
      text: e.target.value,
    }));
  };
  const priorityHandler = (e) => {
    settaskTitle((prev) => ({
      ...prev,
      priority: Number(e.target.value),
    }));
  };
  const categoryHandler = (e) => {
    settaskTitle((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const stateBeforeSubmit = {
      ...taskTitle,
      id: Date.now(),
    };
    dispatch(todoAdd(stateBeforeSubmit));
    settaskTitle({ ...defaultState });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="taskTitle">Task: </label>
      <input
        type="text"
        name="taskTitle"
        id="taskTile"
        onChange={txtInputHandler}
        value={taskTitle.text}
        required
      />
      <label htmlFor="priority">Priority: </label>
      <select
        name="priority"
        id="priority"
        onChange={priorityHandler}
        value={taskTitle.priority}
        required
      >
        <option value="">Select Priority</option>
        <option value="0">Highest</option>
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
        <option value="4">Least</option>
      </select>
      <label htmlFor="category">Category: </label>
      <select
        name="category"
        id="category"
        onChange={categoryHandler}
        value={taskTitle.category}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
