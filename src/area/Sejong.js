import React from "react";

function Sejong({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <path
      id="세종"
      d="m 309.28023,486.01769 -7.03,-4.811 -3.025,-4.724 -1.554,-6.834 0.817,-7.381 0.736,-8.568 -5.314,-2.874 -6.213,-8.321 1.799,-5.547 -0.817,-7.454 -3.434,-3.467 2.289,-4.507 6.049,-0.347 11.608,7.281 5.722,-0.173 0.654,2.947 h 2.126 l -0.654,5.374 -3.597,2.6 1.635,4.161 2.616,3.294 v 5.547 l 4.414,1.907 5.632,2.508 2.271,2.85 -1.199,7.167 1.199,2.773 -2.734,1.624 0.676,5.695 -2.247,5.813 -4.905,5.374 -5.068,0.173 -2.452,-2.08 z"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Sejong;
