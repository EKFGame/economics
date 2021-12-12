import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, FlatList, Alert } from "react-native";
import Button from "../components/Button";
import { firebaseConfig } from "../config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //v9
const imageBack = require("../images/registrationcover.jpg");

class LeadersBoard extends Component {
  constructor(props) {
    super(props);
    this.dbRef = firebase.firestore().collection('leaders'),
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      leadersList: [], 
    };
  }

  goToStart = () => {
    // this.props.navigation.navigate('wellcome');
    this.getLeaders();
  }

  checksmht = () => {
    this.forceUpdate();
  }

  getLeaders = async () => {
    
        try {
      
            await firebase
            .firestore()
            .collection("leaders")
            .get()
            .then((snapshot) => {
            snapshot.docs.forEach((user) => {
                let currentID = user.id;
                let appObj = { ...user.data(), ["id"]: currentID };
                this.state.leadersList.push(appObj);
            });
            });
        }
        catch (error) {
            console.log(error);
        }
  
        this.state.leadersList.sort((a,b) => a.timeduration - b.timeduration);
  
    }

  render() {
    
    const renderUser = (itemData) => {
        
        return (
        <View style={{backgroundColor: 'dodgerblue'}}>
            <View>
            <Text>{itemData.item.timeduration}</Text>
            <Text>{itemData.item.userfirstname}</Text>
            <Text>{itemData.item.userlastname}</Text>
            <Text>{itemData.item.toDay}</Text>
            </View>
        </View>
        );
    }
    
    
    return (
      <ImageBackground
        source={imageBack}
        style={styles.image}
      >
        <View style={styles.container}>
            <View style={styles.leaderslistview} >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.title} >Žaidimo Lyderiai</Text>
                </View>
                <View style={{flex: 5, backgroundColor: 'green',}}>
                    <FlatList
                        data={this.state.leadersList}
                        keyExtractor={(item) => item.id}
                        enableEmptySections={true}
                        renderItem={renderUser}
                    />
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    color="rgba(1,48,90,0.8)"
                    title="Pradėti iš naujo"
                    W={160}
                    H={60}
                    onPress={() => {
                    this.goToStart();
                    }}
                />
                                <Button
                    color="rgba(1,48,90,0.8)"
                    title="Tikrinti"
                    W={160}
                    H={60}
                    onPress={() => {
                    this.checksmht();
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
    paddingTop: 40,
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  leaderslistview: {
    flex: 5,
    borderRadius: 20,
    width: '98%',
    
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 30,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default LeadersBoard;