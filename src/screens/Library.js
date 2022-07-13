import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import TextShow from '../components/TextShow';
import ImageShow from '../components/ImageShow';
import SearchBar from '../components/SearchBar';
import ButtonsCall from '../components/ButtonsCall';
import {RecentData} from '../utils/Data/WalkthroughData';
import LinearGradient from 'react-native-linear-gradient';

export default function Library() {
  return (
    <LinearGradient
      colors={['#DEDDDD', 'rgba(255, 255, 255, 1)']}
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            width: '100%',
            marginBottom: 25,
          }}>
          <TextShow
            text={'Good Evening'}
            textAlign={'left'}
            fontSize={34}
            fontWeight={'bold'}
          />
          <TextShow
            text={'Welcome back'}
            fontSize={18}
            color={'#9B9B9B'}
            textAlign={'left'}
          />
          <View style={{position: 'absolute', right: 0}}>
            <ImageShow Image={require('../utils/assest/symbol/Premium.png')} />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={{marginBottom: 40}}>
          <Image
            resizeMode="cover"
            style={{width: '100%', borderRadius: 10}}
            source={require('../utils/assest/symbol/PremiumBanner.png')}
          />
        </TouchableOpacity>
        <View style={styles.SearchBarStyle}>
          <SearchBar PlaceHolder={'Search through your scans'} />
        </View>
        <View style={styles.ScanButtonView}>
          <TouchableOpacity>
            <ButtonsCall
              Image={require('../utils/assest/symbol/ScanSingle.png')}
              Name={'Single Scan'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonsCall
              Image={require('../utils/assest/symbol/ScanBatch.png')}
              Name={'Single Scan'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonsCall
              Image={require('../utils/assest/symbol/ScanOCR.png')}
              Name={'Single Scan'}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TextShow
            text={'Recent Scans'}
            fontSize={20}
            textAlign={'left'}
            fontWeight={'bold'}
          />
          <View style={{height: 200, marginTop: 20}}>
            <FlatList
              data={RecentData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity activeOpacity={0.8} style={{marginRight: 16}}>
                  <ImageShow Image={item.Image} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.FolderView}>
          <TextShow
            text={'Folders'}
            fontSize={20}
            textAlign={'left'}
            fontWeight={'700'}
          />
          <TouchableOpacity>
            <ButtonsCall
              Image={require('../utils/assest/symbol/AddFolder.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BottonTab}>
        <TouchableOpacity>
          <ButtonsCall Image={require('../utils/assest/symbol/Library.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: -25}}>
          <ButtonsCall Image={require('../utils/assest/symbol/Frame64.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonsCall Image={require('../utils/assest/symbol/Settings.png')} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  SearchBarStyle: {
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  ScanButtonView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  FolderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  BottonTab: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
});
