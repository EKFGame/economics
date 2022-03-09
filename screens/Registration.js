import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert } from "react-native";
import Button from "../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //v9

let emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
const imageBack = require("../images/registrationcover.jpg");


class Registration extends Component {
  constructor(props) {
    super(props);
    this.dbRef = firebase.firestore().collection('leaders'),
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      firstNameEr: "",
      lastNameErr: "",
      emailErr: "",
      emailError: false,
      firstNameError: false,
      lastNameError: false,
      dateStart: '',
      dateEnd: '',
      timeSpend: '',  
    };

    this.getDatesOfSpendInGame();
  }

  firstNameErrorChange = (text) => {
    this.setState({firstNameError: text});
  };
  
  lastNameErrorChange = (text) => {
    this.setState({lastNameError: text});
  };

  emailErrorChange = (text) => {
    this.setState({emailError: text});
  };

  dateStartChange(date) {
    this.setState({ dateStart: date });
  }

  dateEndChange(date) {
    this.setState({ dateEnd: date });
  }

  timeSpendChange(date) {
    this.setState({ timeSpend: date });
  }

  emailChange(email) {
    if (email.length <= 0 || !emailRegex.test(this.state.email)) {
      this.setState({email});
      this.emailErrorChange('El. paštas negalimas');
    } else {
      this.setState({email});
      this.emailErrorChange(false);
    }
  }

  firstNameChange(firstName) {
    if (firstName.length < 3) {
      this.setState({firstName});
      this.firstNameErrorChange('Vardas turi būti netrupesnis nei 3 simboliai!');
    } else {
      this.setState({firstName});
      this.firstNameErrorChange(false);
    }
  }

  lastNameChange(lastName) {
    if (lastName.length < 2) {
      this.setState({lastName});
      this.lastNameErrorChange('Pavardė turi būti netrupesnė nei 2 simboliai!');
    } else {
      this.setState({lastName});
      this.lastNameErrorChange(false);
    }
  }

  getDatesOfSpendInGame = async () => {
    try {
      const dateStart = await AsyncStorage.getItem("datestart");
      const dateEnd = await AsyncStorage.getItem("dateend");
      if (dateStart != null && dateEnd != null) {
        this.dateStartChange(dateStart);
        this.dateEndChange(dateEnd);
      }
    } catch (err) {
      console.log(err);
    }
  };

  clearData = () => {
    this.setState({firstName: ""});
    this.setState({lastName: ""});
    this.setState({email: ""});
  };

  getTimeSpendInGame = () => {
    
    var hin = '00';
    var min = '00';
    var sin = '00';

    var onlySeconds = Number(this.substractDates());
    var h = Math.floor(onlySeconds / 3600);
    var m = Math.floor(onlySeconds % 3600 / 60);
    var s = Math.floor(onlySeconds % 3600 % 60);
    
    if (h < 10 ) {hin = '0' + h} else {hin = h};
    if (m < 10 ) {min = '0' + m} else {min = m}
    if (s < 10 ) {sin = '0' + s} else {sin = s}
    return hin + '' + min + '' + sin; 
  }

  substractDates = () => {
    var secondBetweenTwoDate = Math.abs((this.state.dateEnd - this.state.dateStart) / 1000);
    var FullSeconds = secondBetweenTwoDate.toString().split('.');
    var onlySeconds = FullSeconds[0];
    return onlySeconds;
  }

  goToStart = () => {
    this.clearData();
    this.props.navigation.navigate('finished');      
  }

  goToLeaders = () => {
    this.clearData();
    this.props.navigation.navigate('leadersboard');
  }

  registrerNewGamer = () => {
    
    if (
      this.state.firstNameError !== false ||
      this.state.emailError !== false ||
      this.state.lastNameError !== false ||
      this.state.firstName.length < 1 ||
      this.state.lastName.length < 1 ||
      this.state.email.length < 1 
    ) {
      
      Alert.alert(
        "Laukai užpildyti netinkamai.",
        "Registracijos duomenys neteisingai užpildyti. Užpildykite laukus tinkamai.", [{ text: "Bandyti dar kartą"}],
        { cancelable: false }
      );

    } else {
      this.addToDb();
      Alert.alert(
        "Registracija sėkminga!",
        "", [{ text: "Gerai", onPress:() => this.goToLeaders()}],
        { cancelable: false }
      );
    }
  };
  
  addToDb = () => {
    
    const timeDurationOfGame = this.getTimeSpendInGame();
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const ToDay = date + '-' + month + '-' + year;
    const uuid = uuidv4();

    this.dbRef
      .doc(uuid)
      .set({
        id: uuid,
        userfirstname: this.state.firstName,
        userlastname: this.state.lastName,
        useremail: this.state.email,
        timeduration: timeDurationOfGame,
        today: ToDay,
      })
      .catch((err) => {
        console.error("Error found: ", err);
      });

  }


  render() {
    return (
      <ImageBackground
        source={imageBack}
        style={styles.image}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.wellcome}>
            <Text style={styles.wellcomeText}>
              Sveikiname įveikus šį žaidimą! 
            </Text>
            <Text style={styles.wellcomeText}> Jūs galite užsiregistruoti</Text>
          </View>
          <View style={styles.register}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Vardas</Text>
                <TextInput style={styles.input}
                    value={this.state.firstName}
                    placeholder="Jonas"
                    onChangeText={(text) => this.firstNameChange(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Pavardė</Text>
                <TextInput style={styles.input}
                title="Pavardė:"
                value={this.state.lastName}
                placeholder="Jonaitis"
                onChangeText={(text) => this.lastNameChange(text)}
                />
            </View>
            


            <View style={styles.inputContainer}>
                <Text style={styles.title}>El. Paštas</Text>
                <TextInput style={styles.input}
                title="El. paštas:"
                value={this.state.email}
                placeholder="jonas.jonaitis@example.lt"
                onChangeText={(text) => this.emailChange(text)}
                />
            </View>

            <View>
              <View>
              <Button
                color="rgba(1,48,90,0.8)"
                title="Registruotis"
                W={160}
                H={60}
                onPress={() => {
                  this.registrerNewGamer();
                }}
              />
              <Text>   </Text>
              </View>
              
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              
              <Button
                color="rgba(1,48,90,0.8)"
                title="Lyderiai"
                W={160}
                H={60}
                onPress={() => {
                  this.goToLeaders();
                }}
              />  
              <Button
                color="rgba(1,48,90,0.8)"
                title="Pabaiga"
                W={160}
                H={60}
                onPress={() => {
                  this.goToStart();
                }}
              />
              </View>
            </View>
            
          </View>
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
  wellcome: {
    paddingTop: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    flex: 2,
  },
  wellcomeText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'column',
    height: 80,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default Registration;