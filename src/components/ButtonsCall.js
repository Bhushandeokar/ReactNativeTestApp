import {View, StyleSheet} from 'react-native';
import React from 'react';
import ImageShow from './ImageShow';
import TextShow from './TextShow';

export default function ButtonsCall(props) {
  return (
    <View style={styles.ButtonConStyle}>
      <View style={{marginVertical: 8}}>
        <ImageShow Image={props.Image} />
      </View>
      <TextShow text={props.Name} fontSize={12} fontWeight={'700'} />
    </View>
  );
}
const styles = StyleSheet.create({
  ButtonConStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});
