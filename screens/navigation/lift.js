import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  PanResponder,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const screen = Dimensions.get("window");
const sizeofx = screen.width / 2;
const sizeofy = screen.height / 2;

const paratute = require("../../images/paratutebag.png");
const umbrela = require("../../images/umbrela.png");
const tablet = require("../../images/tablet.png");
const card = require("../../images/card.png");
const abacus = require("../../images/abacus.png");

const goods = { 1: {thing: paratute, width: 160, height: 250, posx: (sizeofx / 10) * 7 *-1, posy: sizeofy / 5}, 
                2: {thing: umbrela, width: 300, height: 300, posx: (sizeofx / 10) * 5 * -1, posy: sizeofy / 5},
                3: {thing: tablet, width: 150, height: 150, posx: -5, posy: (sizeofy /12) * 8},
                0: {thing: card, width: 65, height: 35, posx: -50, posy: 20},
                4: {thing: abacus, width: 150, height: 150, posx: -50, posy: -40},
              };
class Lift extends Component {
  constructor(props) {
    super(props);

    this.dataDrag = [0, 1, 2, 3, 4];

    this.pan = this.dataDrag.map(() => new Animated.ValueXY());

    this.state = {
      imageBack: require("../../images/liftfull.png"),
      doors: require("../../images/liftfull.png"),
      doorsAreClosed: true,
      showDors: true,

      showDraggable: true,
      dropZoneValues: null,
    };

    this.givePlaces();
  }

  componentDidMount() {
    this.openLiftDoors();
  }

  givePlaces = () => {
    // console.log('x');
    // console.log(sizeofx);
    // console.log('y');
    // console.log(sizeofy);
    for (let i = 0; i < 5; i++ ) {
      this.pan[i].x.setValue(goods[i].posx);
      this.pan[i].y.setValue(goods[i].posy);
    }
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

      onPanResponderMove: (_, gesture) => {
        this.pan[index].x.setValue(gesture.dx);
        this.pan[index].y.setValue(gesture.dy);
      },

      onPanResponderRelease: (e, gesture) => {
        this.pan[index].flattenOffset();
        this.pan[index].x.setValue(0);
        this.pan[index].y.setValue(-100);
      },
    });
  }

  SetInDropZone = (index) => {
    let stringFormat = JSON.stringify(this.pan[index].x);
    let PanXfloatFormat = parseFloat(stringFormat);

    let DropZoneXFloat = parseFloat(50);

    //let distance = DropZoneXFloat - PanXfloatFormat;
  };

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  openLiftDoors = () => {
    if (this.state.doorsAreClosed == true) {
      setTimeout(() => {
        this.setState({ imageBack: require("../../images/liftas.jpg") });
      }, 600);
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
        this.setState({ showDors: false });
      }, 2800);
    }
    this.setState({ doorsAreClosed: false });
  };

  render() {
    const imageShow = () => {
      if (this.state.showDors == true)
        return (
          <Image
            source={this.state.doors}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        );
      else return;
    };

    return (
      <ImageBackground
        source={this.state.imageBack}
        defaultSource={this.state.imageBack}
        style={styles.image}
        resizeMode="stretch"
      >
        

        {this.dataDrag.map((d, index) => (
          <Animated.View
            key={index}
            {...this.getPanResponder(index).panHandlers}
            style={[
              styles.draggableContainer,
              { width: goods[index].width, 
                height: goods[index].height},
              this.pan[index].getTranslateTransform(),
            ]}
          >
          <Image
            source={goods[index].thing}
            style={styles.image}
          ></Image>
          </Animated.View>
        ))}

      {/* {imageShow()} */}
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
  dropZone: {
    height: 70,
    backgroundColor: "#2c3e50",
    //justifyContent: 'flex-start',
  },
  draggableContainer: {
    position: "absolute",
    top: screen.height/2,
    left: screen.width/2,
    // width: sizeofx / 4 * 3,
    // height: (sizeofx / 4) * 3,
  },
  thingsSize: {
  },
  textInLetter: {
    textAlign: "center",
    color: "#333",
    fontSize: 24,
  },
});

export default Lift;
