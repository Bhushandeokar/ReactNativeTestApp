import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Library from './Library';
import ButtonsCall from '../components/ButtonsCall';

export default function BottomNavigation() {
  return (
    <View style={styles.BottonTab}>
      <TouchableOpacity onPress={() => {}}>
        <ButtonsCall Image={require('../utils/assest/symbol/Library.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: -25}}>
        <ButtonsCall Image={require('../utils/assest/symbol/Frame64.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <ButtonsCall Image={require('../utils/assest/symbol/Settings.png')} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  BottonTab: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
