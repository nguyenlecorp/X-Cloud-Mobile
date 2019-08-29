import React from 'react';
import * as Svg from 'react-native-svg';
const { Path } = Svg;

const SVG = ({
    defaultColors = {},
    color = 'blue',
    width = 27,
    height = 37,
}) => {
    // Use default colors if none hex color is set
    color = color.startsWith('#') ? color : defaultColors[color];
    return (                      
        <Svg xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 27 37">
        <Path 
            fill={color} 
            fill-rule="evenodd" 
            d="M1210.09301,221 L1190.68897,221 C1189.75031,221 1189,221.754829 1189,222.685958 L1189,256.314042 C1189,257.260911 1189.75618,258 1190.68897,258 L1214.31103,258 C1215.24969,258 1216,257.245171 1216,256.314042 L1216,226.888434 L1216,231.090909 L1205.875,231.090909 L1205.875,221 L1210.09301,221 L1210.09301,221 L1210.09301,221 L1210.09301,221 Z M1207.5625,221 L1216,229.409091 L1207.5625,229.409091 L1207.5625,221 L1207.5625,221 L1207.5625,221 L1207.5625,221 Z" transform="translate(-1189 -221)"/>
        </Svg>              
    )
};

export default SVG;