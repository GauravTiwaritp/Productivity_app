import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
