import React from "react";
import "./popup.style.scss";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt={selected.Title} />
          <p>{selected.Plot}</p>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popup;
