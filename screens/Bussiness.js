import React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';

const imageBack = require("../images/space.jpg");
const screen = Dimensions.get("window");
export default function Bussiness({ navigation: { navigate }}) {

  const [ques, setques] = useState(1);
  const [QuestionPrev, setQuestionPrev] = useState();
  const [QnAPrev, setQnAPrev] = useState();
  const [Question, setQuestion] = useState([
    { text: 'Verslininkais netampama, verslininkais gimstama?', key: '1' },
    { text: 'Verslo lyderiams svarbiausia ilgalaikės perspektyvos, o ne geri trumpalaikiai rezultatai?', key: '2' },
    { text: 'Pelnas - tai atlygis verslininkui už jo įgyvendintą idėją?', key: '3' },
    { text: 'Privati nuosavybė bet kokiomis sąlygomis yra efektyviausia turto valdymo forma?', key: '4' },
    { text: 'Verslas jo savininkui suteikia galimybę gyventi taip, kaip nori?', key: '5' },
    { text: 'Kai šešėlinis verslas plečiasi valstybės pajamos santykinai didėja?', key: '6' },
    
  ]);
  const [QnA, setQnA] = useState([
    //1
    { text: 'Taip', key: '1', question: '1', answer: 'false' },
    { text: 'Ne', key: '2', question: '1', answer: 'true' },
    //2
    { text: 'Taip', key: '3', question: '2', answer: 'true' },
    { text: 'Ne', key: '4', question: '2', answer: 'false' },
    //3
    { text: 'Taip', key: '5', question: '3', answer: 'true' },
    { text: 'Ne', key: '6', question: '3', answer: 'false' },
    //4
    { text: 'Taip', key: '7', question: '4', answer: 'false' },
    { text: 'Ne', key: '8', question: '4', answer: 'true' },
    //5
    { text: 'Taip', key: '9', question: '5', answer: 'false' },
    { text: 'Ne', key: '10', question: '5', answer: 'true' },
    //6
    { text: 'Taip', key: '11', question: '6', answer: 'false' },
    { text: 'Ne', key: '12', question: '6', answer: 'true' },


  ]);
  
  const updateStorage = () => {
    console.log('done');
    //navigate('actionSpace');
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

    
     if(temp==7){ //4
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
                horizontal={true}
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
    fontSize: screen.width / 13,
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    textAlign: 'center',
    height: screen.height / 7,
    width: screen.width / 2.2,
  },
  header: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  image: {
    height: "100%",
    width: "100%",
  },
});