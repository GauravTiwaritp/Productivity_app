import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FirstNameError: "true",
  LastNameError: "true",
  EmailError: "true",
  PasswordError: "true",
  ConfirmPasswordError: "true",
  field: "",
};

const FunctionSlice = createSlice({
  name: "function",
  initialState,
  reducers: {
    RegexHandling: (state, action) => {
      const { name, value } = action.payload;

      switch (name) {
        case "Firstname":
          var regexFirstname = /^[a-zA-Z]{4,30}$/;
          if (value.length == 0) {
            state.FirstNameError = true;
          } else {
            state.FirstNameError = regexFirstname.test(value);
            state.field = name;
          }
          break;
        case "Lastname":
          var regexLastname = /^[a-zA-Z]{4,30}$/;
          if (value.length == 0) {
            state.LastNameError = true;
          } else {
            state.LastNameError = regexLastname.test(value);
            state.field = name;
          }

          break;
        case "Email":
          var regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (value.length == 0) {
            state.EmailError = true;
          } else {
            console.log(regexemail.test(value));
            state.EmailError = regexemail.test(value);
            state.field = name;
          }

          break;
        case "username":
          var regexusername = /^[a-zA-Z]{6,30}$/;
          if (value.length == 0) {
            state.EmailError = true;
          } else {
            state.EmailError = regexemail.test(value);
            state.field = name;
          }
          state.PasswordError = !regexusername.test(value);
          state.field = name;
          break;
        case "Password":
          var regexpassword = /^[a-zA-Z0-9,-]{8,30}$/;
          if (value.length == 0) {
            state.PasswordError = true;
          } else {
            state.PasswordError = regexpassword.test(value);
            state.field = name;
          }
          break;
      }
    },
  },
});

export const { RegexHandling } = FunctionSlice.actions;

export default FunctionSlice.reducer;
