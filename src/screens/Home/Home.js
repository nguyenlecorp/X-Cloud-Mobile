import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { compose } from "redux";
import { connect } from "react-redux";
import { BlurView } from "expo";

import AppMenu from "../../components/AppMenu/AppMenu";
import FileList from "../../components/FileList/FileList";
import ButtonPreviousDir from "../../components/ButtonPreviousDir/ButtonPreviousDir";
import { fileActions } from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folderId: null,
      folderName: "Home",
      backButtonVisible: false,
      token: "",
      user: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    const folderId = parseFloat(
      nextProps.navigation.getParam("folderId", "undefined")
    );
    const { token, user } = this.props.authenticationState;

    // Set active Folder ID
    if (folderId !== this.state.folderId) {
      this.props.dispatch(fileActions.getFolderContent(folderId));
      this.setState({
        folderId,
        backButtonVisible: folderId !== user.root_folder_id
      });
    }

    if (user !== this.state.user) {
      this.setState({
        token,
        user
      });
    }
  }

  render() {
    const { navigation, filesState } = this.props;
    const uri =
      "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

    return (
      <View style={styles.container}>
        <AppMenu navigation={navigation} />
        <View style={styles.breadcrumbs}>
          <Text style={styles.breadcrumbsTitle}>
            {filesState.folderContent && filesState.folderContent.parentId
              ? filesState.folderContent.name
              : "Home"}
          </Text>
          {this.state.backButtonVisible && <ButtonPreviousDir />}
        </View>

        <FileList />

        <BlurView
          tint="dark"
          intensity={50}
          style={[StyleSheet.absoluteFill, styles.blur]}
        />

        <View style={styles.drawer}>
          <Text>Random content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blur: {
    zIndex: 3
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  breadcrumbs: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 2,
    marginTop: 30,
    paddingBottom: 30
  },
  breadcrumbsTitle: {
    fontFamily: "CircularStd-Bold",
    fontSize: 21,
    letterSpacing: -0.2,
    paddingLeft: 20,
    color: "#000000"
  },
  drawer: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200, // temp
    display: "flex",
    zIndex: 4
  }
});

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default (HomeComposed = compose(connect(mapStateToProps))(Home));
