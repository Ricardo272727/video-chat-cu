import React from "react";
import { Route } from "react-router-dom";
import Login from './pages/Login';

const RoutesPrivates = () => {
  return (
    <>
      <Route path="/" component={Login} />          
    </>
  );
};

export default RoutesPrivates;
