import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilteredList from "./FilteredList";

export default function ToDoList() {
  const list = useSelector((state) => state.todos);
  //     console.log("list",list);
  const [filterListState, setFilterListState] = useState([]);
  const [filterMode, setFilterMode] = useState("");
  const ListFilter = (type) => {
    let filteredList = [];
    list.map((innerItem) => {
      innerItem.map((item) => {
        if (type) {
          if (item.category === type) {
            filteredList = [...filteredList, { ...item }];
          }
        } else {
          filteredList = [...filteredList, { ...item }];
        }
      });
    });
    setFilterListState([...filteredList]);
  };
  useEffect(() => {
    ListFilter(filterMode);
  }, [list, filterMode]);
  return (
    <div className="todo-list">
      <button onClick={() => setFilterMode("")}>All</button>
      <button onClick={() => setFilterMode("personal")}>Personal</button>
      <button onClick={() => setFilterMode("work")}>Work</button>
      <FilteredList data={filterListState} />
    </div>
  );
}
