import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import NavBase from "./NavigationBase";

const IMAGE = require("../../images/cityPlace.jpg");
const IMAGE_WIDTH = 2704;
const IMAGE_HEIGHT = 978;
const screen = Dimensions.get("window");

class CityPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
        webData: 'https://ekf.viko.lt',
        lietuvosBankas: 'https://www.lb.lt/lt/kasdien-skelbiami-euro-ir-uzsienio-valiutu-santykiai-skelbia-europos-centrinis-bankas',
        lietuvosBankasInvestavimas: 'https://www.lb.lt/lt/investavimas-nuo-ko-pradeti',
        eDrauda: 'https://www.edrauda.lt/',
        tvarusZodynas: 'https://www.lietuviuzodynas.lt/zodynas/Tvarus',
        tvarusVerslas: 'https://www.vz.lt/tvarus-verslas',
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

  navigateToWebLietuvosBankas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.lietuvosBankas});
  };

  navigateToWebLietuvosBankasInvestavimas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.lietuvosBankasInvestavimas});
  };

  navigateToWebEDrauda = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.eDrauda});
  };

  navigateToWebTvarusZodynas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.tvarusZodynas});
  };

  navigateToWebTvarusVerslas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.tvarusVerslas});
  };

  render() {
    return (
      <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        
        <TouchableOpacity
          onPress={() => {
            this.navigateToWebLietuvosBankasInvestavimas();
          }}
          style={{
            backgroundColor: "rgba(0,113,83,0.5)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(400),
            left: this.resizeWidth(335),
            width: this.resizeWidth(310),
            height: this.resizeHeight(160),
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
            LB Investavimas
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => {
            this.navigateToWebLietuvosBankas();
          }}
          style={{
            backgroundColor: "rgba(0,113,83,0.5)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(336),
            left: this.resizeWidth(820),
            width: this.resizeWidth(160),
            height: this.resizeHeight(220),
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
            Lietuvos Bankas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.navigateToWebEDrauda();
          }}
          style={{
            backgroundColor: "rgba(225,38,107,0.5)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(380),
            left: this.resizeWidth(1115),
            width: this.resizeWidth(135),
            height: this.resizeHeight(190),
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
            E Drauda
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.navigateToWebTvarusZodynas();
          }}
          style={{
            backgroundColor: "rgba(161,174,122,0.5)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(320),
            left: this.resizeWidth(1411),
            width: this.resizeWidth(76),
            height: this.resizeHeight(200),
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
            Tvarus
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.navigateToWebTvarusVerslas();
          }}
          style={{
            backgroundColor: "rgba(1,48,90,0.5)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(320),
            left: this.resizeWidth(1490),
            width: this.resizeWidth(100),
            height: this.resizeHeight(210),
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
            Tvarus Verslas
          </Text>
        </TouchableOpacity>
      </NavBase>
    );
  }
}

export default CityPlace;
