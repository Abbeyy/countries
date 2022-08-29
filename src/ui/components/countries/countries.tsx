import { useAppSelector } from "../../../hooks";
import { searchCountries } from "../../../redux/selectors/country";
import { CountriesSearch } from "./search/countriesSearch";
import styles from "./countries.module.css";

export const Countries = () => {
  const countries = useAppSelector(searchCountries);

  return (
    <div className={styles["Countries"]}>
      <CountriesSearch />
      <div>
        {countries?.map((country) => (
          <p>{`${country.name?.official}`}</p>
        ))}
      </div>
    </div>
  );
};
