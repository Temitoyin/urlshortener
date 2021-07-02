/* eslint-disable max-len */
import React from 'react';

const SVG = (props) => (
    <svg
        fill="#d3d3d3"
        height="35px"
        viewBox="0 0 50 50"
        width="35px"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M50 25L0 25M50 10L0 10M0 40L50 40"
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            strokeWidth="2"
        />
    </svg>
);

export default SVG;
