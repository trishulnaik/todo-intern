import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [[], [], [], [], []],
  reducers: {
    todoAdd(state, action) {
      state[action.payload.priority].push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
        category: action.payload.category,
        priority: action.payload.priority,
      });
    },
    todoDelete(state, action) {
      state[action.payload.priority] = state[action.payload.priority].filter(
        (item) => item.id !== action.payload.id
      );
    },
    todoToggled() {},
    todoPatch() {},
  },
});

export const { todoAdd, todoToggled, todoDelete, todoPatch } =
  todoSlice.actions;

export default todoSlice.reducer;
