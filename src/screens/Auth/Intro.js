import React, { Component } from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const B = (props) => <Text style={{fontWeight: 'bold', color: '#2c2c2c'}}>{props.children}</Text>

const slides = [
    {
        key: 'intro001',
        text: <Text><B>X Cloud</B> is a cloud <B>storage service</B> that <B>empowers the individual</B> as only the user can ever see the files that they store.</Text>,
        image: require('../../../assets/images/intro/intro01.png')
    },
    {
        key: 'intro002',
        text: 'Files are end-to-end encrypted, fragmented, and distributed amongst different machines around the world.',
        image: require('../../../assets/images/intro/intro02.png')
    },
    {
        key: 'intro003',
        text: 'For every year you\'re subscribed to one of X Cloud\'s plans, you\'ll be helping deforestation by planting a tree across the planet.',
        image: require('../../../assets/images/intro/intro03.png')
    },
    {
        key: 'intro004',
        text: 'Access your files on desktop, Web browser and iOS or Android app. Start using X Cloud today with 2 GB on us.',
        image: require('../../../assets/images/intro/intro04.png')
    }
];

class Intro extends Component {
    constructor() {
        super()
    }

    renderItem({ item }) {
        return <View style={styles.body}>
            <Text style={styles.explanationText}>{item.text}</Text>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
            </View>
        </View>
    }

    renderNextButton() {
        return <TouchableHighlight style={styles.buttonSkip}>
            <Text style={styles.buttonSkipText}>Next</Text>
        </TouchableHighlight>
    }

    renderDoneButton() {
        return <TouchableHighlight style={styles.buttonSkip}>
            <Text style={styles.buttonSkipText}>Get Started</Text>
        </TouchableHighlight>
    }

    render() {
        return <AppIntroSlider
            slides={slides}
            renderItem={this.renderItem}
            renderNextButton={this.renderNextButton}
            renderDoneButton={this.renderDoneButton}
            bottomButton
            onDone={() => { this.props.onFinish() }}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.inactiveDot}
        />
    }
}

const styles = StyleSheet.create({
    body: {
        margin: 41,
        flex: 1
    },
    explanationText: {
        fontFamily: 'CerebriSans-Medium',
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 28,
        color: '#7e7e7e'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1    
    },
    activeDot: {
        backgroundColor: '#a4a4a4'
    },
    inactiveDot: {
        backgroundColor: '#e8e8e8'
    },
    buttonSkip: {
        borderRadius: 23,
        backgroundColor: '#007aff',
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSkipText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'CerebriSans-Regular'
    }
})

export default Intro