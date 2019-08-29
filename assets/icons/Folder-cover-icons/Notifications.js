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
            height: props.height ? props.height : 36
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M817.069949,225.695652 L801.259664,225.695652 C797.805602,225.695652 795,228.498199 795,231.955316 L795,250.740336 C795,254.194398 797.802547,257 801.259664,257 L820.044684,257 C823.498746,257 826.304348,254.197453 826.304348,250.740336 L826.304348,234.929896 C825.798432,235.032887 825.27496,235.086957 824.73913,235.086957 C820.416902,235.086957 816.913043,231.574303 816.913043,227.26087 C816.913043,226.724836 816.96707,226.201389 817.069949,225.695652 L817.069949,225.695652 L817.069949,225.695652 L817.069949,225.695652 Z M818.478261,227.26087 C818.478261,223.803087 821.288384,221 824.73913,221 C828.196913,221 831,223.810123 831,227.26087 C831,230.718652 828.189877,233.521739 824.73913,233.521739 C821.281348,233.521739 818.478261,230.711616 818.478261,227.26087 L818.478261,227.26087 L818.478261,227.26087 L818.478261,227.26087 Z"
                    transform="translate(-795 -221)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
