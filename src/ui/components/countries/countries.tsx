import { useAppSelector } from "../../../hooks";
import { searchCountries } from "../../../redux/selectors/country";
import { CountriesSearch } from "./search/countriesSearch";
import styles from "./countries.module.css";
import { useState } from "react";
import { CountriesTable } from "./table/countriesTable";
import { VIEW_TYPE } from "../../../types/country";
import { ChooseView } from "./chooseView";
import { CountriesPreview } from "./preview/countriesPreview";

export const Countries = () => {
  const countries = useAppSelector(searchCountries);

  const [view, setView] = useState<VIEW_TYPE>(VIEW_TYPE.PREVIEW);

  const isTableView = view === VIEW_TYPE.TABLE;
  const isPreviewView = view === VIEW_TYPE.PREVIEW;

  return (
    <div className={styles["Countries"]}>
      <h1 className={styles["Title"]}>Countries</h1>
      <CountriesSearch />

      {countries?.length ? (
        <ChooseView value={view} setValue={setView} />
      ) : null}

      {countries?.length && isTableView ? <CountriesTable /> : null}

      {countries?.length && isPreviewView ? (
        <CountriesPreview countries={countries} />
      ) : null}
    </div>
  );
};
