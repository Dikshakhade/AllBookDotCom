import createSlice from "@reduxjs/toolkit";
const initialState = {
  isChecked: false,
};

export const seatSelection = createSlice({
  name: "seatSelection",
  initialState,
  reducers: {
    seatSelectionReducer: (state) => {
      state.isChecked = !isChecked;
    },
  },
});

export default seatSelection.reducer;
export const { toggleSeatSelect } = seatSelection.actions;
