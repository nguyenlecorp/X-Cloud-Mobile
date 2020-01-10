import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet, Alert, RecyclerViewBackedScrollView } from "react-native";
import { Provider } from "react-redux";

import AppNavigator from "./src/AppNavigator";
import { loadFonts } from "./src/helpers";
import { store } from "./src/store";

import async from 'async'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }

  checkEnvironmentVars() {
    const result = process && process.env && process.env.REACT_APP_API_URL
    return new Promise((resolve, reject) => {
      if (result) {
        resolve()
      } else {
        reject('No env vars')
      }
    })
  }

  componentDidMount() {
    Promise.all([
      loadFonts(),
      this.checkEnvironmentVars()
    ]).then(() => {
      this.setState({ fontLoaded: true });
    }).catch(err => {
      Alert.alert('Error', err)
    })
  }


  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <AppNavigator />
          </View>
        </Provider>
      );
    }

    return (
      <View style={styles.container}>
        <Text>...</Text>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
