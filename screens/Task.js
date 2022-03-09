import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const screen = Dimensions.get("window");

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: "",
      answer2: "",
      answer1color: "white",
      answer2color: "white",
      answerisgood: false,
    };
    
  }

  answer1Change(answer1) {
    this.setState({ answer1 });
  }

  answer2Change(answer2) {
    this.setState({ answer2 });
  }

  goToActionSpace = () => {
    this.props.navigation.navigate("actionSpace");
  }

  checkAns = () => {
    
    if (this.state.answerisgood == false){

      if (this.props.DataToShow.answer1 != this.state.answer1) {
        this.setState({answer1color: 'rgba(255,51,51,0.8)'});
      }

      if (this.props.DataToShow.answer1 == this.state.answer1) {
        this.setState({answer1color: 'white'});
      }
    } else {

      if (this.props.DataToShow.answer2 != this.state.answer2) {
        this.setState({answer2color: 'rgba(255,51,51,0.8)'});
      }
      
      if (this.props.DataToShow.answer2 == this.state.answer2) {
        this.setState({answer2color: 'white'});
      }

    }

    if (this.state.answerisgood == false){

      if (this.props.DataToShow.answer1 == this.state.answer1){
        this.setState({answerisgood: true});
      }

    } else {

      if (this.props.DataToShow.answer2 == this.state.answer2){
      
        Alert.alert(
          "Atsakymai teisingi!",
          "", [{ text: "Gerai", onPress:() => this.goToActionSpace()}],
          { cancelable: false }
        );
        
      }
    
    }

  }

  render() {

      const firstQ = () => {
        
        if (this.state.answerisgood == false){
          return (
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.questionText}>
                {this.props.DataToShow.question1}
              </Text>
              <TextInput
                title="Skaičius:"
                value={this.state.answer1}
                ktype='numeric'
                bgcolor={this.state.answer1color}
                maxLength={2}
                onChangeText={(text) => this.answer1Change(text)}
              />
            </View>
          );
        } else return;
      };

      const secondQ = () => {
        
        if (this.state.answerisgood == true){
          return (
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.questionText}>{this.props.DataToShow.question2}</Text>
              <TextInput
                  title="Kodas:"
                  value={this.state.answer2}
                  bgcolor={this.state.answer2color}
                  maxLength={9}
                  onChangeText={(text) => this.answer2Change(text)}
              />
            </View>
          );
        } else return;
      };
      

    return (
      <View style={styles.container}>
        {/* <Text style={styles.questionText}>
          {this.props.DataToShow.question1}
        </Text>
        <TextInput
          title="Skaičius:"
          value={this.state.answer1}
          ktype='numeric'
          bgcolor={this.state.answer1color}
          maxLength={2}
          onChangeText={(text) => this.answer1Change(text)}
        />

        <Text style={styles.questionText}>{this.props.DataToShow.question2}</Text>
        <TextInput
            title="Kodas:"
            value={this.state.answer2}
            bgcolor={this.state.answer2color}
            maxLength={9}
            onChangeText={(text) => this.answer2Change(text)}
        /> */}

        {firstQ()}
        {secondQ()}

        <Button
          color="rgba(30,194,228,0.7)"
          title="Atsakyti"
          W={150}
          H={40}
          onPress={() => {
            this.checkAns();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: screen.height/20,
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
    fontSize: screen.width/24,
    color: "white",
    textAlign: "center",
  },
});

export default Task;
