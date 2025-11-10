import { createSlice } from "@reduxjs/toolkit";

export interface IBookForm {
  name: string;
  email: string;
  time: string;
  date: string;
}

const initialState: IBookForm = {
  date: "",
  email: "",
  name: "",
  time: "",
};

export const formSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createForm: (state, action) => {
      return action.payload;
    },
  },
});

export const { createForm } = formSlice.actions;

export default formSlice.reducer;
