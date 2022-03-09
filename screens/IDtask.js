import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  View,
  Alert,
  ImageBackground,
  Text,
} from "react-native";
import Button from "../components/Button";

const screen = Dimensions.get("window");

const answerSizeWidth = screen.width/2.2;
const answerPosX = screen.width/2-answerSizeWidth/2;

const answerPositionOne = screen.height/1.7;
const answerPositionTwo = screen.height/1.48;


class TaskID extends Component {
  constructor(props) {
    super(props);

    this.dataDrag = [0, 1, 2, 3, 4, 5, 6, 7];

    this.pan = this.dataDrag.map(() => new Animated.ValueXY());

    this.state = {
        imageBack: require("../images/space.jpg"),
        questionOne: true,
        questionTwo: false,
        questionThree: false,
        questionFour: false,

        questionText: 'Kas valdo investicinį fondą?',
        AnswerOne: '',
        AnswerTwo: '',

        leftside: false,
        rightside: false,
        
        questionArray: {
          0: {q: 'Kas valdo investicinį fondą?'},
          1: {q: 'Kokius mokesčius taiko fondas investuotojams?'},
          2: {q: 'Koks yra investicinio fondo tikslas?'},
          3: {q: 'Kokia yra investavimo rizika ilguoju laikotarpiu?'},
        },

        Answers: {
            0: {
                a: "Kompiuteris, nes fondas tiesiog seka rinkos indeksą",
                posx: answerPosX,
                posy: answerPositionOne,
                index: 'a1',
                show: true,
              },
            1: {
                a: "Žmogus – fondo valdytojas",
                posx: answerPosX,
                posy: answerPositionTwo,
                index: 'a2',
                show: true,
              },
            2: {
                a: "Didesni mokesčiai",
                posx: answerPosX,
                posy: answerPositionOne,
                index: 'b1',
                show: false,
              },
            3: {
                a: "Mažesni mokesčiai",
                posx: answerPosX,
                posy: answerPositionTwo,
                index: 'b2',
                show: false,
              },
            4: {
                a: "Sekti rinką",
                posx: answerPosX,
                posy: answerPositionOne,
                index: 'c1',
                show: false,
              },
            5: {
                a: "Pralenkti rinką",
                posx: answerPosX,
                posy: answerPositionTwo,
                index: 'c2',
                show: false,
              },
            6: {
                a: "Didesnė rizika",
                posx: answerPosX,
                posy: answerPositionOne,
                index: 'd1',
                show: false,
              },
            7: {
                a: "Mažesnė rizika",
                posx: answerPosX,
                posy: answerPositionTwo,
                index: 'd2',
                show: false,
              },
            
        },

    };

    this.givePlaces();
  }
  
    givePlaces = () => {
      
      for (let i = 0; i < 8; i++) {
        if (this.state.Answers[i].show) {
          this.pan[i].x.setValue(this.state.Answers[i].posx);
          this.pan[i].y.setValue(this.state.Answers[i].posy);
        } else {
          this.pan[i].x.setValue(-answerSizeWidth/2);
          this.pan[i].y.setValue(2000);
        }
        
      }

    };

    allGoodData = () => {
      Alert.alert(
        "Atsakymai teisingi!",
        "", [{ text: "Gerai", onPress:() => this.goToSpace()}],
        { cancelable: false }
      );
    }

    goToSpace = () => {
      this.props.navigation.navigate('actionSpaceTwo');
    }

    checkAnsChangeQ = () => {
      
      if(this.state.questionOne == true){
        if (this.state.AnswerOne == 0 && this.state.AnswerTwo == 1) {
          this.setState({questionText: this.state.questionArray[1].q});
          this.setState({questionOne: false});
          this.setState({questionTwo: true});
          this.setState({AnswerOne: ''});
          this.setState({AnswerTwo: ''});
          this.state.Answers[0].show = false;
          this.state.Answers[1].show = false;
          this.state.Answers[2].show = true;
          this.state.Answers[3].show = true;
          
        }
      }
      
      if(this.state.questionTwo == true){
        if (this.state.AnswerOne == 3 && this.state.AnswerTwo == 2) {
          this.setState({questionText: this.state.questionArray[2].q});
          this.setState({questionTwo: false});
          this.setState({questionThree: true});
          this.setState({AnswerOne: ''});
          this.setState({AnswerTwo: ''});
          this.state.Answers[2].show = false;
          this.state.Answers[3].show = false;
          this.state.Answers[4].show = true;
          this.state.Answers[5].show = true;
          
        }
      }

      if(this.state.questionThree == true){
        if (this.state.AnswerOne == 4 && this.state.AnswerTwo == 5) {
          this.setState({questionText: this.state.questionArray[3].q});
          this.setState({questionThree: false});
          this.setState({questionFour: true});
          this.setState({AnswerOne: ''});
          this.setState({AnswerTwo: ''});
          this.state.Answers[4].show = false;
          this.state.Answers[5].show = false;
          this.state.Answers[6].show = true;
          this.state.Answers[7].show = true;
          
        }
      }

      if(this.state.questionFour == true){
        if (this.state.AnswerOne == 7 && this.state.AnswerTwo == 6) {
          this.setState({AnswerOne: ''});
          this.setState({AnswerTwo: ''});
          this.state.Answers[6].show = false;
          this.state.Answers[7].show = false;
          this.allGoodData();
        }
      }

      this.setState({AnswerOne: ''});
      this.setState({AnswerTwo: ''});
      this.setState({rightside: false});
      this.setState({leftside: false});
      this.givePlaces();
    }

