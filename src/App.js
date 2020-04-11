import React, { useState } from "react";
import Search from "./components/search/search.component";
import axios from "axios";
import Results from "./components/results/results.component";
import Popup from "./components/popup/popup.component";

const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiUrl = "http://www.omdbapi.com/?apikey=50457d94";
  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        const results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (event) => {
    const s = event.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      const result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="app">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
};

export default App;
