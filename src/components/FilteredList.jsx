import React from "react";
import { todoDelete, todoToggled } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import './FilteredList.css';

export default function FilteredList({ data, activeClickIndex }) {
  const dispatch = useDispatch();
  const priorityMap = ["highest","high","medium","low","least"];
  return (
    <div className="filtered-list">
      <div className="filtered-list-heading">
        <span>Done</span>
        <span>Priority</span>
        <span>Task</span>
        <span>Delete</span>
      </div>
      
      {data &&
        data.map((item) => (
          <div key={item.id} className="list-field">
            <span>
              {(!item.completed && item.priority === activeClickIndex) ? (<input type="checkbox" name="checkStatus" id="checkStatus" onClick={()=>dispatch(todoToggled({id: item.id, priority: item.priority}))}/>) : 
              (<div className="unfunctional-btn" status={item.completed? 'done': 'undone'}>X</div>)
              }
            </span>
            <span>{priorityMap[item.priority]}</span>
            <span style={item.completed? {textDecoration: "line-through"}:{}}>{item.text}</span>
            <button
              onClick={() =>
                dispatch(todoDelete({ id: item.id, priority: item.priority }))
              }
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
