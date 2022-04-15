import React from "react";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search" name="filter" />
      <button className="btn btn-success" type="submit" >찾기</button>
      </div>
    </form>
  );
}



export default Search;
