import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput } from "react-native";
import Button from "../components/Button";

const imageBack = require("../images/registrationcover.jpg");

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",  
    };
  }

  firstNameChange(firstName) {
    this.setState({ firstName });
  }

  lastNameChange(lastName) {
    this.setState({ lastName });
  }

  emailChange(email) {
    this.setState({ email });
  }

  handleSubmitRegister = () => {
    this.setState({firstName: ""});
    this.setState({lastName: ""});
    this.setState({email: ""});
  };

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
              Sveikiname įveikus pirmąjį lygį! 
            </Text>
            <Text style={styles.wellcomeText}>Prašome užsiregistruoti</Text>
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
            <Button
              color="rgba(1,48,90,0.8)"
              title="Registruotis"
              W={160}
              H={60}
              onPress={() => {
                this.handleSubmitRegister();
              }}
            />
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
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    flex: 3,
  },
  wellcomeText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: 'rgba(255,255,255,0.4)',
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