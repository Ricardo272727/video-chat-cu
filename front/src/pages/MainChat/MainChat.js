import React, { useState, useEffect } from "react";
import Page from "../Page";
import useStyles from "./MainChatStyles";
import ContactList from '../../components/ContactList';
import { getContacts } from '../../api';

const MainChat = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {    
    getContacts(1).then(result => {
      console.log({ result });
      setContacts(result.items);
    });
  }, []);

  return (
    <Page>
      <header className={classes.header}>
        <section className={classes.headerContent}>
          <div className={classes.center}>
            <span className={classes.title}>Video chat cu</span>
          </div>
        </section>
        <section className={classes.mainContent}>
          <ContactList contacts={contacts}/>
        </section>
      </header>
      <main className={classes.main}>
        <section className={classes.headerContent}></section>
        <section className={classes.mainContent}></section>
      </main>
    </Page>
  );
};

export default MainChat;
