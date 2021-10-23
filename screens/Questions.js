import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';

const imageBack = require("../images/space.jpg");

export default function Questions({ navigation: { navigate }}) {

  const [ques, setques] = useState(1);
  const [QuestionPrev, setQuestionPrev] = useState();
  const [QnAPrev, setQnAPrev] = useState();
  const [Question, setQuestion] = useState([
    { text: 'Kokiame mieste yra Vilniaus Kolegija?', key: '1' },
    { text: 'Kokioje gatvėje yra Ekonomikos fakultetas?', key: '2' },
    { text: 'Kiek studijų programų yra EKF?', key: '3' },
    
  ]);
  const [QnA, setQnA] = useState([
    //1
    { text: 'Vilniuje', key: '1', question: '1', answer: 'true' },
    { text: 'Kaune', key: '2', question: '1', answer: 'false' },
    { text: 'Klaipėdoje', key: '3', question: '1', answer: 'false' },
    //2
    { text: 'Studentų g.', key: '4', question: '2', answer: 'true' },
    { text: 'Kalvarijų g.', key: '5', question: '2', answer: 'false' },
    { text: 'Gedimino pr.', key: '6', question: '2', answer: 'false' },
    //3
    { text: '3', key: '7', question: '3', answer: 'false' },
    { text: '6', key: '8', question: '3', answer: 'false' },
    { text: '5', key: '9', question: '3', answer: 'true' },


  ]);
  
  const updateStorage = () => {
    navigate('actionSpace');
  }

  const filterQuestion = (id, answer) => {
    if (answer == "true") {

      var temp=ques+1;
      setQuestionPrev(Question)
      setQuestionPrev((ques) => {
        return ques.filter(Question => Question.key == temp)
      })
      setQnAPrev(QnA)
      setQnAPrev((qna) => {
        return qna.filter(QnA => QnA.question == temp)
      })
      setques(temp)
    }
    else {
      Alert.alert(
        "Atsakymas neteisingas!",
        "", [{ text: "Bandyti dar kartą"}],
        { cancelable: false }
        );
     }

    
     if(temp==4){ //4
      setques(prev=>prev + 2)
      Alert.alert(
        "Atsakymai teisingi!",
        "", [{ text: "Gerai", onPress:() => updateStorage()}],
        { cancelable: false }
        );
      
    }
  };




  useEffect(() => {
    setQuestionPrev(Question)
    setQnAPrev(QnA)
    setQuestionPrev((Ques) => {
      return Ques.filter(Question => Question.key == 1)
    })
    setQnAPrev((qna) => {
      return qna.filter(QnA => QnA.question == 1)
    })

  }, [])

  return (
    <ImageBackground
      source={imageBack}
      defaultSource={imageBack}
      style={styles.image}>
        <View style={{flex: 1}}>
            <View>
            <FlatList
                keyExtractor={(item) => item.key}
                data={QuestionPrev}
                renderItem={({ item }) => (
                <Text style={styles.header}>{item.text}</Text>
                )}
            />
            </View>
            <View style={{flex: 1}}>
            <FlatList
                data={QnAPrev}
                renderItem={({ item }) => (
                <TouchableOpacity onPressOut={() => filterQuestion(ques, item.answer)}>
                    <Text style={styles.item}>{item.text}</Text>
                </TouchableOpacity>
                )}
            />
            </View>
        </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionBox: {
    width: 800,
    maxWidth: 400,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
  },
  item: {
    margin: 10,
    padding: 30,
    fontSize: 20,
    borderRadius: 15,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: "100%",
    width: "100%",
  },
});