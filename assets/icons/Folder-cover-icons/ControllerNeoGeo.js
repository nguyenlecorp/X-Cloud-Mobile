import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


class SVG extends React.Component {
    constructor(props) {
        super(props);

        const defaultColor = props.color ? props.color : 'blue';

        this.state = {
            color: defaultColor.startsWith('#') ? defaultColor : props.defaultColors[defaultColor],
            width: props.width ? props.width : 55,
            height: props.height ? props.height : 28
        }
    }

    render() {
        return <View style={[StyleSheet.absoluteFill]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 28"
                width={this.state.width}
                height={this.state.height}>
                <Path
                    fill={this.state.color}
                    d="M52.417534,241.445174 C51.0113015,241.445174 49.8711682,240.284311 49.8711682,238.852858 C49.8711682,237.421057 51.0113015,236.259847 52.417534,236.259847 C53.8237666,236.259847 54.9638998,237.421057 54.9638998,238.852858 C54.9638998,240.284311 53.8237666,241.445174 52.417534,241.445174 L52.417534,241.445174 L52.417534,241.445174 L52.417534,241.445174 L52.417534,241.445174 Z M48.9097992,235.160119 C47.5028843,235.160119 46.3630922,233.999256 46.3630922,232.567803 C46.3630922,231.135655 47.5028843,229.975139 48.9097992,229.975139 C50.3156906,229.975139 51.4554826,231.135655 51.4554826,232.567803 C51.4554826,233.999256 50.3156906,235.160119 48.9097992,235.160119 L48.9097992,235.160119 L48.9097992,235.160119 L48.9097992,235.160119 L48.9097992,235.160119 Z M46.3064608,245.017033 C44.8998871,245.017033 43.7604362,243.856517 43.7604362,242.424717 C43.7604362,240.992916 44.8998871,239.832053 46.3064608,239.832053 C47.7126934,239.832053 48.8528266,240.992916 48.8528266,242.424717 C48.8528266,243.856517 47.7126934,245.017033 46.3064608,245.017033 L46.3064608,245.017033 L46.3064608,245.017033 L46.3064608,245.017033 L46.3064608,245.017033 Z M40.2516779,236.139662 C40.2516779,234.707861 41.3918111,233.546998 42.7983848,233.546998 C44.2046174,233.546998 45.3444094,234.707861 45.3444094,236.139662 C45.3444094,237.571462 44.2046174,238.732325 42.7983848,238.732325 C41.3918111,238.732325 40.2516779,237.571462 40.2516779,236.139662 L40.2516779,236.139662 L40.2516779,236.139662 L40.2516779,236.139662 L40.2516779,236.139662 Z M34.9651714,245.649915 C33.7568076,246.295302 32.6310027,246.53463 32.4512151,246.184843 C32.2714275,245.835403 33.1048642,245.029538 34.3139104,244.384498 C35.5222742,243.739111 36.6477378,243.499783 36.8275255,243.849223 C37.0076542,244.198663 36.1735352,245.004875 34.9651714,245.649915 L34.9651714,245.649915 L34.9651714,245.649915 L34.9651714,245.649915 L34.9651714,245.649915 Z M32.3263531,239.726805 C32.1465655,239.377017 32.9803434,238.570805 34.1887072,237.926112 C35.3974122,237.281073 36.5228759,237.041397 36.7030046,237.391185 C36.8827922,237.740277 36.0490144,238.546837 34.8406505,239.191529 C33.6322867,239.836916 32.5064819,240.076245 32.3263531,239.726805 L32.3263531,239.726805 L32.3263531,239.726805 L32.3263531,239.726805 L32.3263531,239.726805 Z M25.5394559,239.457604 L25.5394559,237.660385 L27.6344763,238.558647 L25.5394559,239.457604 L25.5394559,239.457604 L25.5394559,239.457604 L25.5394559,239.457604 Z M23.9571884,234.291729 L22.8276309,233.141634 L24.7333114,232.352095 L23.9571884,234.291729 L23.9571884,234.291729 L23.9571884,234.291729 L23.9571884,234.291729 Z M22.8276309,243.976355 L23.9571884,242.826607 L24.7333114,244.766242 L22.8276309,243.976355 L22.8276309,243.976355 L22.8276309,243.976355 L22.8276309,243.976355 Z M18.6369078,242.073888 C16.6367279,242.073888 15.0152278,240.423253 15.0152278,238.386706 C15.0152278,236.350507 16.6367279,234.699525 18.6369078,234.699525 C20.6367465,234.699525 22.2582466,236.350507 22.2582466,238.386706 C22.2582466,240.423253 20.6367465,242.073888 18.6369078,242.073888 L18.6369078,242.073888 L18.6369078,242.073888 L18.6369078,242.073888 L18.6369078,242.073888 Z M18.6369078,247.720155 L17.754345,245.587044 L19.5194705,245.587044 L18.6369078,247.720155 L18.6369078,247.720155 L18.6369078,247.720155 L18.6369078,247.720155 Z M13.3159449,234.291382 L12.5408453,232.352095 L14.4458435,233.141634 L13.3159449,234.291382 L13.3159449,234.291382 L13.3159449,234.291382 L13.3159449,234.291382 Z M12.5408453,244.766242 L13.3159449,242.826607 L14.4458435,243.976355 L12.5408453,244.766242 L12.5408453,244.766242 L12.5408453,244.766242 L12.5408453,244.766242 Z M11.7336774,239.457604 L9.63933928,238.558647 L11.7340185,237.660385 L11.7336774,239.457604 L11.7336774,239.457604 L11.7336774,239.457604 L11.7336774,239.457604 Z M18.6369078,229.397834 L19.5194705,231.530946 L17.754345,231.530946 L18.6369078,229.397834 L18.6369078,229.397834 L18.6369078,229.397834 L18.6369078,229.397834 Z M47.2169981,226 C44.7221464,226 39.6294148,228.074061 32.5,228.074061 C29.170347,228.074061 20.051328,225.999653 16.6510563,226 C6.69518912,226.001042 5,242.367056 5,242.367056 C5,246.373457 7.54636579,254 15.5194519,254 C15.5194519,254 27.9166098,252.213897 32.5,252.213897 C37.083049,252.213897 49.4805481,254 49.4805481,254 C57.7927403,254 60,246.373457 60,242.367056 C60,242.367056 58.8680544,226 47.2169981,226 L47.2169981,226 L47.2169981,226 L47.2169981,226 L47.2169981,226 Z"
                    transform="translate(-5 -226)"
                    fill-rule="evenodd"
                />
            </Svg>
        </View>;
    }
}

export default SVG;
