import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


class SVG extends React.Component {
    constructor(props) {
        super(props);

        const defaultColor = props.color ? props.color : 'blue';

        this.state = {
            color: defaultColor.startsWith('#') ? defaultColor : props.defaultColors[defaultColor],
            width: props.width ? props.width : 36,
            height: props.height ? props.height : 40
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 40"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M15,892.389309 C15,890.406988 16.6167823,888.8 18.5834312,888.8 L47.4165688,888.8 C49.3956432,888.8 51,890.410125 51,892.389309 L51,914.010691 C51,915.993012 49.3832177,917.6 47.4165688,917.6 L18.5834312,917.6 C16.6043568,917.6 15,915.989875 15,914.010691 L15,892.389309 L15,892.389309 L15,892.389309 L15,892.389309 Z M22.2,879.8 C22.2,878.805887 23.0203697,878 24.0044519,878 L41.9955481,878 C42.9921194,878 43.8,878.798957 43.8,879.8 L43.8,881.6 L22.2,881.6 L22.2,879.8 L22.2,879.8 L22.2,879.8 L22.2,879.8 Z M18.6,885.2 C18.6,884.205887 19.4003356,883.4 20.401569,883.4 L45.598431,883.4 C46.5934101,883.4 47.4,884.198957 47.4,885.2 L47.4,887 L18.6,887 L18.6,885.2 L18.6,885.2 L18.6,885.2 L18.6,885.2 Z"
                    transform="translate(-15 -878)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
