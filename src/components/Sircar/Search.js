import React, { useState } from "react";

const Search = ({ clearr, alertt, getCha }) => {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") alertt("Please Enter Something...", "light");
    else {
      getCha(text);
      setText("");
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search Characters.."
        />
        <input type="submit" />
      </form>
      <button
        onClick={clearr}
        className="btn btn-dark"
        style={{ width: "100%" }}
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
