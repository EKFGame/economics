import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";


class Finished extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageBack: require("../../images/finished.jpg"),
    };
  }

  render() {
    return (
        <ImageBackground
        source={this.state.imageBack}
        defaultSource={this.state.imageBack}
        style={styles.image}
        resizeMode="cover"
        >
            <View style={styles.textplace}>
                <View style={{flex: 1.2}}>

                </View>
                <View style={styles.viewarea}>
                    <Text style={styles.finishedText}> Sveikiname įveikus žaidimą! </Text>
                </View>
                <View style={{flex: 1}}>

                </View>
            </View>
            
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
    textplace: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    finishedText: {
        fontWeight: "bold",
        fontSize: 23,
        color: "white",
    },
    viewarea: {
        padding: 20,
        backgroundColor: "rgba(0,76,153,0.6)",
        borderRadius: 20,
        justifyContent: 'center',
    },

});

export default Finished;
