import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebBrowser from "../components/WebBrowser";
import datadb from "./database";
import Task from "./Task";

const ArrayOfData = datadb.returnAllData();

const DataTasks = {
  
  0: {
    question1:  
      "Iš kiek žodžių  yra sudaryta Verslo Ekonomikos studijų programos profesinių veiklos galimybių pastraipa?",
    answer1: '26',
    question2: "Koks yra šios studijų programos kodas?",
    answer2:  "6531JX008", //ArrayOfData[2].data,
    uri: "https://www.viko.lt/studijos/studiju-programos/verslo-ekonomika", //ArrayOfData[4].data,
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
      WebAndAnsData: {
        0: {
          question1: ArrayOfData[3].data, 
            //"Iš kiek žodžių  yra sudaryta Verslo Ekonomikos studijų programos profesinių veiklos galimybių pastraipa?",
          answer1: ArrayOfData[1].data,
          question2: "Koks yra šios studijų programos kodas?",
          answer2: ArrayOfData[2].data, // "6531JX008",
          uri: ArrayOfData[4].data, //"https://www.viko.lt/studijos/studiju-programos/verslo-ekonomika", //ArrayOfData[4].data,
        },
        1: {
          question1: ArrayOfData[7].data,
            //"Iš kiek žodžių  yra sudaryta Buhalterinės Apskaitos studijų programos profesinių veiklos galimybių pastraipa?",
          answer1: ArrayOfData[5].data, //"56",
          question2: "Koks yra šios studijų programos kodas?",
          answer2: ArrayOfData[6].data, //"6531LX038",
          uri: ArrayOfData[8].data, //"https://www.viko.lt/studijos/studiju-programos/buhalterine-apskaita",
        },
        2: {
          question1: ArrayOfData[11].data,
            //"Iš kiek žodžių  yra sudaryta Investicijų ir Draudimo studijų programos profesinių veiklos galimybių pastraipa?",
          answer1: ArrayOfData[9].data, //"29",
          question2: "Koks yra šios studijų programos kodas?",
          answer2: ArrayOfData[10].data, //"6531LX040",
          uri: ArrayOfData[12].data, //"https://www.viko.lt/studijos/studiju-programos/investicijos-ir-draudimas",
        },
        3: {
          question1: ArrayOfData[15].data,
            //"Iš kiek žodžių  yra sudaryta Bankininkystės studijų programos profesinių veiklos galimybių pastraipa?",
          answer1: ArrayOfData[13].data, //"18",
          question2: "Koks yra šios studijų programos kodas?",
          answer2: ArrayOfData[14].data, //"6531LX037",
          uri: ArrayOfData[16].data, //"https://www.viko.lt/studijos/studiju-programos/bankininkyste",
        },
        4: {
          question1: ArrayOfData[19].data,
            // "Iš kiek žodžių  yra sudaryta Finansų studijų programos profesinių veiklos galimybių pastraipa?",
          answer1: ArrayOfData[17].data, //"61",
          question2: "Koks yra šios studijų programos kodas?",
          answer2: ArrayOfData[18].data, //"6531LX039",
          uri: ArrayOfData[20].data, //"https://www.viko.lt/studijos/studiju-programos/finansai",
        },
      },
    };
  }

  render() {
    
    const { numberToPass } = this.props.route.params;
    
    return (
      <View style={{ flex: 1, top: 30 }}>
        <StatusBar style="auto" />
        <View style={{ flex: 1.5 }}>
          <WebBrowser outsideuri={this.state.WebAndAnsData[numberToPass].uri} />
        </View>
        <View style={{ flex: 1 }}>
          <Task DataToShow={this.state.WebAndAnsData[numberToPass]} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
