import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity, Image } from "react-native";
import NavBase from "./NavigationBase";

const IMAGE = require("../../images/inside.jpg");
const IMAGE_WIDTH = 4595;
const IMAGE_HEIGHT = 1269;
const screen = Dimensions.get("window");

class Inside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: require('../../images/arrow.png'),
      arrowHeight: 60,
      arrowWidth: 60,
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

  navigateToLift = () => {
    this.props.navigation.navigate('lift');
  };

  render() {
    return (
      <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        <TouchableOpacity
          onPress={() => {
            this.navigateToLift();
          }}
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(510),
            left: this.resizeWidth(3820),
            width: this.resizeWidth(250),
            height: this.resizeHeight(380),
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
            LIFTAS
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(1900),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(2200),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(2500),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(2800),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(3100),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1050),
            left: this.resizeWidth(3400),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1025),
            left: this.resizeWidth(3650),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight, transform: [{rotate: '340deg'}]}}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(930),
            left: this.resizeWidth(3800),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight, transform: [{rotate: '310deg'}]}}></Image>
        </TouchableOpacity>
      </NavBase>
    );
  }
}

export default Inside;