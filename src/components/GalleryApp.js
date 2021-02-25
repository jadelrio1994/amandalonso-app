import React from "react";

export const GalleryApp = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="gallery__container">
      <div className="gallery__header">
        <h1>Gallery title</h1>
      </div>
      <div className="gallery__cards">
        {arr.map((i) => (
          <div key={i} className="gallery__card">
            <img src="../img/fuego.jpg" alt="fuego" />
          </div>
        ))}
      </div>
    </div>
  );
};
