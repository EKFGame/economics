import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import "react-native-gesture-handler";

const splashImg = require("../images/splashimage.png");

class SplashWin extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit();
    }
    
    handleSubmit = () => {
        setTimeout(() => {
            this.props.navigation.navigate("wellcome");
          }, 5000);
    };
    
    render(){
        return(
            <ImageBackground source={splashImg} style={styles.image} > 
                
            </ImageBackground>
        );
    }
}

export default SplashWin;

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
      },
});