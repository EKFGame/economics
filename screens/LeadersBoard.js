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

    
    this.getData();
  }

  goToStart = () => {
    this.props.navigation.navigate('wellcome');
  }

  updateData = () => {
    
    this.setState({leadersList: []});
    
    this.getLeaders();
    setTimeout(() => {
      this.forceUpdate();  
    }, 500);
  }

  getData = () => {
    this.getLeaders();
    setTimeout(() => {
      this.forceUpdate();  
    }, 1000);
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
        
      const splitedTime = itemData.item.timeduration[0] + itemData.item.timeduration[1] + ':' + itemData.item.timeduration[2] + itemData.item.timeduration[3] + ':' + itemData.item.timeduration[4] + itemData.item.timeduration[5];
        return (
        <View style={{backgroundColor: 'rgba(1,48,90,0.7)', borderRadius: 10, margin: 5}}>
            <View>
              <Text style={styles.data} >{splitedTime} {itemData.item.userfirstname} {itemData.item.userlastname} {itemData.item.today}</Text>
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
                <View style={{flex: 5,}}>
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
                    title="Atnaujinti"
                    W={160}
                    H={60}
                    onPress={() => {
                    this.updateData();
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
  data: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    left: 10,
  },
});

export default LeadersBoard;