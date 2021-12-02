import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebBrowser from "../components/WebBrowser";
import Task from "./Task";

const DataTasks = {
  0: {
    question1:
      "Iš kiek žodžių  yra sudaryta Verslo Ekonomikos studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: "26",
    question2: "Koks yra šios studijų programos kodas?",
    answer2: "6531JX008",
    uri: "https://www.viko.lt/studijos/studiju-programos/verslo-ekonomika",
  },
  1: {
    question1:
      "Iš kiek žodžių  yra sudaryta Buhalterinės Apskaitos studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: "56",
    question2: "Koks yra šios studijų programos kodas?",
    answer2: "6531LX038",
    uri: "https://www.viko.lt/studijos/studiju-programos/buhalterine-apskaita",
  },
  2: {
    question1:
      "Iš kiek žodžių  yra sudaryta Investicijų ir Draudimo studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: "29",
    question2: "Koks yra šios studijų programos kodas?",
    answer2: "6531LX040",
    uri: "https://www.viko.lt/studijos/studiju-programos/investicijos-ir-draudimas",
  },
  3: {
    question1:
      "Iš kiek žodžių  yra sudaryta Bankininkystės studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: "18",
    question2: "Koks yra šios studijų programos kodas?",
    answer2: "6531LX037",
    uri: "https://www.viko.lt/studijos/studiju-programos/bankininkyste",
  },
  4: {
    question1:
      "Iš kiek žodžių  yra sudaryta Finansų studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: "61",
    question2: "Koks yra šios studijų programos kodas?",
    answer2: "6531LX039",
    uri: "https://www.viko.lt/studijos/studiju-programos/finansai",
  },
};

class TaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: "Is kazkur ateina sis klaulsimas?",
    };
  }

  Data = "jdlajslkjalskd";

  render() {
    
    const { numberToPass } = this.props.route.params;
    
    return (
      <View style={{ flex: 1, top: 30 }}>
        <StatusBar style="auto" />
        <View style={{ flex: 1.5 }}>
          <WebBrowser outsideuri={DataTasks[numberToPass].uri} />
        </View>
        <View style={{ flex: 1 }}>
          <Task DataToShow={DataTasks[numberToPass]} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskScreen;
