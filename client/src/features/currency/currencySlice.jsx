import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CurrencyServices from "./currencyServices";

const initialState = {
  currencies: [],
  currency: "USD",
  activeItem: 0,
  currencyOpen: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const GetCurrency = createAsyncThunk(
  "currency/all",
  async (_, thunkAPI) => {
    try {
      return await CurrencyServices.GetCurrency();
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

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },

    updateCurrency: (state, action) => {
      state.currency = action.payload;
      state.activeItem = action.payload.activeItem;
    },
    showCurrencyList: (state, action) => {
      state.currencyOpen = !state.currencyOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currencies = action.payload;
      })
      .addCase(GetCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currencies = null;
      });
  },
});

export const { reset, updateCurrency, showCurrencyList } =
  currencySlice.actions;
export default currencySlice.reducer;
