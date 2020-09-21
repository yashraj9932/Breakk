import React from "react";
import Spinner from "../components/Spinner";

const Character = ({ charr, loading }) => {
  const { name, img, nickname, occupation } = charr;
  if (loading) return <Spinner />;
  else {
    return (
      <div>
        <div className=" text-center my-3">
          <img
            src={img}
            alt=""
            className="round-img"
            style={{ width: "250px" }}
          />
          <h1>{name}</h1>
          {occupation && (
            <p>
              <strong>Occupation: </strong>
              {occupation}
            </p>
          )}
          {nickname && (
            <p>
              <strong>Nickname: </strong>
              {nickname}
            </p>
          )}
        </div>
      </div>
    );
  }
};

export default Character;
