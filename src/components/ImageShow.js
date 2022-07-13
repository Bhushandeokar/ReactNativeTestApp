import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ImageShow(props) {
  return (
    <View>
      <Image
        resizeMode="cover"
        style={{overflow: 'visible'}}
        source={props.Image}
      />
    </View>
  );
}
