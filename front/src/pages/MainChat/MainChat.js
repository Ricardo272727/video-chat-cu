import React from "react";
import Page from "../Page";
import useStyles from './MainChatStyles';

const MainChat = () => {
  const classes = useStyles();
  return (
    <Page>
      <header className={classes.header}>
        <section className={classes.contacts}>Video chat cu</section>
        <section className={classes.chat}></section>
      </header>
      <main className={classes.main}>
        <section className={classes.contacts}></section>
        <section className={classes.chat}></section>
      </main>
    </Page>
  );
};

export default MainChat;
