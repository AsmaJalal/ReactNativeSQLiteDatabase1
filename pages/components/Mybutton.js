// Practice SQLite Database in React Native Asma Jalal

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2986CC',
    color: '#ffffff',
    padding: 10,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    borderColor: '#F4BC13',
        borderWidth: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    
  },
});

export default Mybutton;
