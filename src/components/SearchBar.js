import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="header">
      <h1>Image Search Service</h1>
      <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Enter Search Term" value={term} onChange={handleChange} />
      </form>
      </div>
    </div>
  );
}

export default SearchBar;