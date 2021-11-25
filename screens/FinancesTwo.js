import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { TextInput ,StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import Button from '../components/Button';


const imageBack = require("../images/space.jpg");
const pyramidImage = require("../images/pyramidthree.jpg");

export default function FinancesTwo({ navigation: { navigate }}) {

  const [squareAns, setSquareAns] = useState(['','','','','','']);
  const [Areashow, setAreaShow] = useState(1);
  const [ques, setques] = useState(1);
  const [QuestionPrev, setQuestionPrev] = useState();
  const [QnAPrev, setQnAPrev] = useState();
  const [Question, setQuestion] = useState([
    { text: 'Kuris iš žemiau pateiktų pavyzdžių yra įmonės finansinis turtas?', key: '1' },
    { text: '2020 m. Šveicarijos vyriausybė išleido 337,9 milijono Šveicarijos frankų vertės 10 metų trukmės obligacijų, kurių metinis pelningumas yra neigiamas, –0,055 proc. Ką tai reiškia?', key: '2' },
    { text: 'Investicija yra likvidi, jei?', key: '3' },
    { text: 'Jeigu Jūs vienerių metų gimtadienio proga gavote 1 eurą dovanų ir tą pačią dieną padėjote į kaupiamąją sąskaitą su 5 % palūkanų norma. Kiek jūs turėsite savo 40 gimtadienio proga, jei per tą laikotarpį iš sąskaitos pinigų neišimsite?', key: '4' },
    
  ]);
  const [QnA, setQnA] = useState([
    //1
    { text: 'Naujo mikroprocesorių gamybos proceso patentas', key: '1', question: '1', answer: 'false' },
    { text: 'Įmonės prekės ženklas', key: '2', question: '1', answer: 'false' },
    { text: 'Bendrovės „Apple“ akcijos', key: '3', question: '1', answer: 'true' },
    { text: 'Nuomojamos gamybinės patalpos', key: '4', question: '1', answer: 'false' },
    //2
    { text: 'Investuotojai, nusipirkę šių obligacijų, kasmet praras po 0,055% savo investuotos sumos už teisę paskolinti pinigus Šveicarijos vyriausybei', key: '5', question: '2', answer: 'true' },
    { text: 'Investuotojai, nusipirkę šių obligacijų, kasmet uždirbs 0,055% nuo savo investuotos sumos', key: '6', question: '2', answer: 'false' },
    { text: 'Klausime yra klaida – obligacijų metinis pelningumas negali būti neigiamas', key: '7', question: '2', answer: 'false' },
    { text: 'Pasaulio bankas nustatė, kad Šveicarijos vyriausybė suklaidino investuotojus ir todėl turės grąžinti jiems pinigus', key: '8', question: '2', answer: 'false' },
    //3
    { text: 'Ją galima pirkti ir parduoti akcijų rinkoje', key: '7', question: '3', answer: 'false' },
    { text: 'Jos kaina kasdien smarkiai svyruoja', key: '8', question: '3', answer: 'false' },
    { text: 'Skirtumas tarp kainos perkant ir parduodant yra nedidelis', key: '9', question: '3', answer: 'false' },
    { text: 'Ją nėra sunku greitai paversti pinigais', key: '10', question: '3', answer: 'true' },
    //4
    { text: '7,04', key: '11', question: '4', answer: 'false' },
    { text: '6,70', key: '12', question: '4', answer: 'true' },
    { text: '6,34', key: '13', question: '4', answer: 'false' },
    { text: '3,01', key: '14', question: '4', answer: 'false' },


  ]);
  
  const CheckAns = () => {
    
    // let pass0 = false;
    // let pass1 = false;
    // let pass2 = false;
    // let pass3 = false;
    // let pass4 = false;
    // let pass5 = false;
    

    // if (squareAns[0] != '5'){
    //     setRedLine({...redLines, [0]: 'red'});
    //     pass0 = false;
    // } 
    // else {
    //     setRedLine({...redLines, [0]: 'white'});
    //     pass0 = true;
    // }

    // if (squareAns[1] != '3'){
    //     setRedLine({...redLines, [1]: 'red'});
    //     pass1 = false;
    // }
    // else {
    //     setRedLine({...redLines, [1]: 'white'});
    //     pass1 = true;
    // }

    // if (squareAns[2] != '4'){
    //     setRedLine({...redLines, [2]: 'red'});
    //     pass2 = false;
    // }
    // else {
    //     setRedLine({...redLines, [2]: 'white'});
    //     pass2 = true;
    // }

    // if (squareAns[3] != '2'){
    //     setRedLine({...redLines, [3]: 'red'});
    //     pass3 = false;
    // }
    // else {
    //     setRedLine({...redLines, [3]: 'white'});
    //     pass3 = true;
    // }

    // if (squareAns[4] != '6'){
    //     setRedLine({...redLines, [4]: 'red'});
    //     pass4 = false;
    // }
    // else {
    //     setRedLine({...redLines, [4]: 'white'});
    //     pass4 = true;
    // }

    // if (squareAns[5] != '1'){
    //     setRedLine({...redLines, [5]: 'red'});
    //     pass5 = false;
    // }
    // else {
    //     setRedLine({...redLines, [5]: 'white'});
    //     pass5 = true;
    // }

    if (squareAns[0] == '5' && squareAns[1] == '3' && squareAns[2] == '4' && squareAns[3] == '2' && squareAns[4] == '6' && squareAns[5] == '1') {
        console.log('praejo');
    }
    
  }
    
  
  const showPyramid = () => {
    setAreaShow(2);
  }

  const showSufler = () => {
    setAreaShow(3);
  }

  const backToPyramid = () => {
    setAreaShow(2);
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

    
     if(temp==5){ //4
      setques(prev=>prev + 2)
      Alert.alert(
        "Atsakymai teisingi!",
        "", [{ text: "Gerai", onPress:() => showPyramid()}],
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

  const QuestionArea = () => {
    if (Areashow == 1)
      return (
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
      );
    else return;
  };

  const FirstItem = (inputText, question, colorOfR) => {
    return (
        <View style={styles.containerOfData}>
        <View style={[styles.rectangle, {backgroundColor: colorOfR}]}>
            <View style={styles.textDataSpace}> 
            <Text style={styles.dataItemsText}> {question} </Text>
            </View>
            <View style={styles.textInputSpace}> 
            <TextInput
            value = {inputText}
            editable = {false}
            backgroundColor = 'white'
            fontSize = {25}
            borderRadius = {10}
            width = {25}
            textAlign = 'center'
            fontWeight = 'bold'
            color = 'black' 
            />
            </View>
        </View>
    </View>
        );
    };

    const handleUpdate = (id,ans) => {
        setSquareAns({...squareAns, [id]: ans});
    }

    const SecondItem = (inputTextItem, question) => {

        return (
            <View style={styles.containerOfData}>
                <View style={[{backgroundColor: 'rgba(28,96,88,0.9)'}, styles.rectangle]}>
                    <View style={styles.textInputSpace}> 
                    <TextInput

                    value={squareAns[inputTextItem]}
                    editable = {true}
                    backgroundColor = 'white'
                    fontSize = {25}
                    borderRadius = {10}
                    width = {25}
                    textAlign = 'center'
                    fontWeight = 'bold'
                    color = 'black'
                    maxLength={1}
                    keyboardType='numeric'
                    backgroundColor = 'white'
                    onChangeText={(text) => handleUpdate(inputTextItem,text)}
                    />
                    </View>
                    <View style={styles.textDataSpace}> 
                    <Text style={styles.dataItemsText}> {question} </Text>
                    </View>
                </View>
            </View>
        );
    };

  const ConnectionArea = () => {
    if (Areashow == 2)
      return (
        <View style={{flex: 1}}>
            
            <View style={{flex: 1.5}}>
                <Text style={styles.headerOfLetter}>Jūs gavote elektroninį laišką ir atspausdinote jį – turite popierinį dokumento (pvz. paskaitų konspektas) variantą. Kaip atrodys jūsų veiksmai su dokumentu, pagal atsakingo vartojimo piramidę? Teiginiams priskirkite skaičius nuo 1 iki 6. </Text>
            </View>

            <View style={{flex: 4.5, flexDirection: 'row'}}>
                
                <View style={{flex: 1}}>
                    {FirstItem('1', 'Atsakingas vartojimas', 'rgba(148,193,27,0.9)')}
                    {FirstItem('2', 'Atliekų kiekio mažinimas (prevencija)', 'rgba(58,170,55,0.9)')}
                    {FirstItem('3', 'Pakartotinas atliekų panaudojimas', 'rgba(0,141,53,0.9)')}
                    {FirstItem('4', 'Atliekų perdirbimas', 'rgba(25,113,185,0.9)')}
                    {FirstItem('5', 'Panaudojimas energijai gauti', 'rgba(95,97,129,0.9)')}
                    {FirstItem('6', 'Atliekų šalinimas sąvartynuose', 'rgba(72,59,76,0.9)')}
                </View>
                <View style={{flex: 1}}>
                    {SecondItem('0', 'Sudeginti dokumentą')}
                    {SecondItem('1', 'Atiduoti dokumentą kitam, kam jis reikalingas (kitam studentui)')}
                    {SecondItem('2', 'Išmesti į popieriaus (mėlyną) konteinerį')}
                    {SecondItem('3', 'Dokumentas spausdintas iš abiejų pusių, sumažintas šriftas, spausdinta tik svarbi informacija')}
                    {SecondItem('4', 'Išmesti į paprastą (bendrą) konteinerį')}
                    {SecondItem('5', 'Dokumentas nespausdinamas, o išsaugomas el. pavidalu')}
                </View>
                
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Button
                color="rgba(100,48,90,0.9)"
                title="Pagalba"
                W={150}
                H={80}
                onPress={() => {
                    showSufler();
                }}
                />
                </View>
                <View style={{flex: 1}}>
                <Button
                color="rgba(100,48,90,0.9)"
                title="Patikrinti"
                W={150}
                H={80}
                onPress={() => {
                    CheckAns();
                }}
                />
                </View>
            </View>
        </View>
      );
    else return;
  };

  const Sufler = () => {
    if (Areashow == 3)
      return (
        <View style={{flex: 1}}>
            <View style={{flex:6, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={styles.helptext}>Atsakingo vartojimo piramidė</Text>
            <Text></Text>
            <Image
            source={pyramidImage}
            defaultSource={pyramidImage}
            style={{height: '65%', width: '100%', resizeMode: 'stretch'}}>
            </Image>
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <Button
                color="rgba(1,48,90,0.8)"
                title="Grįžti"
                W={400}
                H={80}
                onPress={() => {
                    backToPyramid();
                }}
                />
            </View>
        </View>
      );
    else return;
  };

  return (
    <ImageBackground
      source={imageBack}
      defaultSource={imageBack}
      style={styles.image}>
          {QuestionArea()}
          {ConnectionArea()}
          {Sufler()}
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOfData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 25,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerOfLetter: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  helptext: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 25,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dataItemsText: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: "100%",
    width: "100%",
  },
  rectangle: {
    width: '95%',
    height: '95%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textInputSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDataSpace: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
});