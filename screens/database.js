import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert } from "react-native";
import 'react-native-get-random-values';
import { firebaseConfig } from "../DBconfig";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //v9

if (firebase.apps.length === 0) {
  //console.log("Connected with Firebase");
  firebase.initializeApp(firebaseConfig);
}

class AnsDataBase extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allDataToUse: [],
      };
      
    }
    


    getAllDataFromDB = async () => {
    
        try {
      
            await firebase
            .firestore()
            .collection("tasks")
            .get()
            .then((snapshot) => {
            snapshot.docs.forEach((ansd) => {
                let currentID = ansd.id;
                let appObj = { ...ansd.data(), ["id"]: currentID };
                this.state.allDataToUse.push(appObj);
            });
            });
        }
        catch (error) {
            console.log(error);
        }
        
    }

    returnAllData = () => {
      return this.state.allDataToUse;
    }

}

const datadb = new AnsDataBase();
export default datadb;