import { RootState } from "../../types/redux/store";

export const searchCountries = ({ countries }: RootState) =>
  countries.search?.countries;

export const searchCountriesError = ({ countries }: RootState) =>
  countries.search?.error;

export const searchCountriesLoading = ({ countries }: RootState) =>
  countries.search?.isLoading;
