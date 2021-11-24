import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity, View } from "react-native";
import NavBase from "./NavigationBase";
import Button from "../../components/Button";

const IMAGE = require("../../images/cityPlace.jpg");
const IMAGE_WIDTH = 2704;
const IMAGE_HEIGHT = 978;
const screen = Dimensions.get("window");

class CityPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      lietuvosBankas: 'https://www.lb.lt/lt/kasdien-skelbiami-euro-ir-uzsienio-valiutu-santykiai-skelbia-europos-centrinis-bankas',
      lietuvosBankasInvestavimas: 'https://www.lb.lt/lt/investavimas-nuo-ko-pradeti',
      eDrauda: 'https://www.edrauda.lt/',
      tvarusZodynas: 'https://www.lietuviuzodynas.lt/zodynas/Tvarus',
      tvarusVerslas: 'https://www.vz.lt/tvarus-verslas',
      
      allSitesAreVisited: false,

      sitesAreVisited: {
        0: { visited: false },
        1: { visited: false },
        2: { visited: false },
        3: { visited: false },
        4: { visited: false },
      },
    
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
    this.state.sitesAreVisited[0].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebLietuvosBankasInvestavimas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.lietuvosBankasInvestavimas});
    this.state.sitesAreVisited[1].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebEDrauda = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.eDrauda});
    this.state.sitesAreVisited[2].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebTvarusZodynas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.tvarusZodynas});
    this.state.sitesAreVisited[3].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebTvarusVerslas = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.tvarusVerslas});
    this.state.sitesAreVisited[4].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  checkOrAllSitesIsVisited = () => {
    
    let counter = 0;

    for (let i = 0; i < 5; i++) {
      if (this.state.sitesAreVisited[i].visited == true) {
        counter++;
      }
    }
    
    if (counter == 5) {
      this.setState({ allSitesAreVisited: true });
    }

    counter = 0;

    this.forceUpdate();
    
  };


  goToRegistrationBlank = () => {
    this.props.navigation.navigate('registration');
  };

  render() {
    
    const buttonShow = () => {
      if (this.state.allSitesAreVisited)
        return (
          <View style={{
            position: "absolute",
            top: this.resizeHeight(800),
            left: this.resizeWidth(1200),
            width: this.resizeWidth(310),
            height: this.resizeHeight(160),
          }}>
            <Button
              color="rgba(1,48,90,0.8)"
              title="Pereiti į kitą lygį / Registruotis"
              W={400}
              H={80}
              onPress={() => {
                this.goToRegistrationBlank();
              }}
            />
          </View>
        );
      else return;
    };
    
    
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

        {buttonShow()}
      </NavBase>
    );
  }
}

export default CityPlace;
