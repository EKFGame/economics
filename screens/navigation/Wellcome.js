import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import NavBase from "./NavigationBase";

const IMAGE = require("../../images/wellcome.jpg");
const IMAGE_WIDTH = 2268;
const IMAGE_HEIGHT = 4032;
const screen = Dimensions.get("window");

class Wellcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getScreenWidth = () => {
    return (IMAGE_WIDTH / IMAGE_HEIGHT) * screen.height;
  };

  resizeWidth = (w) => {
    return (w * this.getScreenWidth()) / IMAGE_WIDTH;
  };

  resizeHeight = (h) => {
    return (h * screen.height) / IMAGE_HEIGHT;
  };

  navigateToOutSideOfEKF = () => {
    this.props.navigation.navigate('outside');
  };

  render() {
    return (
      <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        <TouchableOpacity
          onPress={() => {
            this.navigateToOutSideOfEKF();
          }}
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(766),
            left: this.resizeWidth(567),
            width: this.resizeWidth(1134),
            height: this.resizeHeight(400),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Atvyk apsilankyti!
          </Text>
        </TouchableOpacity>
      </NavBase>
    );
  }
}

export default Wellcome;