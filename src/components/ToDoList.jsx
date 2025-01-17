import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilteredList from "./FilteredList";
import "./ToDoList.css";

export default function ToDoList() {
  const list = useSelector((state) => state.todos);
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
    return filteredList;
  };
  const activeClickIndex = () => {
    let i = 0;
    for (; i < list.length - 1; i++) {
      if (list[i].length !== 0) return i;
    }
    return i;
  };
  const FinalListFilter = ListFilter(filterMode);
  const ActiveIndex = activeClickIndex();

  return (
    <div className="todo-list">
      <div className="btn-group">
        <button
          className="switch-btn"
          onClick={() => setFilterMode("")}
          status={filterMode === "" ? "on" : "off"}
        >
          All
        </button>
        <button
          className="switch-btn"
          onClick={() => setFilterMode("personal")}
          status={filterMode === "personal" ? "on" : "off"}
        >
          Personal
        </button>
        <button
          className="switch-btn"
          onClick={() => setFilterMode("work")}
          status={filterMode === "work" ? "on" : "off"}
        >
          Work
        </button>
      </div>
      <FilteredList data={FinalListFilter} activeClickIndex={ActiveIndex} />
    </div>
  );
}
