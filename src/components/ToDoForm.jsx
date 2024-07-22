import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../features/todos/todosSlice";

const defaultState = {
  id: null,
  text: "",
  priority: 0,
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
    settaskTitle((prev) => ({
      ...prev,
      id: Date.now(),
    }));
  };
  useEffect(() => {
    if (taskTitle.id) {
      dispatch(todoAdd(taskTitle));
      settaskTitle({ ...defaultState });
    }
  }, [taskTitle.id]);
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
      <br />
      <label htmlFor="priority">Priority: </label>
      <select
        name="priority"
        id="priority"
        onChange={priorityHandler}
        value={taskTitle.priority}
      >
        <option value="0">Highest</option>
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
        <option value="4">Least</option>
      </select>
      <br />
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
