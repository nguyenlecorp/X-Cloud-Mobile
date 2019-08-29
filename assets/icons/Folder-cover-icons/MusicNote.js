import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


class SVG extends React.Component {
    constructor(props) {
        super(props);

        const defaultColor = props.color ? props.color : 'blue';

        this.state = {
            color: defaultColor.startsWith('#') ? defaultColor : props.defaultColors[defaultColor],
            width: props.width ? props.width : 34,
            height: props.height ? props.height : 40
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 40"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M1023,440.028437 C1009.80566,439.582648 998.997773,444.525678 998.997773,444.525678 L998.989765,469.608702 C997.645185,469.067331 996.01231,468.938815 994.352206,469.348458 C990.774936,470.2312 988.432532,473.275412 989.119637,476.150948 C989.808344,479.026483 993.265491,480.64096 996.842762,479.759022 C1000.21502,478.92608 1002.49016,476.171831 1002.16182,473.449711 L1002.16182,454.708126 C1002.16182,454.708126 1009.80566,451.994842 1019.71823,451.314512 L1019.71823,465.253631 C1018.38887,464.736356 1016.78642,464.619086 1015.15755,465.0215 C1011.58028,465.904241 1009.23708,468.949257 1009.92498,471.824793 C1010.61209,474.698722 1014.07004,476.314002 1017.64731,475.43126 C1020.77131,474.660167 1022.95355,472.240862 1022.9984,469.725973 L1023,469.727579 L1023,440.028437 Z"
                    transform="translate(-989 -440)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
