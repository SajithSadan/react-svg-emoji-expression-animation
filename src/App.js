import React, { useState } from "react";
import FaceSvg from "./components/FaceSvg";
import RangeSelector from "./components/RangeSelector";
import "./App.css";

const App = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const rangeToString = (value) => {
    if (value < 40) {
      return "bad";
    } else if (value >= 40 && value <= 60) {
      return "ok";
    } else {
      return "good";
    }
  };
  let feeling = rangeToString(rangeValue);
  return (
    <div className={`wrapper ${feeling}`}>
      <div className="txt-wrapper">
        <h1>How was your ride?</h1>
        <h2 className="first-letter-cap">{feeling}</h2>
      </div>
      <div className="img-wrapper">
        <FaceSvg feeling={feeling} range={rangeValue} />
      </div>
      <div className="range-wrapper">
        <RangeSelector rangeValue={rangeValue} setRangeValue={setRangeValue} />
      </div>
    </div>
  );
};

export default App;
