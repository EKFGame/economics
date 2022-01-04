import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Dimensions, Alert ,StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native";

const imageBack = require("../images/space.jpg");

const screen = Dimensions.get("window");

const Letters = [
    ['Q','S','U','O','S','V','S','W','Z','G','S','Z','U','F','L'],
    ['C','P','X','A','Z','G','U','Q','I','B','N','B','N','G','P'],
    ['I','P','E','L','N','A','S','R','D','X','C','S','I','D','A'],
    ['W','C','F','S','F','N','H','F','F','P','Y','O','P','D','A'],
    ['Q','E','S','O','D','U','A','N','Ą','S','C','M','F','E','B'],
    ['J','E','C','V','J','E','R','N','M','N','J','A','Y','B','M'],
    ['S','S','I','E','J','Q','D','U','U','D','X','J','Y','E','K'],
    ['B','A','L','A','N','S','A','S','P','U','O','A','S','T','P'],
    ['K','T','M','A','T','I','A','K','S','Ą','S','P','Q','A','V'],
    ['A','I','I','Z','R','E','E','J','C','F','K','H','X','S','N'],
    ['H','D','W','P','M','O','K','E','S','Č','I','A','I','N','C'],
    ['S','U','F','B','U','A','K','I','Y','B','W','W','B','L','C'],
    ['O','A','X','E','M','T','Z','W','G','H','T','H','Y','C','X'],
    ['B','Y','B','U','H','A','L','T','E','R','I','S','E','P','C'],
    ['N','M','I','A','U','S','A','N','Z','O','L','Z','M','U','F'],
];

