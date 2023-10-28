import { createSlice } from "@reduxjs/toolkit";

// todo - isDone(true, false), description, id
const initialState = {
  todos: [
    { id: 1, description: "Create a react app", isDone: false },
    { id: 2, description: "Create a redux app", isDone: false },
    { id: 3, description: "Create a redux toolkit app", isDone: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    editTodos: (state, action) => {
      const { id, description } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.description = description;
      }
    },
    removeFromTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodoStatus: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo.isDone === false) {
        existingTodo.isDone = true;
      } else {
        existingTodo.isDone = false;
      }
    },
    filterTasksIsDone: (state, action) => {
      const isDone = action.payload;
      const filterIsDone = state.tasks.filter((task) => task.isDone === isDone);
      state.tasks.push(filterIsDone);
    },
    filterTasksNotDone: (state, action) => {
      const isDone = action.payload;
      const filterNotDone = state.tasks.filter(
        (task) => task.isDone === !isDone
      );
      state.tasks.push(filterNotDone);
    },
  },
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
