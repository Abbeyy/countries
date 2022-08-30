import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import { CountriesState } from "../../types/redux/state/countriesState";

export const initialState: CountriesState = {
  search: {
    countries: null,
    error: null,
    isLoading: false,
  },
  all: {
    countries: null,
    error: null,
    isLoading: false,
  },
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountriesSearch: (state, action: PayloadAction<Country[] | null>) => {
      state.search.countries = action.payload;
    },
    setCountriesSearchError: (state, action: PayloadAction<string | null>) => {
      state.search.error = action.payload;
    },
    setCountriesSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.search.isLoading = action.payload;
    },
    setAllCountries: (state, action: PayloadAction<Country[] | null>) => {
      state.all.countries = action.payload;
    },
    setAllCountriesError: (state, action: PayloadAction<string | null>) => {
      state.all.error = action.payload;
    },
    setAllCountriesLoading: (state, action: PayloadAction<boolean>) => {
      state.all.isLoading = action.payload;
    },
  },
});

export const {
  setCountriesSearch,
  setCountriesSearchError,
  setCountriesSearchLoading,
  setAllCountries,
  setAllCountriesError,
  setAllCountriesLoading,
} = countriesSlice.actions;

export default countriesSlice.reducer;
