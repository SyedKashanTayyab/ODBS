// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useState, Component } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ScrollView
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { useEffect } from 'react/cjs/react.development';

class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
        name :"Syed Kashan Tayyab",
      items: [
        {
          navOptionName: 'Home',
          screenToNavigate: 'Home',
          uri: require('../../../asessts/images/home.png'),
        },
        {
          navOptionName: 'About us',
          screenToNavigate: 'About us',
          uri: require('../../../asessts/images/information.png'),
        },
      ],
    };
  }
  logOut() {
    console.log("Logging out")
    this.props.navigation.navigate("SignupLoginOption")
  }
  render() {


    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style={styles.sideMenuProfile}>
          <Image
            source={require('../../../asessts/images/profile.png')}
            style={styles.sideMenuProfileIcon}
          />
        </View>

        <View style={{marginBottom:10}}>
        <Text style={{fontSize:20,color:'#D73D33',fontWeight:'bold'}}>
            {this.state.name}
          </Text>
        </View>


        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.state.items.map((item, key) => (
            <View
              style={{
                alignItems: 'flex-start',
                marginTop: 15,
                width: '80%',
                alignSelf: 'center',
                
              }}
              key={key}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.uri} style={styles.sideMenuIcon} />
                <Text
                  style={{
                    fontSize: 16,

                    color:
                      global.currentScreenIndex === key ? '#D73D33' : 'black',
                  }}
                  onPress={() => {
                    global.currentScreenIndex = key;
                    this.props.navigation.navigate(item.screenToNavigate);
                  }}>
                  {item.navOptionName}
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  height: 1,
                  marginTop: 5,
                  backgroundColor: '#D73D33',
                }}
              />
            </View>
          ))}
        </View>
        <View style={{ position: 'absolute', bottom: 30 ,flexDirection:'row',alignItems:'center',alignContent:'center'}}>
        <Image
            source={require('../../../asessts/images/logout.png')}
            style={{height:20,width:22,marginRight:5,resizeMode:'contain'}}
          />
          <Text
            onPress={() => {
              this.logOut();
            }}
            style={{
              color: '#D73D33',
              fontSize: 18,
              fontWeight:'bold'
            }}>
            Log Out
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },

  sideMenuProfile: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#D73D33',
    marginTop: 30,
    marginBottom:10
  },
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  sideMenuIcon: {
    resizeMode: 'contain',
    width: 22,
    height: 22,
    marginRight: 5,
    marginLeft: 8,
  }
});

export default CustomSidebarMenu;