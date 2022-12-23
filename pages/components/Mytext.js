// Practice SQLite Database in React Native Asma Jalal

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Mytext = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#F4BC13',
    fontSize: 20,
    marginTop: 16,
    marginLeft: 60,
    marginRight: 60,
  },
});

export default Mytext;
