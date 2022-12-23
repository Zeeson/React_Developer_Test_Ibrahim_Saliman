import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
product: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const GetProduct = createAsyncThunk(
  "product/id",
  async (id, thunkAPI) => {
    try {
      return await productServices.GetProduct(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      })
     
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
