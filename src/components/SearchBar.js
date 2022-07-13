import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import ImageShow from './ImageShow';

export default function SearchBar(props) {
  return (
    <View style={styles.SearchBarStyle}>
      <ImageShow Image={require('../utils/assest/symbol/Vector.png')} />
      <TextInput
        style={styles.TextInputStyle}
        onChangeText={() => {}}
        onBlur={() => {}}
        placeholder={props.PlaceHolder}
        placeholderTextColor={'#9B9B9B'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  SearchBarStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
    height: 40,
    backgroundColor: '#ffffff',
    padding: 10,
    position: 'absolute',
  },
  TextInputStyle: {
    width: '95%',
    height: 30,
    padding: 5,
    color: 'black',
  },
});
