import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, Text, View } from "react-native";

class Browser extends Component {
  render() {
    return (
      <View style={{ flex: 1, top: 30 }}>
          <StatusBar style="auto" />
          <WebView
        style={{ flex: 1 }}
        source={{
          uri: "https://www.viko.lt/studijos/studiju-programos/buhalterine-apskaita",
        }}
      />
      </View>  
    );
  }
}

export default Browser;
