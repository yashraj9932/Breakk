import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

const Random = ({ charac, loading, getCharac }) => {
  useEffect(() => {
    //  const x=1+Math.floor(Math.random() * 117)
    // this.props.getCharac(x);
    getCharac();
    //eslint-disable-next-line
  }, []);
  const { name, img, nickname, occupation } = charac;
  if (loading) return <Spinner />;
  else {
    return (
      <div>
        <div className="card text-center">
          <img
            src={img}
            alt=""
            className="round-img"
            style={{ width: "250px" }}
          />
          <h1>{name}</h1>
          <p>
            <strong>Occupation: </strong>
            {occupation}
          </p>
          <p>
            <strong>Nickname: </strong>
            {nickname}
          </p>
        </div>
      </div>
    );
  }
};
Random.propTypes = {
  getCharac: PropTypes.func.isRequired,
  charac: PropTypes.object.isRequired
};

export default Random;
