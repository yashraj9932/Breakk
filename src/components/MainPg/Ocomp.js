import React, { useState } from "react";
import Comps from "./Comps";

const Ocomp = () => {
  const [comps, setComps] = useState([
    {
      name: "Death",
      line: "Click here to know about a random death!"
    },
    {
      name: "Character",
      line: "Click here to know about a particular charcter!"
    },
    {
      name: "Quote",
      line: "Click here to know about a random quote!"
    }
  ]);
  return (
    <div>
      {comps.map(comp => {
        return <Comps comp={comp} />;
      })}
    </div>
  );
};

export default Ocomp;
