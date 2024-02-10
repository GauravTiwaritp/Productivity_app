import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  loading: "",
  error: "",
};

export const loginUser = createAsyncThunk(
  "authenticate/loginUser",
  async (credentials, thunkApi) => {
    try {
      const resp = await customFetch.post("authenticate/loginUser", {
        credentials: credentials,
      });
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "authenticate/registerUser",
  async (credentials, thunkApi) => {
    try {
      const resp = await customFetch.post("authenticate/registerUser", {
        credentials: credentials,
      });
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.message);
    }
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { name, username, email } = action.payload.data;
        state.name = name;
        state.username = username;
        state.email = email;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = "Something wrong has happened up";
        state.loading = false;
      }),
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          const { name, username, email } = action.payload.data;
          state.name = name;
          state.username = username;
          state.email = email;
          state.loading = false;
        })
        .addCase(registerUser.rejected, (state) => {
          state.error = "Something wrong has happened up";
          state.loading = false;
        });
  },
});

export default authenticationSlice.reducer;
