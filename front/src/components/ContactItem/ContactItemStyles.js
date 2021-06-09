import { makeStyles } from "@material-ui/styles";
import theme from "../../theme";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0.3rem",
    background: theme.background,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "0.3rem",
  },
  photo: {
    width: "20%",
  },
  name: {
    width: "80%",
  },
  button: {
    width: "10%",
    color: "white",
  },
  spanName: {
    display: 'inline-block',
    fontSize: "12px",
    textAlign: "left",
    color: "white",
    width: '9rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
});
