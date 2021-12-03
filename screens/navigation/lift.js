import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  View,
  Image,
  ImageBackground,
} from "react-native";
import Button from "../../components/Button";

const screen = Dimensions.get("window");
const sizeofx = screen.width / 2;
const sizeofy = screen.height / 2;

const paratute = require("../../images/paratutebag.png");
const umbrela = require("../../images/umbrela.png");
const tablet = require("../../images/tablet.png");
const card = require("../../images/card.png");
const abacus = require("../../images/abacus.png");

const goods = {
  1: {
    thing: paratute,
    width: 160,
    height: 250,
    posx: (sizeofx / 10) * 7 * -1,
    posy: sizeofy / 5,
  },
  2: {
    thing: umbrela,
    width: 300,
    height: 300,
    posx: (sizeofx / 10) * 5 * -1,
    posy: sizeofy / 5,
  },
  3: {
    thing: tablet,
    width: 150,
    height: 150,
    posx: -5,
    posy: (sizeofy / 12) * 8,
  },
  0: { thing: card, width: 65, height: 35, posx: -50, posy: 20 },
  4: { thing: abacus, width: 150, height: 150, posx: -50, posy: -40 },
};
class Lift extends Component {
  constructor(props) {
    super(props);

    this.dataDrag = [0, 1, 2, 3, 4];

    this.pan = this.dataDrag.map(() => new Animated.ValueXY());

    this.state = {
      imageBackSplash: require("../../images/splashimage.png"),
      imageBack: require("../../images/liftfull.png"),
      doors: require("../../images/liftfull.png"),
      showDorsStart: true,
      showDorsEnd: false,
      allGoodArePicked: false,

      goodsArePickedUp: {
        0: { pickup: false },
        1: { pickup: false },
        2: { pickup: false },
        3: { pickup: false },
        4: { pickup: false },
      },
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
    this.givePlaces();
    this.openLiftDoors();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  givePlaces = () => {
    for (let i = 0; i < 5; i++) {
      this.pan[i].x.setValue(goods[i].posx);
      this.pan[i].y.setValue(goods[i].posy);
    }

    console.log('lift is on');
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
        Animated.spring(this.pan[index], {
          toValue: {
            y: sizeofy + 100,
            x: 0,
          },
          duration: 700,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          this.pan[index].flattenOffset();
          this.pan[index].x.setValue(0),
            this.pan[index].y.setValue(sizeofy + 100);
        }, 750);

        this.state.goodsArePickedUp[index].pickup = true;
        this.checkOrAllGoodsArePicked();
      },
    });
  }

  checkOrAllGoodsArePicked = () => {
    
    let counter = 0;

    for (let i = 0; i < 5; i++) {
      if (this.state.goodsArePickedUp[i].pickup == true) {
        counter++;
      }
    }
    
    if (counter == 5) {
      this.setState({ allGoodArePicked: true });
    }

    counter = 0;

    this.forceUpdate();
  };

  clearGoodsData = () => {
    
    for (let i = 0; i < 5; i++) {
      this.state.goodsArePickedUp[i].pickup = false;
    }

    this.setState({allGoodArePicked: false});
  }

  closeLiftDoors = () => {
    
    setTimeout(() => {
      this.setState({ showDorsEnd: true });
    }, 600);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift34.png") });
    }, 1000);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift12.png") });
    }, 1600);
    setTimeout(() => {
      this.setState({ doors: require("../../images/lift14.png") });
    }, 2200);
    setTimeout(() => {
      this.setState({ doors: require("../../images/liftfull.png") });
    }, 2700);
    setTimeout(() => {
      this.setState({ imageBack: require("../../images/liftfull.png") });
    }, 2800);
    setTimeout(() => {
      this.props.navigation.navigate('actionSpace');
      this.setState({ showDorsStart: true });
      this.setState({ showDorsEnd: false });
      this.clearGoodsData();
      this.givePlaces();
    }, 3200);
  };

  openLiftDoors = () => {
    
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
      this.setState({ showDorsStart: false });
    }, 2800);
  };

  gotoActionSpace = () => {
    this.closeLiftDoors();
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

    const imageShowClose = () => {
      if (this.state.showDorsEnd == true)
        return (
          <Image
            source={this.state.doors}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        );
      else return;
    };

    const buttonShowFake = (number) => {
      return (
        <Button
          color="grey"
          title={number}
          W={40}
          H={40}
          onPress={() => {
          }}
        />
      );
    };

    const showStuffs = () => {
      //if (this.state.showDorsStart == false)
      return (
        <View>
          {this.dataDrag.map((d, index) => (
            <Animated.View
              key={index}
              {...this.getPanResponder(index).panHandlers}
              style={[
                styles.draggableContainer,
                { width: goods[index].width, height: goods[index].height },
                this.pan[index].getTranslateTransform(),
              ]}
            >
              <Image source={goods[index].thing} style={styles.image}></Image>
            </Animated.View>
          ))}
        </View>
      );
    };

    const buttonShow = () => {
      if (this.state.allGoodArePicked)
        return (
          <View style={styles.buttonplace}>
            
            <Button
              color="green"
              title="5"
              W={40}
              H={40}
              onPress={() => {
                this.gotoActionSpace();
              }}
            />
            {buttonShowFake(4)}
            {buttonShowFake(3)}
            {buttonShowFake(2)}
            {buttonShowFake(1)}
          </View>
        );
      else return;
    };

    const basketZone = () => {
      if (this.state.showDorsStart == false)
      return (
        <View 
        style={ styles.basket}>
          {basketZoneItem(0,card)}
          {basketZoneItem(1,paratute)}
          {basketZoneItem(2,umbrela)}
          {basketZoneItem(3,tablet)}
          {basketZoneItem(4,abacus)}
        </View>
      );
    };

    const basketZoneItem = (item, good) => {
      
      if (this.state.goodsArePickedUp[item].pickup == true){
        return (
          <Image
          source={good}
          style={styles.imagebasket}
          resizeMode="cover"
          ></Image>
        );
      } else return;
    };

    return (
      <ImageBackground
        source={this.state.imageBack}
        defaultSource={this.state.imageBack}
        style={styles.image}
        resizeMode="stretch"
      >
        {showStuffs()}
        {imageShowOpen()}
        {basketZone()}
        {buttonShow()}
        {imageShowClose()}
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
  imagebasket: {
    height: screen.height / 16,
    width: screen.height / 16,
    //left: 10,
    //top: 10,
    marginBottom: 10,
  },
  draggableContainer: {
    position: "absolute",
    top: screen.height / 2,
    left: screen.width / 2,
  },
  buttonplace: {
    position: "absolute",
    top: screen.height / 3,
    right: 20,
  },
  textInLetter: {
    textAlign: "center",
    color: "#333",
    fontSize: 24,
  },
  basket: {
    position: 'absolute',
    left: 10,
    top: screen.height / 5,
    height: screen.height/2.5,
    width: 65,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lift;
