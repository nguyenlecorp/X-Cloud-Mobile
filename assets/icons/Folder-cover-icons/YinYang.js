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
                    d="M228,477 C217.50659,477 209,468.49341 209,458 C209,447.50659 217.50659,439 228,439 C238.49341,439 247,447.50659 247,458 C247,468.49341 238.49341,477 228,477 Z M228,458 C232.497176,458 236.142857,454.354319 236.142857,449.857143 C236.142857,445.359967 232.497176,441.714286 228,441.714286 C219.005648,441.714286 211.714286,449.005648 211.714286,458 C211.714286,466.994352 219.005648,474.285714 228,474.285714 C223.502824,474.285714 219.857143,470.640033 219.857143,466.142857 C219.857143,461.645681 223.502824,458 228,458 Z M228,468.857143 C229.499059,468.857143 230.714286,467.641916 230.714286,466.142857 C230.714286,464.643799 229.499059,463.428571 228,463.428571 C226.500941,463.428571 225.285714,464.643799 225.285714,466.142857 C225.285714,467.641916 226.500941,468.857143 228,468.857143 Z M228,452.571429 C226.500941,452.571429 225.285714,451.356201 225.285714,449.857143 C225.285714,448.358084 226.500941,447.142857 228,447.142857 C229.499059,447.142857 230.714286,448.358084 230.714286,449.857143 C230.714286,451.356201 229.499059,452.571429 228,452.571429 Z"
                    transform="translate(-209 -439)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;