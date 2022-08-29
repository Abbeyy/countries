import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

enum OPTION {
  HOME = "Home",
  COUNTRIES = "Countries",
}

const Menu = () => {
  const [selected, setSelected] = useState<OPTION>(OPTION.HOME);

  const handleClick = (selected: OPTION) => setSelected(selected);

  const selectedStyle = {
    borderLeft: "0.2rem solid white",
  };

  return (
    <div className={styles["Sidebar"]}>
      <h1 className={styles["Title"]}>Menu</h1>
      <div className={styles["Menu"]}>
        <Link
          style={selected === OPTION.HOME ? selectedStyle : {}}
          onClick={() => handleClick(OPTION.HOME)}
          className={styles["Option"]}
          to="/"
        >
          Home
        </Link>
        <Link
          style={selected === OPTION.COUNTRIES ? selectedStyle : {}}
          onClick={() => handleClick(OPTION.COUNTRIES)}
          className={styles["Option"]}
          to="/countries"
        >
          Countries
        </Link>
      </div>
    </div>
  );
};

export default Menu;
