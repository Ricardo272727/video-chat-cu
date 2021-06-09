import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./ContactItemStyles";
import { Contact } from "../../models/Contact";
import PhoneIcon from "@material-ui/icons/Phone";

const ContactItem = ({
  contact = new Contact(),
  onCall = () => console.log("Calling"),
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={contact.photo} className={classes.photo} alt={contact.name} />
      <div className={classes.name}>
        <span className={classes.spanName}>{contact.name}</span>
      </div>
      <Button className={classes.button} onClick={onCall}>
        <PhoneIcon />
      </Button>
    </div>
  );
};

export default ContactItem;
