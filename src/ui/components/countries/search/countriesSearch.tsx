import { Search } from "../../search/search";
import styles from "./countriesSearch.module.css";

export const CountriesSearch = () => {
  return (
    <div className={styles["CountriesSearch"]}>
      <Search item="country" />
    </div>
  );
};
