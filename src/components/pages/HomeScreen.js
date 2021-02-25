import React from "react";
import { RecentApp } from "../RecentApp";

export const HomeScreen = () => {
  return (
    <div className="home__container">
      <div className="home__img">
        <img src="../img/fondo1.jpg" alt="" />
      </div>

      <RecentApp />
    </div>
  );
};
