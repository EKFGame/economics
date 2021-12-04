import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebBrowser from "../components/WebBrowser";
import CityTask from "./CityTask";

class CityTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: "Is kazkur ateina sis klaulsimas?",
    };
  }

  Data = "jdlajslkjalskd";

  render() {
    
    const { numberToPass } = this.props.route.params;
    const { dataToPassLink } = this.props.route.params;
    
    return (
      <View style={{ flex: 1, top: 30 }}>
        <StatusBar style="auto" />
        <View style={{ flex: 1.5 }}>
          <WebBrowser outsideuri={dataToPassLink} />
        </View>
        <View style={{ flex: 1 }}>
          <CityTask DataToShow={numberToPass} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CityTaskScreen;
