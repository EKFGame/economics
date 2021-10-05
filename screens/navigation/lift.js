import React, { Component } from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from "react-native";

const screen = Dimensions.get("window");

class Lift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBack: require("../../images/liftfull.png"),
      doors: require('../../images/liftfull.png'),
      doorsAreClosed: true,
      showDors: true,  
    };
  }

  componentDidMount(){
    this.openLiftDoors();
  }
  

  openLiftDoors = () => {
    if(this.state.doorsAreClosed == true)
    {
      setTimeout(() => {
        this.setState({imageBack: require('../../images/liftas.jpg')})
        }, 600);  
        setTimeout(() => {
            this.setState({doors: require('../../images/lift14.png')})
        }, 1000);
        setTimeout(() => {
            this.setState({doors: require('../../images/lift12.png')})
        }, 1600);
        setTimeout(() => {
            this.setState({doors: require('../../images/lift34.png')})
        }, 2200);
        setTimeout(() => {
            this.setState({showDors: false})
        }, 2800);
    }
    this.setState({doorsAreClosed: false});
};

  render() {
    
    const imageShow = () => {
      if (this.state.showDors == true)
      return <Image source={this.state.doors} style={styles.image} resizeMode="cover" ></Image>
      else return
    }

    return (
      <ImageBackground
      source={this.state.imageBack}
      defaultSource={this.state.imageBack}
      style={styles.image}
      resizeMode="stretch"
      >
      {imageShow()}
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
  });

export default Lift;
