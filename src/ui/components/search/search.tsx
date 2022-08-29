import { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { setCountriesSearch } from "../../../redux/reducers/countriesSlice";
import { searchCountries } from "../../../thunk/countries/searchCountries";
import styles from "./search.module.css";

type SearchItem = "country";

type Props = {
  item: SearchItem;
};

export const Search = (props: Props) => {
  const { item } = props;

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchValue.length) {
        switch (item) {
          case "country":
            dispatch(setCountriesSearch(null));
            break;
          default:
            break;
        }
      } else {
        switch (item) {
          case "country":
            dispatch(searchCountries(searchValue));
            break;
          default:
            break;
        }
      }
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    switch (item) {
      case "country":
        dispatch(setCountriesSearch(null));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles["Search"]}>
      <h3 className={styles["Title"]}>{`Search for a ${item}`}</h3>
      <input
        placeholder="Start typing"
        className={styles["SearchInput"]}
        type="text"
        value={searchValue}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <div onClick={clearSearch} className={styles["Clear"]}>
        clear
      </div>
    </div>
  );
};
