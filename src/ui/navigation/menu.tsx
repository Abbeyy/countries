import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import LogIn from "../authentication/LogIn";
import LogOut from "../authentication/LogOut";
import styles from "./NavigationMenu.module.css";

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <div className={styles["Sidebar"]}>
      {isLoggedIn ? <LogOut /> : <LogIn />}
      <h1 className={styles["Title"]}>My Player</h1>
      <div className={styles["Menu"]}>
        <Link className={styles["Option"]} to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
