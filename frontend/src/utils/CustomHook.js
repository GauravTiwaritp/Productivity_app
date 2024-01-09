import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodoGroupByColumn } from "../../features/Board/boardSlice";
const useData = () => {
  const dispatch = useDispatch();
  dispatch(getTodoGroupByColumn());
  useSelector((store) => {
    return store.board;
  });
};

export default useData;
