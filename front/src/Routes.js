import RoutesPrivates from "./RoutesPrivates";
import RoutesPublics from "./RoutesPublics";
import useLocalStorage from "./hooks/useLocalStorage";

const Routes = () => {
  const ls = useLocalStorage();
  const checkLogin = () => {
    const token = ls.getItem("token");
    return token !== null || true;
  };
  return checkLogin() ? <RoutesPrivates /> : <RoutesPublics />;
};

export default Routes;
