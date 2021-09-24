import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonMy from "../components/Button";

class StartPlace extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        webData: "LoadData",
      };
    }
    
    handleSubmitGo = () => {
      this.props.navigation.navigate("browser");
    }

    render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.js to start working djhsdjkwon app!</Text>
        <Text>Nauji pakeitimai</Text>
        <ButtonMy
          color="lightgrey"
          title="Navigate"
          onPress={() => {
            this.handleSubmitGo();
          }}
        />
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

export default StartPlace;
