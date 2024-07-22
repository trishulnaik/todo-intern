import React from "react";
import { todoDelete, todoToggled } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import './FilteredList.css';

export default function FilteredList({ data, activeClickIndex }) {
  const dispatch = useDispatch();
  return (
    <div className="filtered-list">
      {data &&
        data.map((item) => (
          <div key={item.id} className="list-field">
            <span>
              {(!item.completed && item.priority === activeClickIndex) ? (<input type="checkbox" name="checkStatus" id="checkStatus" onClick={()=>dispatch(todoToggled({id: item.id, priority: item.priority}))}/>) : 
              (<div className="unfunctional-btn" status={item.completed? 'done': 'undone'}>X</div>)
              }
            </span>
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
