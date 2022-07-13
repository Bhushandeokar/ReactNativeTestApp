import {View, Text} from 'react-native';
import React from 'react';

export default function TextShow(props) {
  return (
    <View>
      <Text
        style={{
          textAlign: props.textAlign ? props.textAlign : 'center',
          fontFamily: props.fontFamily ? props.fontFamily : 'SF Pro Rounded',
          fontWeight: props.fontWeight ? props.fontWeight : '500',
          fontSize: props.fontSize ? props.fontSize : 14,
          color: props.color ? props.color : '#000000',
        }}>
        {props.text}
      </Text>
    </View>
  );
}
