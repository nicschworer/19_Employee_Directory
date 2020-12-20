import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Name"
          type="text"
          className="form-control"
          placeholder="Search by Employee Name"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
