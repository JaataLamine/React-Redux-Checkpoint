import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToTodos } from "../store/slice";
import { BsPlusCircle } from "react-icons/bs";

const AddTask = () => {
  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();
  // A variable used by the input field to store the text.
  const [description, setDescription] = useState("");

  // A function to handle the add button.
  const handleAdd = () => {
    if (description === "") {
      return;
    }
    dispatch(
      addToTodos({
        id: Math.floor(Math.random() * 1000),
        description,
        isDone: false,
      })
    );
    setDescription("");
  };

  return (
    <div className="add">
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
      />
      <button onClick={handleAdd}>
        <BsPlusCircle />
        <span>Add</span>
      </button>
    </div>
  );
};

export default AddTask;
