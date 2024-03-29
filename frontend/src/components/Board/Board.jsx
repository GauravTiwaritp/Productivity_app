import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodoGroupByColumn } from "../../features/Board/boardSlice";
import { setTaskByStatus } from "../../features/Board/boardSlice";
import Column from "../Columns/Column";

const Board = () => {
  const dispatch = useDispatch();

  const { taskByStatus } = useSelector((store) => {
    return store.board;
  });

  useEffect(() => {
    dispatch(getTodoGroupByColumn());
    console.log("hello");
  }, []);
  const onDragEnd = (result) => {
    dispatch(setTaskByStatus(result));
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => {
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {Object.entries(taskByStatus).map(([id, column], index) => {
                  return (
                    <Column id={id} column={column} key={id} index={index} />
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </>
    //<></>
  );
};

export default Board;
