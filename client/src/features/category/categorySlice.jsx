import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryServices from "./categoryServices";

const initialState = {
  categories: [],
  category: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const GetCategories = createAsyncThunk(
  "categories/all",
  async (categories, thunkAPI) => {
    try {
      return await categoryServices.GetCategories(categories);
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

export const GetCategory = createAsyncThunk(
  "categories/single",
  async (category, thunkAPI) => {
    try {
      return await categoryServices.GetCategory(category);
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

export const categorySlice = createSlice({
  name: "categories",
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
      .addCase(GetCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(GetCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.categories = null;
      })
      .addCase(GetCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.category = action.payload;
      })
      .addCase(GetCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.category = null;
      })
  },
});

export const { reset,  } = categorySlice.actions;
export default categorySlice.reducer;
