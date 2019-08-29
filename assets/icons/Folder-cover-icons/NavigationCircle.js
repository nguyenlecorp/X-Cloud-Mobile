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
                    d="M1008,1 C997.506474,1 989,9.50647372 989,19.9992384 C989,30.4927647 997.506474,39 1008,39 C1018.49353,39 1027,30.4927647 1027,19.9992384 C1027,9.50647372 1018.49353,1 1008,1 L1008,1 L1008,1 L1008,1 Z M1007.51574,31.8295862 C1007.1605,32.5609548 1006.68883,32.5109184 1006.47242,31.7534809 L1004.6001,25.2003653 C1004.37913,24.4269649 1003.55707,23.6163064 1002.79963,23.3998956 L996.246519,21.5275769 C995.473119,21.3066054 995.424204,20.8467054 996.170414,20.4842605 L1016.90651,10.4124428 C1017.63788,10.0572066 1017.95,10.3472806 1017.58756,11.0934907 L1007.51574,31.8295862 L1007.51574,31.8295862 L1007.51574,31.8295862 L1007.51574,31.8295862 Z"
                    transform="translate(-989 -1)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
