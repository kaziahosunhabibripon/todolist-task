import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");

  try {
    if (localTodoList) {
      return JSON.parse(localTodoList);
    }
  } catch (error) {
    console.error("Error parsing todoList from localStorage:", error);
  }

  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
  filterStatus: "all",
  filterPriority: "low",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      window.localStorage.setItem(
        "todoList",
        JSON.stringify([...state.todoList, action.payload])
      );
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload
      );
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    updateFilterPriority: (state, action) => {
      state.filterPriority = action.payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  updateFilterStatus,
  updateFilterPriority,
} = todoSlice.actions;
export default todoSlice.reducer;
