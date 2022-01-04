import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

const screen = Dimensions.get("window");

const twooolira = require("../images/twooolira.jpg");
const oneoodollars = require("../images/oneoodollars.jpg");
const oneooeuro = require("../images/oneooeuros.jpg");
const oneoooringgit = require("../images/oneoooringgit.jpg");

class MoneyRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageBack: require("../images/goldroom.jpg"),
        bothAreas: true, 
        video1: false, 
        video2: false,
        currencyTask: false,
        trilionTask: false,
        endTask: false,
        trilionGoIn: false, 
        currencyGoIn: false, 
        webData: 'https://www.youtube.com/watch?v=hgIfB-bxAUg',
        videoSecondWeb: 'https://youtu.be/rSO0DNNpKb8',
        answer1color: 'white',
        answer1: '',
        answer2color: 'white',
        answer2: '',
        currencyNumber: '',
    };
  }
  
  answer1Change(answer1) {
    this.setState({ answer1 });
  }

  answer2Change(answer2) {
    this.setState({ answer2 });
    this.setState({ currencyNumber: 1000000000000 / answer2 });
  }

  updateData = (num) => {
    
    setTimeout(() => {
        if(num == 1) {this.setState({video1: true});}
        if(num == 2) {this.setState({video2: true});}
        this.forceUpdate();  
    }, 1000); 
  }
  
  goToWebFirst = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.webData});
    this.updateData(1);
    }

  goToWebSecond = () => {
    this.props.navigation.navigate('webtocheck', {dataToPass: this.state.videoSecondWeb});
    this.updateData(2);
  }

  goToTrilion = () => {
    this.setState({bothAreas: false});
    this.setState({trilionGoIn: true});
    this.forceUpdate();
  }

  goToCurrency = () => {
    this.setState({bothAreas: false});
    this.setState({currencyGoIn: true});
    this.forceUpdate();
  }

  backFromTask = () => {
    if (this.state.currencyTask == true && this.state.trilionTask == true) {
      this.setState({endTask: true});
    }
    
    this.setState({currencyGoIn: false});
    this.setState({trilionGoIn: false});
    this.setState({bothAreas: true});
    this.forceUpdate()
  }

  allDataIsGood = () => {
    Alert.alert(
        "Šis variantas tinkamas!",
        "", [{ text: "Gerai", onPress:() => this.backFromTask()}],
        { cancelable: false }
      );
  }
  

  checkAnsOfTrilijonas = () => {

    if(this.state.answer1 == "1000000000000") { this.setState({answer1color: 'white'}) } else {this.setState({answer1color: 'red'})}
    
    if (this.state.answer1 == "1000000000000") {
        this.allDataIsGood();
        this.setState({trilionTask: true});
    }
  }

  checkAnsOfCurrency = () => {

    if(this.state.currencyNumber > 188679245283 && this.state.currencyNumber < 217391304348) {
        this.setState({answer2color: 'white'});
        this.allDataIsGood();
        this.setState({currencyTask: true});

    } else {this.setState({answer2color: 'red'})}
    
  }

  endThisTask = () => {
    this.props.navigation.navigate('actionSpaceTwo');
  }

  getCurrency = async () => {
    try {
      const value = await AsyncStorage.getItem("currency");
      if (value != null) {
        this.answer2Change(value);
        //this.setState({ answer2:  });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    
    const videoArea = () => {
        if (this.state.bothAreas == true){
        return (
        <View >
            <TouchableOpacity style={styles.lirasPlace} onPress={() => { this.goToWebFirst() }}>
              <Image source={twooolira} style={[styles.image, {transform: [{rotate: '-30deg'}]}]}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.dollarsPlace} onPress={() => { this.goToWebSecond() }}>
              <Image source={oneoodollars} style={[styles.image, {transform: [{rotate: '25deg'}]}]}></Image>
            </TouchableOpacity>
        </View>
        );
        } else return;
    };

    const taskArea = () => {
      
        if (this.state.video1 == true && this.state.video2 == true && this.state.bothAreas == true){
          return (
            <View>
            <TouchableOpacity style={styles.euroPlace} onPress={() => { this.goToTrilion() }}>
              <Image source={oneooeuro} style={[styles.image, {transform: [{rotate: '30deg'}]}]}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.ringgitPlace} onPress={() => { this.goToCurrency() }}>
              <Image source={oneoooringgit} style={[styles.image, {transform: [{rotate: '15deg'}]}]}></Image>
            </TouchableOpacity>
            </View>
          );
        } else return;
    };

    const trilionArea = () => {
        if (this.state.trilionGoIn == true)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View style={styles.areaAround}>
                <View>
                    <Text style={styles.questionText}> Kaip yra užrašomas vienas trilijonas? </Text>
                </View>                    
                
                <View>
                
                <TextInput
                    title="Trilijonas:"
                    value={this.state.answer1}
                    bgcolor={this.state.answer1color}
                    ktype="numeric"
                    width={300}
                    onChangeText={(text) => this.answer1Change(text)}
                />
                
                </View>

                <Button
                    color="rgba(133,88,31,0.9)"
                    title="Pasitikrinti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfTrilijonas();
                    }}
                />
                
                </View>
            </View>
          );
        else return;
    };

    const currencyArea = () => {
        if (this.state.currencyGoIn == true)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View style={styles.areaAround}>
                <View>
                    <Text style={styles.questionText}> Kiek Eurų maždaug sudaro trilijonas Malaizijos Ringitų? </Text>
                </View>                    
                <View>
                <Text style={styles.questionText}> €: {this.state.currencyNumber}</Text>
                </View>
                <View>
                
                <TextInput
                    title="Ringito kursas:"
                    value={this.state.answer2}
                    bgcolor={this.state.answer2color}
                    ktype="numeric"
                    maxLength={6}
                    placeholder="4.7777"
                    onChangeText={(text) => this.answer2Change(text)}
                />
                
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Button
                        color="rgba(133,88,31,0.9)"
                        title="Auto įvedimas"
                        W={150}
                        H={40}
                        onPress={() => {
                            this.getCurrency();
                        }}
                    />

                    <Button
                        color="rgba(133,88,31,0.9)"
                        title="Pasitikrinti"
                        W={150}
                        H={40}
                        onPress={() => {
                            this.checkAnsOfCurrency();
                        }}
                    />

                </View>
                </View>
            </View>
          );
        else return;
    };

    const EndButton = () => {
      
        if (this.state.endTask == true){
          return (
            <View style={{padding: 50}}>
                <Button
                    color="rgba(59,79,81,0.9)"
                    title="Keliauti į kitą užduotį"
                    W={250}
                    H={60}
                    onPress={() => {
                        this.endThisTask();
                    }}
                />
            </View>
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
            {videoArea()}
            {taskArea()}
            {trilionArea()}
            {currencyArea()}
            {EndButton()}
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  dollarsPlace: {
    position: 'absolute',
    height: screen.height/ 10,
    width: screen.width/ 2.5,
    right: 20,
    top: screen.width/ 0.8,
  },
  euroPlace: {
    position: 'absolute',
    height: screen.height/ 10,
    width: screen.width/ 2.5,
    left: 20,
    top: screen.width/ 1.1,
  },
  lirasPlace: {
    position: 'absolute',
    height: screen.height/ 10,
    width: screen.width/ 2.5,
    left: 20,
    top: screen.width/ 0.7,
  },
  ringgitPlace: {
    position: 'absolute',
    height: screen.height/ 10,
    width: screen.width/ 2.5,
    right: 50,
    top: screen.width/ 1.5,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
  areaAround: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(196,147,78,0.9)',
    borderRadius: 20,
    width: '95%',
  },
});

export default MoneyRoom;
