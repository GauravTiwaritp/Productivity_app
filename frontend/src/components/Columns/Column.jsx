import { Draggable, Droppable } from "react-beautiful-dnd";
import ToDoCard from "../ToDoCard/ToDoCard";
import PropTypes from "prop-types";
import { FcPlus } from "react-icons/fc";

//index.toString()}
const Column = (props) => {
  const { id, column, index } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={index.toString()} type="card">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`pb-2 p-2 roundex-2xl shadow-sm ${
                      snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                    }`}
                  >
                    <h2 className="flex justify-between font-bold text-xl p-2">
                      {id}
                      <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-2 text-sm font-normal">
                        {column.length}
                      </span>
                    </h2>
                    <div className="space-y-2">
                      {column.map((todo, index) => {
                        return (
                          <Draggable
                            draggableId={todo["_id"]}
                            key={todo["_id"]}
                            index={index}
                          >
                            {(provided) => {
                              return (
                                <ToDoCard
                                  todo={todo}
                                  index={index}
                                  id={id}
                                  draggableProps={provided.draggableProps}
                                  dragHandleProps={provided.dragHandleProps}
                                  innerRef={provided.innerRef}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}

                      {provided.placeholder}
                      <div>
                        <button>
                          <FcPlus className="h-10 w-10" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};
Column.propTypes = {
  id: PropTypes.string.isRequired,
  column: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};
export default Column;
