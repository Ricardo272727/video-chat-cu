import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    background: theme.background,
  },
});

const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div
        style={{
          paddingTop: "1vh",
          paddingBottom: "1vh",
          paddingLeft: "1vw",
          paddingRight: "1vw",
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        {children}
      </div>
    </Box>
  );
};

export default Page;
