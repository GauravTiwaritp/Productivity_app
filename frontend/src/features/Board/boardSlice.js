import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  status: ["pending", "inProgress", "completed"],
  column: {},
  taskByStatus: {
    pending: [],
    inProgress: [],
    completed: [],
  },
  loading: true,
  error: "",
};

export const getTodoGroupByColumn = createAsyncThunk(
  "board/getBoardByColumn",
  async (_, thunkApi) => {
    try {
      const resp = await customFetch.get("/Todo/getData");
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.message);
    }
  }
);

//getTodoGroupByColumn
export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setTaskByStatus: (state, action) => {
      const { destination, source, type } = action.payload;
      if (!destination) return;
      if (type === "column") {
        return(
        const columns = Object.keys(state.taskByStatus);
        const [movedColumn] = columns.splice(source.index, 1);
        columns.splice(destination.index, 0, movedColumn);
        console.log(columns);
        const newTaskByStatus = {};
        columns.forEach((column) => {
          const columnData = JSON.parse(
            JSON.stringify(state.taskByStatus[column])
          );
          newTaskByStatus[column] = columnData;
        });
        console.log(newTaskByStatus);
        // Update the state
        state.status = columns;
        state.taskByStatus = newTaskByStatus
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoGroupByColumn.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodoGroupByColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.column = action.payload.data;
        state.column.forEach((task) => {
          const status = task.status;
          state.taskByStatus[status] = state.taskByStatus[status] || [];
          state.taskByStatus[status].push(task);
        });
      })
      .addCase(getTodoGroupByColumn.rejected, (state) => {
        state.loading = false;
        state.error = "Something is wrong please try it after sometime";
      });
  },
});

export const { setTaskByStatus } = boardSlice.actions;

export default boardSlice.reducer;
