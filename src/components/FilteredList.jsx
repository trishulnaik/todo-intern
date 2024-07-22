import React from "react";
import { todoDelete, todoToggled } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function FilteredList({ data, activeClickIndex }) {
  const dispatch = useDispatch();
  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {(!item.completed && item.priority === activeClickIndex) && <input type="checkbox" name="checkStatus" id="checkStatus" onClick={()=>dispatch(todoToggled({id: item.id, priority: item.priority}))}/>}
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
    </>
  );
}
