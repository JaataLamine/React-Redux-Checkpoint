/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodos } from "../store/slice";
import Task from "./Task";
import AddTask from "./AddTask";
import Filter from "./Filter";

const ListTask = () => {
  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();
  // A hook to access the redux store's state.
  const todos = useSelector((state) => state.todos.todos);
  // A variable used by the input field to store the description.
  const [description, setDescription] = useState("");

  // A function to handle the edit button.
  const handleEdit = (id) => {
    const existingTodo = todos.find((todo) => todo.id === id);
    setDescription(existingTodo.description);
    dispatch(editTodos(id));
  };

  return (
    <div className="app">
      <div className="content">
        <div className="header">
          <span className="title">Todo List</span>
        </div>
        <AddTask />
        <div className="main">
          {todos.map((todo, index) => (
            <Task key={index} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default ListTask;