class Accounting extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      
        allOfWord: false,
        
        stateOfFounds : [
            [false, false, false, false, false, false, false, false, false, false ],
        ],

        stateOfButton : [
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ],

    };

  }

  changeState = (line, item) => {
    
    if (this.state.stateOfButton[line][item] == 'white'){
        this.state.stateOfButton[line][item] = 'orange';
    } else { this.state.stateOfButton[line][item] = 'white'; }

    
    this.CheckWordsWithTrue();
    
    this.CheckState();
    setTimeout(() => {
        this.forceUpdate();
    }, 50);
    
  }


  CheckWordsWithTrue = () => {
    
    if(this.state.stateOfButton[6][1] == 'orange' && this.state.stateOfButton[7][1] == 'orange' && this.state.stateOfButton[8][1] == 'orange'  && this.state.stateOfButton[9][1] == 'orange'  && this.state.stateOfButton[10][1] == 'orange'  && this.state.stateOfButton[11][1] == 'orange'  && this.state.stateOfButton[12][1] == 'orange' ) {
        this.state.stateOfFounds[0] = true;
        this.state.stateOfButton[6][1] = 'green';
     // this.state.stateOfButton[7][1] = 'green';
        this.state.stateOfButton[8][1] = 'green';
        this.state.stateOfButton[9][1] = 'green';
        this.state.stateOfButton[10][1] = 'green';
        this.state.stateOfButton[11][1] = 'green';
        this.state.stateOfButton[12][1] = 'green';

        if (this.state.stateOfFounds[8] == true){ this.state.stateOfButton[7][1] = 'green'; }
    }

    if(this.state.stateOfButton[13][2] == 'orange' && this.state.stateOfButton[13][3] == 'orange' && this.state.stateOfButton[13][4] == 'orange' && this.state.stateOfButton[13][5] == 'orange'  && this.state.stateOfButton[13][6] == 'orange'  && this.state.stateOfButton[13][7] == 'orange'  && this.state.stateOfButton[13][8] == 'orange'  && this.state.stateOfButton[13][9] == 'orange'  && this.state.stateOfButton[13][10] == 'orange'  && this.state.stateOfButton[13][11] == 'orange' ) {
        this.state.stateOfFounds[1] = true;
        this.state.stateOfButton[13][2] = 'green';
        this.state.stateOfButton[13][3] = 'green';
        this.state.stateOfButton[13][4] = 'green';
        this.state.stateOfButton[13][5] = 'green';
        this.state.stateOfButton[13][6] = 'green';
        this.state.stateOfButton[13][7] = 'green';
        this.state.stateOfButton[13][8] = 'green';
        this.state.stateOfButton[13][9] = 'green';
        this.state.stateOfButton[13][10] = 'green';
        this.state.stateOfButton[13][11] = 'green';
    }

    if(this.state.stateOfButton[10][4] == 'orange' && this.state.stateOfButton[10][5] == 'orange' && this.state.stateOfButton[10][6] == 'orange'  && this.state.stateOfButton[10][7] == 'orange'  && this.state.stateOfButton[10][8] == 'orange'  && this.state.stateOfButton[10][9] == 'orange'  && this.state.stateOfButton[10][10] == 'orange' && this.state.stateOfButton[10][11] == 'orange' && this.state.stateOfButton[10][12] == 'orange' ) {
        this.state.stateOfFounds[2] = true;
        this.state.stateOfButton[10][4] = 'green';
        this.state.stateOfButton[10][5] = 'green'; 
        this.state.stateOfButton[10][6] = 'green'; 
        this.state.stateOfButton[10][7] = 'green'; 
        this.state.stateOfButton[10][8] = 'green'; 
        this.state.stateOfButton[10][9] = 'green';
        this.state.stateOfButton[10][10] = 'green';
        this.state.stateOfButton[10][11] = 'green';
        this.state.stateOfButton[10][12] = 'green';
    }

    if(this.state.stateOfButton[2][1] == 'orange' && this.state.stateOfButton[2][2] == 'orange' && this.state.stateOfButton[2][3] == 'orange'  && this.state.stateOfButton[2][4] == 'orange'  && this.state.stateOfButton[2][5] == 'orange'  && this.state.stateOfButton[2][6] == 'orange'){
        this.state.stateOfFounds[3] = true;
        this.state.stateOfButton[2][1] = 'green';
        this.state.stateOfButton[2][2] = 'green';
        this.state.stateOfButton[2][3] = 'green';
        this.state.stateOfButton[2][4] = 'green';
        this.state.stateOfButton[2][5] = 'green';
        this.state.stateOfButton[2][6] = 'green';
    }

    if(this.state.stateOfButton[4][2] == 'orange' && this.state.stateOfButton[4][3] == 'orange' && this.state.stateOfButton[4][4] == 'orange' && this.state.stateOfButton[4][5] == 'orange'  && this.state.stateOfButton[4][6] == 'orange'  && this.state.stateOfButton[4][7] == 'orange'  && this.state.stateOfButton[4][8] == 'orange'  && this.state.stateOfButton[4][9] == 'orange' ) {
        this.state.stateOfFounds[4] = true;
        this.state.stateOfButton[4][2] = 'green';
        this.state.stateOfButton[4][3] = 'green';
        this.state.stateOfButton[4][4] = 'green';
        this.state.stateOfButton[4][5] = 'green';
        this.state.stateOfButton[4][6] = 'green';
        this.state.stateOfButton[4][7] = 'green';
        this.state.stateOfButton[4][8] = 'green';
        this.state.stateOfButton[4][9] = 'green';
    }

    if(this.state.stateOfButton[3][13] == 'orange' && this.state.stateOfButton[4][13] == 'orange' && this.state.stateOfButton[5][13] == 'orange'  && this.state.stateOfButton[6][13] == 'orange'  && this.state.stateOfButton[7][13] == 'orange'  && this.state.stateOfButton[8][13] == 'orange'  && this.state.stateOfButton[9][13] == 'orange' ) {
        this.state.stateOfFounds[5] = true;
        this.state.stateOfButton[3][13] = 'green';
        this.state.stateOfButton[4][13] = 'green';
        this.state.stateOfButton[5][13] = 'green';
        this.state.stateOfButton[6][13] = 'green';
        this.state.stateOfButton[7][13] = 'green';
        this.state.stateOfButton[8][13] = 'green';
        this.state.stateOfButton[9][13] = 'green';
    }

    if(this.state.stateOfButton[8][3] == 'orange' && this.state.stateOfButton[8][4] == 'orange' && this.state.stateOfButton[8][5] == 'orange'  && this.state.stateOfButton[8][6] == 'orange'  && this.state.stateOfButton[8][7] == 'orange'  && this.state.stateOfButton[8][8] == 'orange'  && this.state.stateOfButton[8][9] == 'orange'  && this.state.stateOfButton[8][10] == 'orange' ) {
        this.state.stateOfFounds[6] = true;
        this.state.stateOfButton[8][3] = 'green';
        this.state.stateOfButton[8][4] = 'green';
        this.state.stateOfButton[8][5] = 'green';
        this.state.stateOfButton[8][6] = 'green';
        this.state.stateOfButton[8][7] = 'green';
        this.state.stateOfButton[8][8] = 'green';
        this.state.stateOfButton[8][9] = 'green';
        this.state.stateOfButton[8][10] = 'green';
    }

    if(this.state.stateOfButton[2][11] == 'orange' && this.state.stateOfButton[3][11] == 'orange' && this.state.stateOfButton[4][11] == 'orange' && this.state.stateOfButton[5][11] == 'orange'  && this.state.stateOfButton[6][11] == 'orange'  && this.state.stateOfButton[7][11] == 'orange'  && this.state.stateOfButton[8][11] == 'orange' ) {
        this.state.stateOfFounds[7] = true;
        this.state.stateOfButton[2][11] = 'green';
        this.state.stateOfButton[3][11] = 'green';
        this.state.stateOfButton[4][11] = 'green';
        this.state.stateOfButton[5][11] = 'green';
        this.state.stateOfButton[6][11] = 'green';
        this.state.stateOfButton[7][11] = 'green';
        this.state.stateOfButton[8][11] = 'green';
    }

    if(this.state.stateOfButton[7][0] == 'orange' && this.state.stateOfButton[7][1] == 'orange' && this.state.stateOfButton[7][2] == 'orange'  && this.state.stateOfButton[7][3] == 'orange'  && this.state.stateOfButton[7][4] == 'orange'  && this.state.stateOfButton[7][5] == 'orange'  && this.state.stateOfButton[7][6] == 'orange' && this.state.stateOfButton[7][7] == 'orange') {
        this.state.stateOfFounds[8] = true;
        this.state.stateOfButton[7][0] = 'green';
    //  this.state.stateOfButton[7][1] = 'green';
        this.state.stateOfButton[7][2] = 'green';
        this.state.stateOfButton[7][3] = 'green';
        this.state.stateOfButton[7][4] = 'green';
        this.state.stateOfButton[7][5] = 'green';
        this.state.stateOfButton[7][6] = 'green';
        this.state.stateOfButton[7][7] = 'green';

        if (this.state.stateOfFounds[0] == true) { this.state.stateOfButton[7][1] = 'green'; }
    }
   
  }

    goToSpace = () => {
      this.props.navigation.navigate('actionSpaceTwo');
    }

    CheckState = () => {
        
        let counter = 0;

        for (let i = 0; i < 10; i++) {
        if (this.state.stateOfFounds[i] == true) {
            counter++;
        }
        }

        if (counter == 4) { //9
        
            Alert.alert(
                "DEMO - 4/9 Atsakymai teisingi!",
                "", [{ text: "Gerai", onPress:() => this.goToSpace()}],
                { cancelable: false }
            );

        }

        counter = 0;

    }

  render() {

    const ButtonWithLetter = (line, item) => {

        let finded = false;

        if (this.state.stateOfButton[line][item] == 'green') {
            finded = true;
        }

        return (
            <TouchableOpacity
            style={styles.button}
            disabled={finded}
            onPress={() => this.changeState(line, item)}
            >
            <View style={[styles.buttonBackground, {backgroundColor: this.state.stateOfButton[line][item] }]}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Letters[line][item]}</Text>
            </View>
            </TouchableOpacity>  
        );
        
    };
    

    const wordToFind = (word, state) => {

        let lineOAns = 'none';

        if (this.state.stateOfFounds[state] == true) {
            lineOAns = 'line-through';
        }

        return (
            <Text style={[styles.wordToFindText, {textDecorationLine: lineOAns}]} > {word} </Text>
        );
        
    };

    return (
      <ImageBackground
        source={imageBack}
        style={styles.image}
      >
        <View style={{flex: 1.75}}>
        <Text style={styles.headerOfLetter}> Buhalterinės apskaitos kryžiažodyje yra paslėpti 9 žodžiai, suraskite ir pažymėkite juos.  </Text>
        </View>
        
        <View style={styles.wordsToFindArea}>
            
            <View style={{flex: 1, justifyContent: 'center'}}>
                {wordToFind('AUDITAS', 0)}
                {wordToFind('BUHALTERIS', 1)}
                {wordToFind('MOKESČIAI', 2)}
            </View>
            
            <View style={{flex: 1, justifyContent: 'center'}}>
                {wordToFind('PELNAS', 3)}
                {wordToFind('SĄNAUDOS', 4)}
                {wordToFind('DEBETAS', 5)}
            </View>
            
            <View style={{flex: 1, justifyContent: 'center'}}>
                {wordToFind('SĄSKAITA', 6)}
                {wordToFind('PAJAMOS', 7)}
                {wordToFind('BALANSAS', 8)}
            </View>
        </View>
        
        <View style={ [styles.gameArea, {flex: 4.5, }]}>
            
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(0,0)}{ButtonWithLetter(0,1)}{ButtonWithLetter(0,2)}{ButtonWithLetter(0,3)}{ButtonWithLetter(0,4)}
            {ButtonWithLetter(0,5)}{ButtonWithLetter(0,6)}{ButtonWithLetter(0,7)}{ButtonWithLetter(0,8)}{ButtonWithLetter(0,9)}
            {ButtonWithLetter(0,10)}{ButtonWithLetter(0,11)}{ButtonWithLetter(0,12)}{ButtonWithLetter(0,13)}{ButtonWithLetter(0,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(1,0)}{ButtonWithLetter(1,1)}{ButtonWithLetter(1,2)}{ButtonWithLetter(1,3)}{ButtonWithLetter(1,4)}
            {ButtonWithLetter(1,5)}{ButtonWithLetter(1,6)}{ButtonWithLetter(1,7)}{ButtonWithLetter(1,8)}{ButtonWithLetter(1,9)}
            {ButtonWithLetter(1,10)}{ButtonWithLetter(1,11)}{ButtonWithLetter(1,12)}{ButtonWithLetter(1,13)}{ButtonWithLetter(1,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(2,0)}{ButtonWithLetter(2,1)}{ButtonWithLetter(2,2)}{ButtonWithLetter(2,3)}{ButtonWithLetter(2,4)}
            {ButtonWithLetter(2,5)}{ButtonWithLetter(2,6)}{ButtonWithLetter(2,7)}{ButtonWithLetter(2,8)}{ButtonWithLetter(2,9)}
            {ButtonWithLetter(2,10)}{ButtonWithLetter(2,11)}{ButtonWithLetter(2,12)}{ButtonWithLetter(2,13)}{ButtonWithLetter(2,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(3,0)}{ButtonWithLetter(3,1)}{ButtonWithLetter(3,2)}{ButtonWithLetter(3,3)}{ButtonWithLetter(3,4)}
            {ButtonWithLetter(3,5)}{ButtonWithLetter(3,6)}{ButtonWithLetter(3,7)}{ButtonWithLetter(3,8)}{ButtonWithLetter(3,9)}
            {ButtonWithLetter(3,10)}{ButtonWithLetter(3,11)}{ButtonWithLetter(3,12)}{ButtonWithLetter(3,13)}{ButtonWithLetter(3,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(4,0)}{ButtonWithLetter(4,1)}{ButtonWithLetter(4,2)}{ButtonWithLetter(4,3)}{ButtonWithLetter(4,4)}
            {ButtonWithLetter(4,5)}{ButtonWithLetter(4,6)}{ButtonWithLetter(4,7)}{ButtonWithLetter(4,8)}{ButtonWithLetter(4,9)}
            {ButtonWithLetter(4,10)}{ButtonWithLetter(4,11)}{ButtonWithLetter(4,12)}{ButtonWithLetter(4,13)}{ButtonWithLetter(4,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(5,0)}{ButtonWithLetter(5,1)}{ButtonWithLetter(5,2)}{ButtonWithLetter(5,3)}{ButtonWithLetter(5,4)}
            {ButtonWithLetter(5,5)}{ButtonWithLetter(5,6)}{ButtonWithLetter(5,7)}{ButtonWithLetter(5,8)}{ButtonWithLetter(5,9)}
            {ButtonWithLetter(5,10)}{ButtonWithLetter(5,11)}{ButtonWithLetter(5,12)}{ButtonWithLetter(5,13)}{ButtonWithLetter(5,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(6,0)}{ButtonWithLetter(6,1)}{ButtonWithLetter(6,2)}{ButtonWithLetter(6,3)}{ButtonWithLetter(6,4)}
            {ButtonWithLetter(6,5)}{ButtonWithLetter(6,6)}{ButtonWithLetter(6,7)}{ButtonWithLetter(6,8)}{ButtonWithLetter(6,9)}
            {ButtonWithLetter(6,10)}{ButtonWithLetter(6,11)}{ButtonWithLetter(6,12)}{ButtonWithLetter(6,13)}{ButtonWithLetter(6,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(7,0)}{ButtonWithLetter(7,1)}{ButtonWithLetter(7,2)}{ButtonWithLetter(7,3)}{ButtonWithLetter(7,4)}
            {ButtonWithLetter(7,5)}{ButtonWithLetter(7,6)}{ButtonWithLetter(7,7)}{ButtonWithLetter(7,8)}{ButtonWithLetter(7,9)}
            {ButtonWithLetter(7,10)}{ButtonWithLetter(7,11)}{ButtonWithLetter(7,12)}{ButtonWithLetter(7,13)}{ButtonWithLetter(7,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(8,0)}{ButtonWithLetter(8,1)}{ButtonWithLetter(8,2)}{ButtonWithLetter(8,3)}{ButtonWithLetter(8,4)}
            {ButtonWithLetter(8,5)}{ButtonWithLetter(8,6)}{ButtonWithLetter(8,7)}{ButtonWithLetter(8,8)}{ButtonWithLetter(8,9)}
            {ButtonWithLetter(8,10)}{ButtonWithLetter(8,11)}{ButtonWithLetter(8,12)}{ButtonWithLetter(8,13)}{ButtonWithLetter(8,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(9,0)}{ButtonWithLetter(9,1)}{ButtonWithLetter(9,2)}{ButtonWithLetter(9,3)}{ButtonWithLetter(9,4)}
            {ButtonWithLetter(9,5)}{ButtonWithLetter(9,6)}{ButtonWithLetter(9,7)}{ButtonWithLetter(9,8)}{ButtonWithLetter(9,9)}
            {ButtonWithLetter(9,10)}{ButtonWithLetter(9,11)}{ButtonWithLetter(9,12)}{ButtonWithLetter(9,13)}{ButtonWithLetter(9,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(10,0)}{ButtonWithLetter(10,1)}{ButtonWithLetter(10,2)}{ButtonWithLetter(10,3)}{ButtonWithLetter(10,4)}
            {ButtonWithLetter(10,5)}{ButtonWithLetter(10,6)}{ButtonWithLetter(10,7)}{ButtonWithLetter(10,8)}{ButtonWithLetter(10,9)}
            {ButtonWithLetter(10,10)}{ButtonWithLetter(10,11)}{ButtonWithLetter(10,12)}{ButtonWithLetter(10,13)}{ButtonWithLetter(10,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(11,0)}{ButtonWithLetter(11,1)}{ButtonWithLetter(11,2)}{ButtonWithLetter(11,3)}{ButtonWithLetter(11,4)}
            {ButtonWithLetter(11,5)}{ButtonWithLetter(11,6)}{ButtonWithLetter(11,7)}{ButtonWithLetter(11,8)}{ButtonWithLetter(11,9)}
            {ButtonWithLetter(11,10)}{ButtonWithLetter(11,11)}{ButtonWithLetter(11,12)}{ButtonWithLetter(11,13)}{ButtonWithLetter(11,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(12,0)}{ButtonWithLetter(12,1)}{ButtonWithLetter(12,2)}{ButtonWithLetter(12,3)}{ButtonWithLetter(12,4)}
            {ButtonWithLetter(12,5)}{ButtonWithLetter(12,6)}{ButtonWithLetter(12,7)}{ButtonWithLetter(12,8)}{ButtonWithLetter(12,9)}
            {ButtonWithLetter(12,10)}{ButtonWithLetter(12,11)}{ButtonWithLetter(12,12)}{ButtonWithLetter(12,13)}{ButtonWithLetter(12,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(13,0)}{ButtonWithLetter(13,1)}{ButtonWithLetter(13,2)}{ButtonWithLetter(13,3)}{ButtonWithLetter(13,4)}
            {ButtonWithLetter(13,5)}{ButtonWithLetter(13,6)}{ButtonWithLetter(13,7)}{ButtonWithLetter(13,8)}{ButtonWithLetter(13,9)}
            {ButtonWithLetter(13,10)}{ButtonWithLetter(13,11)}{ButtonWithLetter(13,12)}{ButtonWithLetter(13,13)}{ButtonWithLetter(13,14)}
            </View>
            <View style={{flexDirection: 'row'}}>
            {ButtonWithLetter(14,0)}{ButtonWithLetter(14,1)}{ButtonWithLetter(14,2)}{ButtonWithLetter(14,3)}{ButtonWithLetter(14,4)}
            {ButtonWithLetter(14,5)}{ButtonWithLetter(14,6)}{ButtonWithLetter(14,7)}{ButtonWithLetter(14,8)}{ButtonWithLetter(14,9)}
            {ButtonWithLetter(14,10)}{ButtonWithLetter(14,11)}{ButtonWithLetter(14,12)}{ButtonWithLetter(14,13)}{ButtonWithLetter(14,14)}
            </View>
        
        </View>
        
        <View style={{flex: 0.5}}>

        </View>

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
    resizeMode: "cover",
  },
  headerOfLetter: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 25,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wordToFindText: {
    margin: 3,
    fontSize: screen.width / 29,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
  buttonBackground: {
    width: screen.width / 15.5,
    height: screen.width /15.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  gameArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,48,90,0.9)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wordsToFindArea: {
    flex: 1.25,
    flexDirection: 'row',
    backgroundColor: 'rgba(1,48,90,0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },    
});

export default Accounting;