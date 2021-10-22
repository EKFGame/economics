import React, { Component } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Animated, PanResponder, ImageBackground, Image, Touchable } from "react-native";
import NavBase from "./NavigationBase";
import Button from "../../components/Button";

const screen = Dimensions.get("window");
const sizeofx = screen.width / 2;
const sizeofy = screen.height / 2;

const cube = require("../../images/cube.png");
const cubegrey = require("../../images/cubegreytwo.png");

const cubeSize = 50;


class ActionSpace extends Component {
  constructor(props) {
    super(props);
    
    this.dataDrag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    this.pan = this.dataDrag.map(() => new Animated.ValueXY({x: 0, y: -sizeofy/0.1}));

    this.state = {
      imageBack: require("../../images/liftfull.png"),
      showDorsStart: true,
      gameStart: false,

      goods : {
        0: { thing: cubegrey, posx: -sizeofx/1.5, posy: 0, respond: false },
        1: { thing: cube, posx: 0, posy: 0, respond: false },
        2: { thing: cubegrey, posx:  sizeofx/1.5, posy: 0, respond: false },
        3: { thing: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/1.5, respond: false },
        4: { thing: cube, posx: 0, posy: -sizeofy/1.5, respond: false },
        5: { thing: cubegrey, posx: sizeofx/1.5, posy: -sizeofy/1.5, respond: false },
        6: { thing: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/0.9, respond: false },
        7: { thing: cubegrey, posx: 0, posy: -sizeofy/0.9, respond: false },
        8: { thing: cube, posx: sizeofx/1.5, posy: -sizeofy/0.9, respond: false },
        9: { thing: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        10: { thing: cube, posx: 0, posy: -sizeofy/0.1, respond: false },
        11: { thing: cubegrey, posx: sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        12: { thing: cube, posx: -sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        13: { thing: cubegrey, posx: 0, posy: -sizeofy/0.1, respond: false },
        14: { thing: cubegrey, posx: sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        15: { thing: cubegrey, posx: -sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
        16: { thing: cube, posx: 0, posy: -sizeofy/0.1, respond: false },
        17: { thing: cubegrey, posx: sizeofx/1.5, posy: -sizeofy/0.1, respond: false },
      },

      placesOfX : {
        0 : {posx: -sizeofx/1.5},
        1 : {posx: 0},
        2 : {posx:  sizeofx/1.5},
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
    
    for (let i = 0; i < 18; i++) {
      this.pan[i].x.setValue(this.state.goods[i].posx - cubeSize);
      this.pan[i].y.setValue(this.state.goods[i].posy);
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

  changeLocation = (index) => {

    let pointOfMove = 0;
    let iterationCounterX = 0;
    let iterationCounterY = 0;
    let posOfX = 0;
    let posOfy = 0;
    let moveIn = false;

    if (this.state.goods[index].respond == true) {

      moveIn = true;

      if(index == 1){
        pointOfMove = 0;
        this.state.goods[3].respond = true;
        this.state.goods[4].respond = true;
        this.state.goods[5].respond = true;
      }

      if(index == 4){
        pointOfMove = 3;
        this.state.goods[6].respond = true;
        this.state.goods[7].respond = true;
        this.state.goods[8].respond = true;
      }

      if(index == 8){
        pointOfMove = 6;
        this.state.goods[9].respond = true;
        this.state.goods[10].respond = true;
        this.state.goods[11].respond = true;
      }

      if(index == 10){
        pointOfMove = 9;
        this.state.goods[12].respond = true;
        this.state.goods[13].respond = true;
        this.state.goods[14].respond = true;
      }

      if(index == 12){
        pointOfMove = 12;
        this.state.goods[15].respond = true;
        this.state.goods[16].respond = true;
        this.state.goods[17].respond = true;
      }

    }
    
    if (moveIn == true){
    
      if(index == 1 || index == 4 || index == 8 || index == 10 || index == 12 || index == 16){

        for(let i = pointOfMove; i < 15; i++){
          
          let xCounter = i - iterationCounterX-pointOfMove;
          
          if(xCounter == 2) { 
            iterationCounterX = iterationCounterX + 3
          }
          
          posOfX = this.state.placesOfX[xCounter].posx;
          console.log(iterationCounterY + " - - - ");
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

      } else {
        this.props.navigation.navigate('lift');
      }
    }  

  }

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
    
    const buttonShow = () => {
      if (this.state.gameStart)
        return (
          <View style={styles.buttonplace}>
            <Button
              color="dodgerblue"
              title="Pradėti"
              W={150}
              H={80}
              onPress={() => {
                this.gotoActionSpace();
              }}
            />
          </View>
        );
      else return;
    };

    return (
      <ImageBackground 
      source={this.state.imageBack}
      defaultSource={this.state.imageBack}
      style={styles.image}>
        
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
            <Image source={this.state.goods[index].thing} style={styles.image}></Image>
            </TouchableOpacity>
          </Animated.View>
        ))}

      {buttonShow()}
      {/* {imageShowOpen()}     */}
      
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
});
