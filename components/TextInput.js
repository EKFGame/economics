import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const MyTextInput = ({maxLength, bgcolor, ktype, value, onChangeText, placeholder, title, secure}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secure}
      keyboardType = {ktype}
      backgroundColor = {bgcolor}
      maxLength={maxLength}
    />
  </View>
);

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    padding: 7,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'column',
    height: 80,
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 14,
    textAlign: 'left',
    color: "lightgrey",
    fontWeight: 'bold',
  },
});