import React, { Component } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Animated, PanResponder, ImageBackground, Image, Touchable } from "react-native";
import Button from "../../components/Button";

const screen = Dimensions.get("window");

class ActionDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageBack: require("../../images/vilniuscity.jpg"),
    };
    
  }

  goToCityPlace = () => {
    this.props.navigation.navigate('cityPlace');
  }

  render() {
    
    const goToCityShow = () => {
        return (

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
        );
    }
      
    

    return (
      <ImageBackground 
      source={this.state.imageBack}
      defaultSource={this.state.imageBack}
      style={styles.image}
      resizeMode="stretch">
      
        {goToCityShow()}    
      
      </ImageBackground>
    );
  }
}

export default ActionDemo;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'stretch',
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
});
