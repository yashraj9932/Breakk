import React, { useEffect } from "react";

const Quote = ({ squote, getImg, quotee, image }) => {
  useEffect(() => {
    squote();
    getImg(quotee.author);
    //eslint-disable-next-line
  }, []);
  const { quote, author } = quotee;
  return (
    <div className="card grid-2">
      <div className="all-center">
        <h3>{quote}</h3>
        <p style={{ display: "block" }}>-{author}</p>
      </div>
      <div>
        {/* {img &&} */}
        <img src={image} alt="" />
      </div>
    </div>
  );
  // }
};

export default Quote;
