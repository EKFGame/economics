import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Animated, PanResponder, ImageBackground, Image, Touchable } from "react-native";
import Button from "../../components/Button";

const screen = Dimensions.get("window");
const sizeofx = screen.width / 2;
const sizeofy = screen.height / 2;

const cube = require("../../images/cube.png");
const cubegrey = require("../../images/cubegreytwo.png");

const cubeSize = 50;

const paratute = require("../../images/paratutebag.png"); //1
const umbrela = require("../../images/umbrela.png"); //3
const tablet = require("../../images/tablet.png"); //5
const card = require("../../images/card.png"); //4
const abacus = require("../../images/abacus.png"); //2
const city = require("../../images/vilniuscity.jpg");

const infobtn = require("../../images/infobtn.png");

class ActionSpace extends Component {
  constructor(props) {
    super(props);
    
    this.dataDrag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; // 15, 16, 17];

    this.pan = this.dataDrag.map(() => new Animated.ValueXY({x: 0, y: -sizeofy/0.1}));

    this.state = {
      imageBack: require("../../images/liftfull.png"),
      //imageBack: require("../../images/space.jpg"),
      showDorsStart: true,
      gameStart: false,
      gameEnd: false,
      showInfo: false,
      goToCityShow: false,
      doors: require("../../images/liftfull.png"),
      fadeInImage: new Animated.Value(0),

      basePlaces : {
        0: { base: cubegrey, posx: -sizeofx/1.5, posy: 0, respond: false },
        1: { base: cube, posx: 0-25, posy: 0, respond: false, hint: paratute },
        2: { base: cubegrey, posx:  sizeofx/1.5 - 50, posy: 0, respond: false },
        3: { base: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/1.5, respond: false },
        4: { base: cube, posx: 0-25, posy: -sizeofy/1.5, respond: false, hint: abacus },
        5: { base: cubegrey, posx: sizeofx/1.5-50, posy: -sizeofy/1.5, respond: false },
        6: { base: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/0.9, respond: false },
        7: { base: cubegrey, posx: 0-25, posy: -sizeofy/0.9, respond: false },
        8: { base: cube, posx: sizeofx/1.5-50, posy: -sizeofy/0.9, respond: false, hint: umbrela },
        9: { base: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        10: { base: cube, posx: 0-25, posy: -sizeofy/0.1, respond: false, hint: card },
        11: { base: cubegrey, posx: sizeofx/1.5-50, posy: -sizeofy/0.1, respond: false },
        12: { base: cube, posx: -sizeofx/1.5, posy: -sizeofy/0.1, respond: false, hint: tablet },
        13: { base: cubegrey, posx: 0-25, posy: -sizeofy/0.1, respond: false },
        14: { base: cubegrey, posx: sizeofx/1.5-50, posy: -sizeofy/0.1, respond: false },

        15: { hint: paratute, posx: sizeofx-40, posy: -sizeofy+60, respond: false, used: false },
        16: { hint: abacus, posx: sizeofx-40, posy: -sizeofy+120, respond: false, used: false },
        17: { hint: umbrela, posx: sizeofx-40, posy: -sizeofy+180, respond: false, used: false },
        18: { hint: card, posx: sizeofx-40, posy: -sizeofy+240, respond: false, used: false },
        19: { hint: tablet, posx: sizeofx-40, posy: -sizeofy+300, respond: false, used: false },
      },

      placesOfX : {
        0 : {posx: -sizeofx/1.5},
        1 : {posx: 0 -25},
        2 : {posx:  sizeofx/1.5-50},
      },

      placesOfY : {
        0 : {posy: sizeofy+100},
        1 : {posy: sizeofy/1.5},
        2 : {posy: 0},
        3 : {posy: -sizeofy/2},
        4 : {posy: -sizeofy/1.1},
        5 : {posy: -sizeofy/0.1},
      },

    };
    
    this.openLiftDoors();
    
  }

  givePlaces = () => {
    for (let i = 0; i < 20; i++) {
      this.pan[i].x.setValue(this.state.basePlaces[i].posx - cubeSize);
      this.pan[i].y.setValue(this.state.basePlaces[i].posy);
    }
  };

  openLiftDoors = () => {
    setTimeout(() => {
      this.setState({ imageBack: require("../../images/space.jpg") });
      this.givePlaces();
      this.setState({gameStart: true});
    }, 1000);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift14.png") });
    }, 1000);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift12.png") });
    }, 1600);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift34.png") });
      
    }, 2200);
    setTimeout(() => {
      this.setState({ showDorsStart: false });
    }, 2800);
  };

  navigateToWeb = (webNumber) => {
    setTimeout(() => {
    this.props.navigation.navigate('taskScreen', {numberToPass: webNumber});
    }, 500);
  }

  getPanResponder(index) {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        this.pan[index].setOffset({
          x: this.pan[index].x._value,
          y: this.pan[index].y._value,
        });
      },

    });
  }

  movePanObject = (index, goX) => {
    Animated.spring(this.pan[index], {
      toValue: {
        y: 0,
        x: goX,
      },
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  endGame = () => {
    this.setState({gameEnd: true});
    this.setState({goToCityShow: true});
    this.forceUpdate();
  }

  changeLocation = (index) => {

    let pointOfMove = 0;
    let iterationCounterX = 0;
    let iterationCounterY = 0;
    let posOfX = 0;
    let posOfy = 0;
    let moveIn = false;

    if (this.state.basePlaces[index].respond == true) {

      if(index == 15){
        this.movePanObject(index, sizeofx-90);
        this.state.basePlaces[15].used = true;
        this.state.basePlaces[0].respond = true;
        this.state.basePlaces[1].respond = true;
        this.state.basePlaces[2].respond = true;
      }

      if(index == 16){
        // this.movePanObject(16, sizeofx-90);
        this.movePanObject(index, sizeofx-90);
        this.state.basePlaces[16].used = true;
        this.state.basePlaces[3].respond = true;
        this.state.basePlaces[4].respond = true;
        this.state.basePlaces[5].respond = true;
      }

      if(index == 17){
        // this.movePanObject(17, sizeofx-90);
        this.movePanObject(index, sizeofx-90);
        this.state.basePlaces[17].used = true;
        this.state.basePlaces[6].respond = true;
        this.state.basePlaces[7].respond = true;
        this.state.basePlaces[8].respond = true;
      }

      if(index == 18){
        // this.movePanObject(18, sizeofx-90);
        this.movePanObject(index, sizeofx-90);
        this.state.basePlaces[18].used = true;
        this.state.basePlaces[9].respond = true;
        this.state.basePlaces[10].respond = true;
        this.state.basePlaces[11].respond = true;
      }

      if(index == 19){
        // this.movePanObject(19, sizeofx-90);
        this.movePanObject(index, sizeofx-90);
        this.state.basePlaces[19].used = true;
        this.state.basePlaces[12].respond = true;
        this.state.basePlaces[13].respond = true;
        this.state.basePlaces[14].respond = true;
      }

      if(index == 1 && this.state.basePlaces[15].used == true){
        moveIn = true;
        pointOfMove = 0;
        this.state.basePlaces[16].respond = true;
        this.movePanObject(15, sizeofx+10);
        this.navigateToWeb(0);
      }

      if(index == 4 && this.state.basePlaces[16].used == true){
        moveIn = true;
        pointOfMove = 3;
        this.state.basePlaces[17].respond = true;
        this.movePanObject(16, sizeofx+10);
        this.props.navigation.navigate('taskScreen', {numberToPass: 1});
      }

      if(index == 8 && this.state.basePlaces[17].used == true == true){
        moveIn = true;
        pointOfMove = 6;
        this.state.basePlaces[18].respond = true;
        this.movePanObject(17, sizeofx+10);
        this.props.navigation.navigate('taskScreen', {numberToPass: 2});
      }

      if(index == 10 && this.state.basePlaces[18].used == true == true ){
        moveIn = true;
        pointOfMove = 9;
        this.state.basePlaces[19].respond = true;
        this.movePanObject(18, sizeofx+10);
        this.props.navigation.navigate('taskScreen', {numberToPass: 3});
      }

      if(index == 12 && this.state.basePlaces[19].used == true == true){
        moveIn = true;
        pointOfMove = 12;
        this.movePanObject(19, sizeofx+10);
        this.props.navigation.navigate('taskScreen', {numberToPass: 4});

        setTimeout(() => {
          this.endGame();
        }, 3000);
        
      }

    }
    
    if( moveIn == true){
    
      if(index == 1 || index == 4 || index == 8 || index == 10 || index == 12){

        for(let i = pointOfMove; i < 15; i++){
          
          let xCounter = i - iterationCounterX-pointOfMove;
          
          if(xCounter == 2) { 
            iterationCounterX = iterationCounterX + 3
          }
          
          posOfX = this.state.placesOfX[xCounter].posx;
          posOfy = this.state.placesOfY[iterationCounterY].posy;

          Animated.spring(this.pan[i], {
            toValue: {
              y: posOfy,
              x: posOfX - cubeSize,
            },
            duration: 700,
            useNativeDriver: true,
          }).start();
          
          if(xCounter == 2) {iterationCounterY++};

          // setTimeout(() => {
          //   this.pan[i].flattenOffset();
          //   this.pan[i].x.setValue(posOfX - cubeSize),
          //   this.pan[i].y.setValue(sizeofy - 100);
          // }, 750);
        
        }

        iterationCounterX = 0;
        iterationCounterY = 0;

      }
          
    }

    else if ( index != 1 && index != 4 && index != 8 && index != 10 && index != 12 &&
              index != 15 && index != 16 && index != 17 && index != 18 && index != 19 )
    {
      //seconds
    }
      
      
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

  gotoTaskWindows = () => {
    this.props.navigation.navigate('questions');
    this.setState({gameStart: false});
    this.state.basePlaces[15].respond = true;
    this.setState({showInfo: false});
    this.forceUpdate();
  }

  goToCityPlace = () => {
    this.props.navigation.navigate('cityPlace');
  }

  fadeIn = () => {
    Animated.timing(this.state.fadeInImage, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  render() {

    const imageShowOpen = () => {
      if (this.state.showDorsStart == true)
        return (
          <Image
            source={this.state.doors}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        );
      else return;
    };
    
    const goToCityShow = () => {
      if (this.state.goToCityShow == true) {
        this.fadeIn();
        return (
          <View style={{flex: 1}}>
          <Animated.Image
            style={[styles.imageCity, { opacity: this.state.fadeInImage }]}
            source={city}
            resizeMode="stretch"
          />

          <View style={styles.cityButtonplace}>
            <Button
              color="rgba(0,0,255,0.7)"
              title="Keliauti į miestą!"
              W={300}
              H={80}
              onPress={() => {
                this.goToCityPlace();
              }}
            />
          </View>

          </View>
        );}
      else return;
    };

    const buttonShow = () => {
      if (this.state.gameStart == true)
        return (
          <View style={styles.buttonplace}>
            <Button
              color="dodgerblue"
              title="Pradėti"
              W={150}
              H={80}
              onPress={() => {
                this.gotoTaskWindows();
              }}
            />
          </View>
        );
      else return;
    };

    const basketZone = () => {
      if (this.state.gameEnd == false)
        return (
          <View 
          style={ styles.basket}>
          </View>
        );
      else return;
    };

    const infoZone = () => {
      if (this.state.showDorsStart == false)
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
          <TouchableOpacity style={styles.infoTextAp} onPress={() => {
            this.changeViewInfoBack(); }}>
            <View>
            <Text style={styles.infoText} > Tikslas </Text>
            <Text style={styles.infoText} > Įeiti į žaidimo užduotis panaudojus daiktus iš krepšelio. </Text>
            <Text style={styles.infoText} > Palietus daiktą, jis bus aktyvuotas ir leis įeiti į užduotį. </Text>

            </View>
          </TouchableOpacity>
          
        );
      } else return;
    };

    return (
      <ImageBackground 
      source={this.state.imageBack}
      defaultSource={this.state.imageBack}
      style={styles.image}>
        
        {basketZone()}

        {this.dataDrag.map((d, index) => (
          <Animated.View
            key={index}
            {...this.getPanResponder(index).panHandlers}
            style={[
              styles.draggableContainer,
              { width: cubeSize*2, height: cubeSize*2 },
              this.pan[index].getTranslateTransform(),
            ]}
          >
            <TouchableOpacity onPress={() => { this.changeLocation(index); }}>
              <Image source={this.state.basePlaces[index].base} style={styles.image}></Image>
              <Image source={this.state.basePlaces[index].hint} style={styles.hint}></Image>
            </TouchableOpacity>
          </Animated.View>
        ))}

  

      {buttonShow()}
      {infoZone()}
      {infoText()}
      {imageShowOpen()}
      {goToCityShow()}    
      
      </ImageBackground>
    );
  }
}

export default ActionSpace;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  imageCity: {
    height: '100%',
    width: '100%',
  },
  hint: {
    position: 'absolute',
    top: 5, left: 20,
    height: 60,
    width: 60,
  },
  basket: {
    position: 'absolute',
    right: 10,
    top: 50,
    height: screen.height/2.5,
    width: 65,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
  },
  draggableContainer: {
    position: "absolute",
    top: screen.height / 2,
    left: screen.width / 2,
  },
  buttonplace: {
    position: "absolute",
    bottom: 60,
    right: screen.width/2 - 85,
  },
  cityButtonplace: {
    position: "absolute",
    bottom: 150,
    right: screen.width/2 - 160,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  infoAreaStyle: {
    position: 'absolute',
    right: 8,
    bottom: 10,
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
    width: '95%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: "rgba(0,76,153,0.8)",
    position: 'absolute',
    top: 30,
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
