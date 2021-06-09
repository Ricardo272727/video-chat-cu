import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/styles";
import ContactItem from "../ContactItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%'
  },
});

const ContactList = ({ contacts = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {_.map(contacts, (contact, index) => (
        <ContactItem contact={contact} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
