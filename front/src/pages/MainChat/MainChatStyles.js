import { makeStyles } from "@material-ui/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  header: {
    width: "19vw",
    height: "98vh",
    background: theme.backgroundDark,
  },
  main: {
    width: "79vw",
    height: "98vh",
    background: theme.backgroundDark,
  },
  headerContent: {
    padding: "0.5rem",
    textAlign: "center",
    height: "5%",
  },
  mainContent: {
    padding: "0.5rem",
    textAlign: "center",
    height: "91%",
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }, 

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Odibee Sans, cursive',
    fontSize: '2rem'
  }
});

export default useStyles;
