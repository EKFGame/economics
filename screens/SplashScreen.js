import React, { Component } from "react";
import { Alert, ImageBackground, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import datadb from "./database";
const splashImg = require("../images/splashimage.png");

class SplashWin extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit();
        this.uploadData();
    }
    
    uploadData = () => {
        datadb.getAllDataFromDB();
    }

    handleSubmit = () => {
        setTimeout(() => {
            
            if (datadb.getAllDataFromDB() != null){
                this.props.navigation.navigate("wellcome");
            } else {

                Alert.alert(
                    "Problemos su duomenų baze",
                    "", [{ text: "Gerai" }],
                    { cancelable: false }
                );

            }
            
          }, 7000);
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