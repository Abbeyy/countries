import { Link } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles["Sidebar"]}>
      <h1 className={styles["Title"]}>Menu</h1>
      <div className={styles["Menu"]}>
        <Link className={styles["Option"]} to="/">
          Home
        </Link>
        <Link className={styles["Option"]} to="/countries">
          Countries
        </Link>
      </div>
    </div>
  );
};

export default Menu;
