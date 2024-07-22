import React from "react";
import { todoDelete } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function FilteredList({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <input type="checkbox" name="checkStatus" id="checkStatus" />
            <span>{item.text}</span>
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
