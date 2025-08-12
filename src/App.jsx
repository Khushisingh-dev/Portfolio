import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css"
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Outlet />

      <Header />
    </div>
  );
};

export default App;


