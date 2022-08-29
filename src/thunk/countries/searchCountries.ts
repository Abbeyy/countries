import { querySearch } from "../../api/search";
import {
  setCountriesSearch,
  setCountriesSearchError,
  setCountriesSearchLoading,
} from "../../redux/reducers/countriesSlice";
import { AppThunk } from "../../types/redux/store";

export const searchCountries =
  (searchValue: string): AppThunk =>
  async (dispatch) => {
    dispatch(setCountriesSearchLoading(true));

    try {
      const countries = await querySearch(searchValue);

      dispatch(setCountriesSearch(countries));
    } catch (e: any) {
      console.warn("Search Countries Thunk Failed: ", e);
      dispatch(setCountriesSearchError(e));
    } finally {
      dispatch(setCountriesSearchLoading(false));
    }
  };
