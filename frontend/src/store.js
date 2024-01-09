import { configureStore } from "@reduxjs/toolkit";
import boradSlice from "./features/Board/boardSlice";
const store = configureStore({
  reducer: {
    board: boradSlice,
  },
});

export default store;
