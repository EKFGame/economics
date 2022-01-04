import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity, Image } from "react-native";
import NavBase from "./NavigationBase";
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMAGE = require("../../images/insideph.jpg");
const IMAGE_WIDTH = 3532;
const IMAGE_HEIGHT = 1607;
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
    AsyncStorage.setItem('datestart', new Date().getTime().toString());
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
            backgroundColor: "rgba(255,255,255,0.6)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1010),
            left: this.resizeWidth(2950),
            width: this.resizeWidth(200),
            height: this.resizeHeight(300),
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
            top: this.resizeHeight(1350),
            left: this.resizeWidth(1000),
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
            top: this.resizeHeight(1350),
            left: this.resizeWidth(1300),
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
            top: this.resizeHeight(1350),
            left: this.resizeWidth(1600),
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
            top: this.resizeHeight(1350),
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
            top: this.resizeHeight(1350),
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
            top: this.resizeHeight(1350),
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
            top: this.resizeHeight(1325),
            left: this.resizeWidth(2750),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight, transform: [{rotate: '340deg'}]}}></Image>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(1230),
            left: this.resizeWidth(2900),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={this.state.arrow} style={{width: this.state.arrowWidth, height: this.state.arrowHeight, transform: [{rotate: '310deg'}]}}></Image>
        </TouchableOpacity> */}
      </NavBase>
    );
  }
}

export default Inside;
