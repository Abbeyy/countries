import { Country } from "../../country";

export type CountriesState = {
  search: {
    countries: Country[] | null;
    isLoading: boolean;
    error: string | null;
  };
  all: {
    countries: Country[] | null;
    isLoading: boolean;
    error: string | null;
  };
};
