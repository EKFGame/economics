import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebBrowser from "../components/WebBrowser";
import Task from "./Task";

const DataTasks = {
  0: {
    question1:
      "Iš kiek punktų susideda Verslo Ekonomikos studijų programos profesinės veiklos galimybės?",
    answer1: "13",
    question2: "Studijų programos kodas?",
    answer2: "6531JX008",
    uri: "https://www.viko.lt/studijos/studiju-programos/verslo-ekonomika",
  },
  1: {
    question1:
      "Iš kiek punktų susideda Buhalterinės Apskaitos studijų programos profesinės veiklos galimybės?",
    answer1: "15",
    question2: "Studijų programos kodas?",
    answer2: "6531LX038",
    uri: "https://www.viko.lt/studijos/studiju-programos/buhalterine-apskaita",
  },
  2: {
    question1:
      "Iš kiek punktų susideda Investicijų ir Draudimo studijų programos profesinės veiklos galimybės?",
    answer1: "19",
    question2: "Studijų programos kodas?",
    answer2: "6531LX040",
    uri: "https://www.viko.lt/studijos/studiju-programos/investicijos-ir-draudimas",
  },
  3: {
    question1:
      "Iš kiek punktų susideda Bankininkystės studijų programos profesinės veiklos galimybės?",
    answer1: "13",
    question2: "Studijų programos kodas?",
    answer2: "6531LX037",
    uri: "https://www.viko.lt/studijos/studiju-programos/bankininkyste",
  },
  4: {
    question1:
      "Iš kiek punktų susideda Finansų studijų programos profesinės veiklos galimybės?",
    answer1: "13",
    question2: "Studijų programos kodas?",
    answer2: "6531LX039",
    uri: "https://www.viko.lt/studijos/studiju-programos/finansai/#ns2019",
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
    return (
      <View style={{ flex: 1, top: 30 }}>
        <StatusBar style="auto" />
        <View style={{ flex: 2 }}>
          <WebBrowser outsideuri={DataTasks[1].uri} />
        </View>
        <View style={{ flex: 1 }}>
          <Task DataToShow={DataTasks[1]} />
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
