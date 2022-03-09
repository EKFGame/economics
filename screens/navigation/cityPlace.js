import React, { Component } from "react";
import { Image, Text, Dimensions, TouchableOpacity, View, StyleSheet } from "react-native";
import NavBase from "./NavigationBase";
import Button from "../../components/Button";

import datadb from "../database";

const IMAGE = require("../../images/cityPlace.jpg");
const IMAGE_WIDTH = 2704;
const IMAGE_HEIGHT = 978;
const screen = Dimensions.get("window");

const infobtn = require("../../images/infobtn.png");

const ArrayOfData = datadb.returnAllData();

class CityPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      lietuvosBankas: ArrayOfData[27].data, // 'https://www.lb.lt/lt/kasdien-skelbiami-euro-ir-uzsienio-valiutu-santykiai-skelbia-europos-centrinis-bankas',
      lietuvosBankasInvestavimas: ArrayOfData[23].data, // 'https://www.lb.lt/lt/investavimas-nuo-ko-pradeti',
      eDrauda: ArrayOfData[30].data, // 'https://www.edrauda.lt/',
      tvarusVerslas: ArrayOfData[32].data, //'https://www.lietuviuzodynas.lt/zodynas/Tvarus',
      debetas: ArrayOfData[31].data, // 'http://zodynas.vz.lt/Debetas',
      
      showInfo: false,
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

  changeViewInfo = () => {
    if(this.state.showInfo == false){
      this.setState({ showInfo: true });
    } else { this.setState({ showInfo: false }); }
    
    this.forceUpdate();
  }

  changeViewInfoBack = () => {
    this.setState({ showInfo: false });
    this.forceUpdate();
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
    this.props.navigation.navigate('citytaskScreen', {numberToPass: 0, dataToPassLink: this.state.lietuvosBankas});
    this.state.sitesAreVisited[0].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebLietuvosBankasInvestavimas = () => {
    this.props.navigation.navigate('citytaskScreen', {numberToPass: 1, dataToPassLink: this.state.lietuvosBankasInvestavimas});
    this.state.sitesAreVisited[1].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebEDrauda = () => {
    this.props.navigation.navigate('citytaskScreen', {numberToPass: 2, dataToPassLink: this.state.eDrauda});
    this.state.sitesAreVisited[2].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebTvarusZodynas = () => {
    this.props.navigation.navigate('citytaskScreen', {numberToPass: 3, dataToPassLink: this.state.debetas});
    this.state.sitesAreVisited[3].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  navigateToWebTvarusVerslas = () => {
    this.props.navigation.navigate('citytaskScreen', {numberToPass: 4, dataToPassLink: this.state.tvarusVerslas});
    this.state.sitesAreVisited[4].visited = true;
    this.checkOrAllSitesIsVisited();
  };

  checkOrAllSitesIsVisited = () => {
    
    this.setState({showInfo: false});

    let counter = 0;

    for (let i = 0; i < 5; i++) {
      if (this.state.sitesAreVisited[i].visited == true) {
        counter++;
      }
    }
    
    if (counter == 5) { //5
      setTimeout(() => {
        this.setState({ allSitesAreVisited: true });
        this.forceUpdate();  
      }, 5000);
    }

    counter = 0;
    
  };


  goToNextLevel = () => {
    this.props.navigation.navigate('actionSpaceTwo');
  };

  render() {
    
    const infoZone = () => {
      return (
        <View 
        style={styles.infoAreaStyle}>
          
          <TouchableOpacity onPress={() => {
              this.changeViewInfo(); }}>
            <Image
            source={infobtn}
            style={styles.imageIconStyle}
            />
          </TouchableOpacity>

        </View>
      );
    };

    const infoText = () => {
      
      if (this.state.showInfo == true){
        return (
          <View>
            <TouchableOpacity style={styles.infoTextAp} onPress={() => {
              this.changeViewInfoBack(); }}>
              <View>
              <Text style={styles.infoText} > Tikslas </Text>
              <Text style={styles.infoText} > Užeiti į visus pastatus ir įvykdyti užduotis juose. </Text>
              <Text style={styles.infoText} > Įveikus visas užduotis bus galima keliauti toliau. </Text>

              </View>
            </TouchableOpacity>
          </View>
        );
      } else return;
    };

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
              title="Pereiti į kitą lygį"
              W={400}
              H={80}
              onPress={() => {
                this.goToNextLevel();
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
            Investicinė Bendrovė
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
            Bankas
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
            Draudimo Įmonė
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
            left: this.resizeWidth(1390),
            width: this.resizeWidth(100),
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
            Apskaitos Įmonė
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
        
        {infoZone()}
        {infoText()}
        {buttonShow()}
      </NavBase>
    );
  }
}

const styles = StyleSheet.create({
  infoAreaStyle: {
    position: 'absolute',
    left: 910,
    top: 10,
    //backgroundColor: "rgba(0,76,153,0.8)",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIconStyle: {
    margin: 5,
    height: 60,
    width: 60,
    resizeMode: 'stretch',
  },
  infoTextAp: {
    width: '20%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: "rgba(0,76,153,0.8)",
    position: 'absolute',
    top: 90,
    alignItems: 'center',
    borderRadius: 10,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CityPlace;
