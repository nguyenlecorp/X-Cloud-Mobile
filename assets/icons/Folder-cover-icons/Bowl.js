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
            height: props.height ? props.height : 35
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 35"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M626.970697,253.687283 C637.06656,249.242743 636.996327,237.594214 636.996327,237.594214 C637.055561,236.698694 636.391265,235.972732 635.5106,235.972732 L600.491586,235.972732 C599.611808,235.972732 598.929349,236.709917 599.005859,237.594214 C599.005859,237.594214 598.935626,249.242743 609.031489,253.687283 L607.744827,255.648323 C607.248366,256.404995 607.575561,257 608.460747,257 L627.541439,257 C628.427948,257 628.747153,256.394834 628.257359,255.648323 L626.970697,253.687283 L626.970697,253.687283 L626.970697,253.687283 L626.970697,253.687283 Z M627.075104,234.355249 L630.719325,224.181767 C631.022529,223.33532 630.59778,222.403745 629.771633,222.098215 C628.939726,221.790554 628.030332,222.23016 627.727581,223.075344 L623.687031,234.355249 L627.075104,234.355249 L627.075104,234.355249 L627.075104,234.355249 L627.075104,234.355249 Z"
                    transform="translate(-599 -222)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
