import PropTypes from "prop-types";
import { IoIosCloseCircle } from "react-icons/io";
//import customFetch from "../../utils/axios";
import { deleteTask } from "../../features/Board/boardSlice";
import { useDispatch } from "react-redux";

const ToDoCard = (props) => {
  const { todo, innerRef, draggableProps, dragHandleProps } = props;
  //console.log(todo, index, id);
  const dispatch = useDispatch();
  const Task = async (todo) => {
    dispatch(deleteTask(todo));
  };

  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo["title"]}</p>
        <button className="text-red-500 hover:text-red-600">
          <IoIosCloseCircle
            className="ml-5 h-8 w-8"
            onClick={() => Task(todo)}
          />
        </button>
      </div>
    </div>
  );
};

ToDoCard.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  draggableProps: PropTypes.object,
  dragHandleProps: PropTypes.object,
  innerRef: PropTypes.func,
};
export default ToDoCard;
