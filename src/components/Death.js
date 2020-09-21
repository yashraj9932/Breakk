import React, { useEffect } from "react";

const Death = ({ sdeath, deathh }) => {
  useEffect(() => {
    sdeath();
    //eslint-disable-next-line
  }, []);
  const { death, cause, responsible, last_words, img } = deathh;
  return (
    <div className="grid-2" style={{ width: "60%", margin: "0 auto" }}>
      <div>
        <div className="all-center">
          <h2 className="my-1">
            <b>{death}</b>
          </h2>
          <img src={img} alt="" style={{ height: "300px" }} />
        </div>
      </div>
      <div style={{ borderLeft: "1px dotted black", paddingLeft: "20px" }}>
        <div>
          <h3 className="my-2">Last words:</h3>
          <p className="my-2">"{last_words}"</p>
        </div>
        <div>
          <h3 className="my-2">Cause of Death:</h3>
          <p className="my-1">{cause}</p>
        </div>
        <div>
          <h3 className="my-2">Responsible:</h3>
          <p className="my-2">{responsible}</p>
        </div>
      </div>
    </div>
  );
};

export default Death;