    checkMoves = (index) => {

      if (this.state.AnswerOne == index) { this.setState({AnswerOne: ''}); this.setState({rightside: false}); }
      if (this.state.AnswerTwo == index) { this.setState({AnswerTwo: ''}); this.setState({leftside: false}); }
    
    }

    getPanResponder(index) {
        return PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        
          

        onPanResponderGrant: () => {
          
          this.pan[index].setOffset({
          x: this.pan[index].x._value,
          y: this.pan[index].y._value,
          });
          
        },

        onPanResponderMove: (_, gesture) => {
          this.pan[index].x.setValue(gesture.dx);
          this.pan[index].y.setValue(gesture.dy);
        },

        onPanResponderRelease: (e, gesture) => {
          this.checkMoves(index);
          this.pan[index].flattenOffset();
          let spotY = screen.height/100*45.5;
          let spotXL = screen.width/100*3;
          let spotXR = screen.width/100*52;

          let stringFormatx = JSON.stringify(this.pan[index].x);
          let PanXfloatFormat = parseFloat(stringFormatx);

          let stringFormaty = JSON.stringify(this.pan[index].y);
          let PanYfloatFormat = parseFloat(stringFormaty);

          if ((screen.width/2 - answerSizeWidth/2) > PanXfloatFormat) {
            if (screen.height/2 > PanYfloatFormat && (screen.height/10)*4 < PanYfloatFormat && this.state.rightside != true) {
              this.pan[index].y.setValue(spotY);
              this.pan[index].x.setValue(spotXL);
              this.setState({AnswerOne: index});
              this.setState({rightside: true});
            } 
          } else {
            if (screen.height/2 > PanYfloatFormat && (screen.height/10)*4 < PanYfloatFormat && this.state.leftside != true) {
              this.pan[index].y.setValue(spotY);
              this.pan[index].x.setValue(spotXR);
              this.setState({AnswerTwo: index});
              this.setState({leftside: true});
            } 
          }

        },
        });
    }



    render() {

    const showAnswers = () => {
      return (
        <View style={{flex: 1}}>
          
          <View style={{flex: 1, justifyContent: 'center'}}>
            
            <View style={{flex: 1, alignItems: 'center'}}>

              <View style={{flex: 0.5 }}>
                  
              </View>                
              <View style={styles.questionArea}>
                  <Text style={styles.header} > {this.state.questionText} </Text>
              </View>
                
              <View style={{flex: 2}}>
                    
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'rgba(1,48,90,0.9)', width: '98%' }}>
                    <View style={{flex: 1}}>
                        <Text style={styles.ansPlace} > Pasyviai valdomas fondas </Text> 
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.ansPlace} > Aktyviai valdomas fondas </Text> 
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgba(1,48,90,0.9)'}}>
                    
                    <View 
                    style={styles.PickPlace}>
                        
                    </View>
                    <View 
                    
                    style={styles.PickPlace}>
                        
                    </View>
                </View>
                
                <View style={styles.emptySpace} >

                </View>

                <View style={styles.buttonZone}>
                  <Button
                      color="rgba(30,194,228,0.7)"
                      title="Tikrinti"
                      W={150}
                      H={40}
                      onPress={() => {
                        this.checkAnsChangeQ();
                      }}
                  />
                </View>

                <View style={styles.emptySpacetwo} >

                </View>
                
              </View>

            </View>
                
          </View>
          
          {this.dataDrag.map((d, index) => (
            <Animated.View
              key={index}
              {...this.getPanResponder(index).panHandlers}
              style={[
                styles.draggableContainer,
                this.pan[index].getTranslateTransform(),
              ]}
            >
          
              <Text style={styles.textOfAns}>{this.state.Answers[index].a}</Text>
              
            </Animated.View>
          ))}

        </View>
      );
    };

    return (
      <ImageBackground
        source={this.state.imageBack}
        defaultSource={this.state.imageBack}
        style={styles.image}
        resizeMode="stretch"
      >
        


        
        {showAnswers()}
        
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  emptySpace: {
    flex: 1,
    backgroundColor: 'rgba(1,48,90,0.9)',
  },
  emptySpacetwo: {
    flex: 1,
  },
  buttonZone: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(1,48,90,0.9)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  questionArea: {
    flex: 0.5,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(1,48,90,0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '98%',
  },
  buttonplace: {
    position: "absolute",
    top: screen.height / 3,
    right: 20,
  },
  textInLetter: {
    textAlign: "center",
    color: "#333",
    fontSize: 24,
  },

  header: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 27,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  ansPlace: {
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: screen.width / 28,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
  draggableContainer: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.8)",
    height: screen.height / 12,
    width: answerSizeWidth,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PickPlace: {
    backgroundColor: "rgba(73,84,160,0.8)",
    height: screen.height / 10,
    width: answerSizeWidth+5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  textOfAns: {
    textAlign: 'center',
    color: 'black',
    fontSize: screen.width / 28,
    fontWeight: 'bold',
  },
});

export default TaskID;
