// Practice SQLite Database in React Native Asma Jalal

import React from 'react';
import {View, TextInput} from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginLeft: 60,
        marginRight: 60,
        marginTop: 30,
        borderColor: '#F4BC13',
        borderWidth: 3,
      }}>
      <TextInput
        underlineColorAndroid="#48ff1c"
        placeholder={props.placeholder}
        placeholderTextColor="#000000"
        text
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;
