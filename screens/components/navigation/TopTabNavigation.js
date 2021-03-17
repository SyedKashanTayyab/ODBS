import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
// importing Segmented Control Tab
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {  LoginPhoneEmailButton,
  RegisterPhoneEmailButton,} from '../AuthScreens';

const TopTabNavigation = (navigation) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Image style={{height:'100%',width:'100%'}}  source={require('../../../asessts/images/background.png')}/>
        </View>
        <View style={styles.footer}>
          <SegmentedControlTab
            values={['Login', 'Sign up']}
            selectedIndex={customStyleIndex}
            onTabPress={handleCustomIndexSelect}
            borderRadius={5}
            // tabsContainerStyle={{
            //   backgroundColor: '#F2F2F2',
            // }}
            tabStyle={{
              backgroundColor:'none',
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: 'transparent',
              paddingVertical:15
              // borderRadius:50
            }}
            activeTabStyle={{
              backgroundColor: '#D73D33',

            }}
            tabTextStyle={{color: '#000',fontSize:16}}
            activeTabTextStyle={{color: '#fff', fontWeight: 'bold',fontSize:16}}
          />
          {customStyleIndex === 0 && <LoginPhoneEmailButton navigationProps={navigation} />}
          {customStyleIndex === 1 && <RegisterPhoneEmailButton navigationProps={navigation}/>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexGrow: 2,
    backgroundColor: 'green'
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },

  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  footer: {
    flexGrow: 4.5,
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});