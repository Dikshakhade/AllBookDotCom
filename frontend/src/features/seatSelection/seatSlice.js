import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isChecked: false,
};

const seatSelection = createSlice({
  name: "seatSelection",
  initialState,
  reducers: {
    // resetSeat:
    seatSelectionReducer: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export default seatSelection.reducer;
export const { seatSelectionReducer } = seatSelection.actions;
