import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Walkthrough from './src/screens/Walkthrough';
import Library from './src/screens/Library';

export default function App() {
  const [screen, setScreen] = useState('Walkthrough');
  return (
    <SafeAreaView style={{flex: 1}}>
      {screen == 'Walkthrough' ? (
        <Walkthrough
          changeScreen={src => {
            setScreen(src);
          }}
        />
      ) : screen == 'Library' ? (
        <Library />
      ) : null}
    </SafeAreaView>
  );
}
