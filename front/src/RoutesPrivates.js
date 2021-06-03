import React from "react";
import { Route } from "react-router-dom";
import MainChat from './pages/MainChat';
import EditContact from './pages/EditContact';
import Meeting from './pages/Meeting';

const RoutesPrivates = () => {
  return (
    <>
      <Route path="/main_chat" component={MainChat} />
      <Route path="/edit_contact/:id" component={EditContact} />
      <Route path="/meeting/:id" component={Meeting} />
    </>
  );
};

export default RoutesPrivates;
