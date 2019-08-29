import React from 'react';
import * as Svg from 'react-native-svg';
const { Path } = Svg;

const SVG = ({
    defaultColors = {},
    color = 'blue',
    width = 40,
    height = 27,
}) => {
    // Use default colors if none hex color is set
    color = color.startsWith('#') ? color : defaultColors[color];
    return (                               
        <Svg xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 40 27">
        <Path 
            fill={color} 
            fill-rule="evenodd" 
            d="M819.666667,670.640253 L819.666667,668.364977 C819.666667,666.528998 818.543468,665 817.157931,665 L795.508735,665 C794.111883,665 793,666.506551 793,668.364977 L793,688.635023 C793,690.471002 794.123199,692 795.508735,692 L817.157931,692 C818.554784,692 819.666667,690.493449 819.666667,688.635023 L819.666667,686.364024 C819.890913,686.557541 820.129441,686.710983 820.376795,686.814444 L830.623205,691.10023 C831.921237,691.64316 833,690.577353 833,688.70601 L833,668.295067 C833,666.407154 831.935873,665.351795 830.623205,665.900847 L820.376795,670.186633 C820.130208,670.289773 819.891535,670.444464 819.666667,670.640253 L819.666667,670.640253 Z" transform="translate(-793 -665)"/>
        </Svg>         
    )
};

export default SVG;