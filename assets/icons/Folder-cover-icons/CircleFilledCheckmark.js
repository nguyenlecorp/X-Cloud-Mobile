import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


class SVG extends React.Component {
    constructor(props) {
        super(props);

        const defaultColor = props.color ? props.color : 'blue';

        this.state = {
            color: defaultColor.startsWith('#') ? defaultColor : props.defaultColors[defaultColor],
            width: props.width ? props.width : 38,
            height: props.height ? props.height : 38
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 38"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M228,917 C238.49341,917 247,908.49341 247,898 C247,887.50659 238.49341,879 228,879 C217.50659,879 209,887.50659 209,898 C209,908.49341 217.50659,917 228,917 L228,917 L228,917 L228,917 Z M219.09627,900.478482 L225.198693,904.761031 L234.330903,889.313279 C234.818629,888.518838 235.871799,888.262395 236.681324,888.741034 C237.491047,889.22078 237.753288,890.253024 237.264434,891.04766 L227.118207,908.148044 C226.862662,908.564409 226.436192,908.851676 225.948832,908.93601 C225.461472,909.020343 224.960604,908.893544 224.575362,908.588062 L216.944109,903.092898 C216.609161,902.8278 216.403032,902.463926 216.333807,902.078646 C216.250856,901.616973 216.364601,901.123548 216.688162,900.72966 C217.282054,900.008172 218.361084,899.895655 219.09627,900.478482 L219.09627,900.478482 L219.09627,900.478482 L219.09627,900.478482 Z"
                    transform="translate(-209 -879)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
