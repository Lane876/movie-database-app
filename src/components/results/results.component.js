import React from "react";
import Result from "../result/result.component";
import "./results.style.scss";

const Results = ({ results, openPopup }) => {
  return (
    <section className="results">
      {!results ? (
        <p className="alert-text">You must've made a typo. Try again!</p>
      ) : (
        results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      )}
    </section>
  );
};

export default Results;
