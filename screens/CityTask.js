import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { Picker, Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';

class CityTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: "",
      answer2: "",
      answer3: "",
      answer1color: "white",
      answer2color: "white",
      answer3color: "white",  

      user: 'some',
      wordsOfTvarumas : [
        "tvirtas", "patvarus", "pastovus", "nekintamas", "turintis imunitetą", "ištvermingas", "atsparus", "ilgai trunkantis", "nepraeinantis", "kuriamas", "tveriamas",
      ],
      
      
    };
  }

  answer1Change(answer1) {
    this.setState({ answer1 });
  }

  answer2Change(answer2) {
    this.setState({ answer2 });
  }
  
  answer3Change(answer3) {
    this.setState({ answer3 });
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  changeColors = (word, color) => {

    if (word == 1 && color == 1) {
        this.setState({answer1color: 'rgba(255,51,51,0.8)'});
    }

    if (word == 2 && color == 1) {
        this.setState({answer2color: 'rgba(255,51,51,0.8)'});
    }

    if (word == 3 && color == 1) {
        this.setState({answer3color: 'rgba(255,51,51,0.8)'});
    }  

    if (word == 1 && color == 0) {
        this.setState({answer1color: 'white'});
    }
    
    if (word == 2 && color == 0) {
        this.setState({answer2color: 'white'});
    }
    
    if (word == 3 && color == 0) {
        this.setState({answer3color: 'white'});
    }

  }

  goToCityPlace = () => {
    this.props.navigation.navigate("cityPlace");
  }

  allDataIsGoodForMany = () => {
    
    Alert.alert(
        "Atsakymai teisingi!",
        "", [{ text: "Gerai", onPress:() => this.goToCityPlace()}],
        { cancelable: false }
      );
  }

  allDataIsGoodForOne = () => {
    
    Alert.alert(
        "Atsakymas teisingas!",
        "", [{ text: "Gerai", onPress:() => this.goToCityPlace()}],
        { cancelable: false }
      );
  }

  allDataIsGoodForCurrency = () => {
    Alert.alert(
        "Valiutos kursas tinkamas, jį galėsi panaudoti kitoje užduotyje!",
        "", [{ text: "Gerai", onPress:() => this.goToCityPlace()}],
        { cancelable: false }
      );
  }

  checkAnsOfTvarumas = () => {
    
    let ans1True = false;
    let ans2True = false;
    let ans3True = false;

    for (let i = 0; i < 11; i++) {
        
      if (this.state.wordsOfTvarumas[i] == this.state.answer1.toLowerCase()) {
          ans1True = true;
      }

      if (this.state.wordsOfTvarumas[i] == this.state.answer2.toLowerCase()) {
          ans2True = true;
      }

      if (this.state.wordsOfTvarumas[i] == this.state.answer3.toLowerCase()) {
          ans3True = true;
      }
    }

    if (this.state.answer1.toLowerCase() == this.state.answer2.toLowerCase()) {
      ans2True = false;
    }

    if (this.state.answer1.toLowerCase() == this.state.answer3.toLowerCase()) {
      ans3True = false;
    }
    
    if (this.state.answer2.toLowerCase() == this.state.answer3.toLowerCase()) {
      ans3True = false;
    }
    
    if(ans1True == true) { this.changeColors(1,0) } else {this.changeColors(1,1)}
    if(ans2True == true) { this.changeColors(2,0) } else {this.changeColors(2,1)}
    if(ans3True == true) { this.changeColors(3,0) } else {this.changeColors(3,1)}
    
    if ( ans1True == true && ans2True == true && ans3True == true) {
      this.allDataIsGoodForMany();
    }

  }

  checkAnsOfDebetas = () => {

    if(this.state.answer1 == "2") { this.changeColors(1,0) } else {this.changeColors(1,1)}
    if(this.state.answer2 == "3") { this.changeColors(2,0) } else {this.changeColors(2,1)}
    
    if (this.state.answer1 == "2" && this.state.answer2 == "3") {
        this.allDataIsGoodForMany();
    }
  }
  
  checkAnsOfDraudimas = () => {

    if(this.state.answer1 == "4") { this.changeColors(1,0) } else {this.changeColors(1,1)}
    
    if (this.state.answer1 == "4") {
        this.allDataIsGoodForOne();
    }
  }

  checkDecimal (num) {
	  
    
    return !!(num % 1);
  }

  checkAnsOfBankas = () => {
    
    let numbdec = 0.0;

    if (this.state.answer1.includes(',')) {
      numbdec = this.state.answer1.replace(',','.');
    } else { numbdec = this.state.answer1; }
    
    if(this.checkDecimal(numbdec)){
        if(numbdec > 4.6 && numbdec < 5.3) {
            this.changeColors(1,0)
            this.allDataIsGoodForCurrency();
            AsyncStorage.setItem('currency', numbdec);
        } else {this.changeColors(1,1)}
    } else {this.changeColors(1,1)}

  }

  checkAnsOfInvestavimas = () => {

    if(this.state.answer1 == "5") { this.changeColors(1,0) } else {this.changeColors(1,1)}
    
    if (this.state.answer1 == "5") {
        this.allDataIsGoodForOne();
    }
  }

  render() {

    

    const debetas = () => {
        
        if (this.props.DataToShow == 3)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View>
                <Text style={styles.questionText}> Sužinokite kas yra Debetas ir pasirinkite teisingus atsakymus. </Text>
                </View>                    
                
                <View>
                
                <Text> Debeto suma apibūdina: </Text>
                <View style={[styles.pickerView, {backgroundColor: this.state.answer1color }]}>
                <Picker
                    selectedValue={this.state.answer1}
                    mode= {'dropdown'}
                    style={styles.pickerText}
                    onValueChange={(itemValue) => this.answer1Change(itemValue)}
                >
                    <Picker.Item label="" value="0" />
                    <Picker.Item label="Kiek pinigų buvo išleista iš kliento sąskaitos" value="1" />
                    <Picker.Item label="Kiek pinigų buvo įskaityta į kliento sąskaitą" value="2" />
                    <Picker.Item label="Kiek pinigų buvo pavogta iš kliento sąskaitos" value="3" />
                    <Picker.Item label="Kiek pinigų buvo inešta į kliento sąskaitą" value="4" />
                </Picker>
                </View>
                
                <Text> Ką apskaito debetas: </Text>
                <View style={[styles.pickerView, {backgroundColor: this.state.answer2color }]}>
                <Picker
                    selectedValue={this.state.answer2}
                    mode= {'dropdown'}
                    style={styles.pickerText}
                    onValueChange={(itemValue) => this.answer2Change(itemValue)}
                >
                    <Picker.Item label="" value="0" />
                    <Picker.Item label="Kurioje apskaitomi skolininkų uždarbiai" value="1" />
                    <Picker.Item label="Kurioje apskaitomi skolininkų automobiliai" value="2" />
                    <Picker.Item label="Kurioje apskaitomi skolininkų įsipareigojimai" value="3" />
                    <Picker.Item label="Kurioje apskaitomi skolininkų grynieji pinigai" value="4" />
                </Picker>
                </View>
                
                
                </View>

                <Button
                    color="rgba(30,194,228,0.7)"
                    title="Atsakyti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfDebetas();
                    }}
                />

            </View>
          );
        else return;
    };

    const tvarumas = () => {
        if (this.props.DataToShow == 4)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View>
                <Text style={styles.questionText}> Sužinokite kokios yra Tvarumo reikšmės ir užsirašykite tris iš jų. </Text>
                </View>                    
                
                <View style={{flexDirection: 'row'}}>
                
                <TextInput
                    title="Reiškmė:"
                    value={this.state.answer1}
                    bgcolor={this.state.answer1color}
                    maxLength={18}
                    onChangeText={(text) => this.answer1Change(text)}
                />

                <TextInput
                    title="Reiškmė:"
                    value={this.state.answer2}
                    bgcolor={this.state.answer2color}
                    maxLength={18}
                    onChangeText={(text) => this.answer2Change(text)}
                />
                
                <TextInput
                    title="Reiškmė:"
                    value={this.state.answer3}
                    bgcolor={this.state.answer3color}
                    maxLength={18}
                    onChangeText={(text) => this.answer3Change(text)}
                />
                </View>

                <Button
                    color="rgba(30,194,228,0.7)"
                    title="Atsakyti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfTvarumas();
                    }}
                />

            </View>
          );
        else return;
    };

    const draudimas = () => {
        if (this.props.DataToShow == 2)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View>
                <Text style={styles.questionText}> Kiek iš viso yra draudimo rūšių? </Text>
                </View>                    
                
                <View>
                
                <TextInput
                    title="Skaičius:"
                    value={this.state.answer1}
                    bgcolor={this.state.answer1color}
                    ktype="numeric"
                    maxLength={1}
                    onChangeText={(text) => this.answer1Change(text)}
                />
                
                </View>

                <Button
                    color="rgba(30,194,228,0.7)"
                    title="Atsakyti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfDraudimas();
                    }}
                />

            </View>
          );
        else return;
    };

    const investavimas = () => {
        if (this.props.DataToShow == 1)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View>
                <Text style={styles.questionText}> Kiek yra investavimo taisyklių? </Text>
                </View>                    
                
                <View>
                
                <TextInput
                    title="Skaičius:"
                    value={this.state.answer1}
                    bgcolor={this.state.answer1color}
                    ktype="numeric"
                    maxLength={1}
                    onChangeText={(text) => this.answer1Change(text)}
                />
                
                </View>

                <Button
                    color="rgba(30,194,228,0.7)"
                    title="Atsakyti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfInvestavimas();
                    }}
                />

            </View>
          );
        else return;
    };

    const valiutoskursas = () => {
        if (this.props.DataToShow == 0)
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <View>
                <Text style={styles.questionText}> Koks yra Malaizijos Ringito kursas? </Text>
                </View>                    
                
                <View>
                
                <TextInput
                    title="Kursas:"
                    placeholder="4.7777"
                    value={this.state.answer1}
                    bgcolor={this.state.answer1color}
                    ktype="numeric"
                    maxLength={6}
                    onChangeText={(text) => this.answer1Change(text)}
                />
                
                </View>

                <Button
                    color="rgba(30,194,228,0.7)"
                    title="Atsakyti"
                    W={150}
                    H={40}
                    onPress={() => {
                        this.checkAnsOfBankas();
                    }}
                />

            </View>
          );
        else return;
    };

    return (
      <View style={styles.container}>

        {debetas()}
        {tvarumas()}
        {draudimas()}
        {investavimas()}
        {valiutoskursas()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#2c75b7",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  pickerView: {
      borderRadius: 20,
      margin: 5,
    },
  pickerText: {
    height: 45, 
    width: 350, 
    fontWeight: 'bold',
    alignSelf: 'center',
 },
});

export default CityTask;
