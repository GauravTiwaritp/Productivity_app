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
  taskInput: "",
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

export const deleteTask = createAsyncThunk(
  "board/deleteTask",
  async (todo, thunkApi) => {
    const deleteTask = todo;
    try {
      const resp = await customFetch.delete("/Todo/deleteTask", {
        data: deleteTask,
      });

      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "board/createTask",
  async (task, thunkApi) => {
    const createTask = task;
    try {
      const resp = await customFetch.post("/Todo/createTask", {
        data: createTask,
      });

      console.log(resp.data);
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

      if (!destination) return state; // Return the current state if there's no destination

      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return state;

      if (type === "column") {
        const columns = Object.keys(state.taskByStatus);
        const [movedColumn] = columns.splice(source.index, 1);
        columns.splice(destination.index, 0, movedColumn);

        const newTaskByStatus = {};

        columns.forEach((column) => {
          newTaskByStatus[column] = [...state.taskByStatus[column]]; // Use spread operator for immutability
        });

        return {
          ...state,
          status: columns,
          taskByStatus: newTaskByStatus,
        };
      }

      if (type === "card") {
        var removedTask = {};
        const newTaskByStatus = {};
        console.log(source, destination);
        state.status.map((title) => {
          newTaskByStatus[title] = [...state.taskByStatus[title]];
        });

        state.status.forEach((title, index) => {
          if (index == source.droppableId) {
            [removedTask] = newTaskByStatus[title].splice(source.index, 1);
          }
        });

        state.status.forEach((title, index) => {
          if (index == destination.droppableId) {
            removedTask = { ...removedTask };
            removedTask.status = title;
            console.log(removedTask.status);
            newTaskByStatus[title].splice(destination.index, 0, removedTask);
          }
        });
        try {
          customFetch
            .patch("Todo/updateTask", removedTask)
            .then((resp) => {
              console.log(resp);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }

        return {
          ...state,
          taskByStatus: newTaskByStatus,
        };
      }

      // Handle other types of drag and drop if needed
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
      }),
      builder
        .addCase(deleteTask.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
          state.loading = false;
          const id = action.payload.message["_id"];
          state.taskByStatus[action.payload.message["status"]] =
            state.taskByStatus[action.payload.message["status"]].filter(
              (task) => {
                //console.log(task["_id"]);
                return task["_id"] !== id;
              }
            );
        })
        .addCase(deleteTask.rejected, (state) => {
          state.loading = false;
          state.error = "Something is wrong please try it after sometime";
        });
  },
});

export const { setTaskByStatus } = boardSlice.actions;

export default boardSlice.reducer;
