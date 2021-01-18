import React from "react";
import "./RangeSelector.css";

const RangeSelector = ({ rangeValue, setRangeValue }) => {
  const handleChange = (e) => setRangeValue(e.target.value);
  return (
    <>
      <input type="range" value={rangeValue} onChange={handleChange} />
    </>
  );
};

export default RangeSelector;
