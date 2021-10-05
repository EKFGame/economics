import React, { Component } from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground } from "react-native";

const screen = Dimensions.get("window");
const imageBack = require("../../images/liftas.jpg");

class Lift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <ImageBackground
      source={imageBack}
      style={styles.image}
      resizeMode="stretch"
      >
          <Text>Something</Text>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    image: {
      height: "100%",
      width: "100%",
    },
  });

export default Lift;
