import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({title, onPress, disabled, color, W, H}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.buttonBackground} width={W} height={H} backgroundColor= {color} >
        <Text style={styles.buttonText} >{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 22,
    lineHeight: 22,
    color: "white",
  },
  buttonBackground: {
    width: 100,
    height: 40,
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Button;