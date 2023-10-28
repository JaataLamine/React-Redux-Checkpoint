import { useDispatch } from "react-redux";
import filterTasksIsDone from "../store/slice";
import filterTasksNotDone from "../store/slice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterIsDone = () => {
    dispatch(filterTasksIsDone);
  };

  const handleFilterNotDone = () => {
    dispatch(filterTasksNotDone);
  };

  return (
    <div className="filters">
      Filter tasks
      <input type="checkbox" onClick={handleFilterIsDone} />
      Done
      <input type="checkbox" onClick={handleFilterNotDone} />
      Not Done
    </div>
  );
};

export default Filter;
