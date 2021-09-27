import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

class Task extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      answer1: "",
      answer2: "",
    };
  }

  answer1Change(answer1) {
    this.setState({ answer1 });
  }

  answer2Change(answer2) {
    this.setState({ answer2 });
  }

  render() {
    return <View style={styles.container}>

        <Text>{this.props.DataToShow.question1}</Text>
        <TextInput
            title="Skaičius:"
            value={this.state.answer1}
            onChangeText={(text) => this.answer1Change(text)}
        />

        <Text>{this.props.DataToShow.question2}</Text>
        <TextInput
            title="Kodas:"
            value={this.state.answer2}
            onChangeText={(text) => this.answer2Change(text)}
        />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#4eb15b",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
