import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Data} from '../utils/Data/WalkthroughData';
import ScrollIndicator from '../components/ScrollIndicator';
import ImageShow from '../components/ImageShow';
import TextShow from '../components/TextShow';
export default function Walkthrough(props) {
  const [PageNum, setPageNum] = useState(0);
  let onScrollEnd = e => {
    let pageNumber = Math.min(
      Math.max(
        Math.floor(
          e.nativeEvent.contentOffset.x / Dimensions.get('window').width + 0.5,
        ) + 1,
        0,
      ),
      Data.length,
    );
    setPageNum(pageNumber - 1);
    // console.log(pageNumber);
  };

  return (
    <View style={styles.mainCon}>
      <FlatList
        data={Data}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({item}) => (
          <View>
            <View style={styles.ImageTextCon}>
              <View style={styles.ImageCon}>
                <View style={{flex: 2}}>
                  <ImageShow Image={item.walkthroghImage} />
                </View>
                <View style={{flex: 1}}>
                  <TextShow text={item.Header} fontSize={18} />
                </View>
                <View style={styles.TextDis}>
                  <TextShow text={item.discription} />
                </View>
              </View>
            </View>
            <View style={styles.IndiCatorCon}>
              <ScrollIndicator data={Data} currentPage={PageNum} />
              {PageNum == 3 ? (
                <TouchableOpacity
                  onPress={() => props.changeScreen('Library')}
                  style={{position: 'absolute', right: 0, paddingRight: 20}}>
                  <ImageShow
                    Image={require('../utils/assest/images/Next.png')}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {flex: 1, backgroundColor: '#FFFFFF'},
  ImageTextCon: {
    flex: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  ImageCon: {
    height: '80%',
    alignItems: 'center',
    width: '80%',
    bottom: 0,
    padding: 5,
    position: 'absolute',
  },
  TextDis: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    marginBottom: 5,
  },
  IndiCatorCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
