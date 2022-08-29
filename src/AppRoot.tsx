import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styles from "./AppRoot.module.css";

const AppRoot = () => {
  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <NavigationMenu />

        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
