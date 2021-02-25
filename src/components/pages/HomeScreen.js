import React from "react";
import { GalleryApp } from "../GalleryApp";

export const HomeScreen = () => {
  return (
    <div className="home__container">
      <div className="home__img">
        <img src="../img/fondo1.jpg" alt="" />
      </div>

      <GalleryApp />
    </div>
  );
};
