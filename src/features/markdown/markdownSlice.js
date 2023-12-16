import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markdown: "",
};

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    handleMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { handleMarkdown } = markdownSlice.actions;
export default markdownSlice.reducer;
