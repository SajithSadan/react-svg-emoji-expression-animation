import React from "react";

const FaceSvg = ({ range }) => {
  // calculate y position from (-10 to 10), using formula range * (max-min)+min
  // example 1 to 5 -> Math.random()*(5-1)+1
  const dy2 = (range / 100) * 20 - 10;
  // also change dx2
  // dx2 value can be 13 for bad, 12 for ok, 14 for good
  const dx2 = (range / 100) * (14 - 12) + 12;

  return (
    <>
      <svg
        width="40.746mm"
        height="29.104mm"
        version="1.1"
        viewBox="0 0 40.746 29.104"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-36.248 -154.14)" stroke="#000">
          <ellipse
            cx="68.11"
            cy="163"
            rx="7.753"
            ry="7.7215"
            fill="none"
            strokeWidth="2.2624"
          />
          <ellipse
            cx="68.016"
            cy="165.52"
            rx="3.58"
            ry="3.5655"
            fillRule="evenodd"
            strokeWidth="1.0446"
          />
          <path
            d={`m 41.732609,177.79502 c 0,0 13.692752,${dy2} 29.073649,-1.40108`}
            fill="none"
            strokeWidth="2.6473"
          />
          <ellipse
            cx="46.688"
            cy="163"
            rx="7.753"
            ry="7.7215"
            fill="none"
            strokeWidth="2.2624"
          />
          <ellipse
            cx="46.594"
            cy="165.52"
            rx="3.58"
            ry="3.5655"
            fillRule="evenodd"
            strokeWidth="1.0446"
          />
        </g>
      </svg>
    </>
  );
};

export default FaceSvg;
