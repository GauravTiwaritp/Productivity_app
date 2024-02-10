import { configureStore } from "@reduxjs/toolkit";
import boradSlice from "./features/Board/boardSlice";
import ModalSlice from "./features/Modal/ModalSlice";
import Authentication from "./features/Authentication/Authentication";
import FunctionSlice from "./features/Function/FunctionSlice";
const store = configureStore({
  reducer: {
    board: boradSlice,
    modal: ModalSlice,
    auth: Authentication,
    func: FunctionSlice,
  },
});

export default store;
