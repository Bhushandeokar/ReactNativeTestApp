import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import ImageShow from './ImageShow';

export default function ScrollIndicator(props) {
  return (
    <FlatList
      data={props.data}
      style={{position: 'absolute'}}
      numColumns={props.data.length}
      renderItem={({item, index}) => (
        <View
          style={{
            marginHorizontal: 5,
            padding: 2,
            flexDirection: 'row',
          }}>
          {props.currentPage == index ? (
            <View style={{marginTop: -1}}>
              <ImageShow
                Image={require('../utils/assest/images/Ellipse251.png')}
              />
            </View>
          ) : (
            <ImageShow
              Image={require('../utils/assest/images/Ellipse252.png')}
            />
          )}
        </View>
      )}
    />
  );
}
