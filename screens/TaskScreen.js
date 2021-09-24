import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import BrowserScreen from "./Browser";
import WebBrowser from "../components/WebBrowser";
class TaskScreen extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        webData: "LoadData",
      };
    }

    render() {
    return (
      <View style={{flex: 1, top: 30}}>
        <StatusBar style="auto" />
        <View style={{flex: 4}}>
            <WebBrowser
            outsideuri="https://www.viko.lt/studijos/studiju-programos/buhalterine-apskaita"/>
        </View>
        <View style={{flex: 1}}> 
            <Text>Open up App.js to start working djhsdjkwon app!</Text>
            <Text>Nauji pakeitimai</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskScreen;
