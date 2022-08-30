import { queryAllCountries } from "../../api/allCountries";
import {
  setAllCountries,
  setAllCountriesError,
  setAllCountriesLoading,
} from "../../redux/reducers/countriesSlice";
import { AppThunk } from "../../types/redux/store";

export const getAllCountries =
  (fields?: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setAllCountriesLoading(true));

    try {
      const countries = await queryAllCountries(fields);

      dispatch(setAllCountries(countries));
    } catch (e: any) {
      console.warn("Search Countries Thunk Failed: ", e);
      dispatch(setAllCountriesError(e));
    } finally {
      dispatch(setAllCountriesLoading(false));
    }
  };
