// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { dataService, dataExport } from "./DataService";

// const initialState = {
//   busData: dataExport ? busData : null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const dataAdd = createAsyncThunk(
//   "data/dataAdd",
//   async (dataExport, thunkAPI) => {
//     try {
//       return await dataService.busSend(dataExport);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isError = false;
//       state.isSuccess = false;
//       state.isLoading = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(dataAdd.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(dataAdd.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.dataExport = action.payload;
//       })
//       .addCase(dataAdd.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.dataExport = null;
//       });
//   },
// });
// export const { reset } = dataSlice.actions;
// export default dataSlice.reducer;
