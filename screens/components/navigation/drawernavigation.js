//This is an example code for NavigationDrawer//

//import react in our code.
import React, { Component } from 'react';

// import all basic components
import { View, Image, TouchableOpacity } from 'react-native';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import external files
import * as MainScreen from '../HomeScreens/index'

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../../asessts/images/hamburger.png')}
            style={{ marginLeft: 25 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const homescreen_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: MainScreen.home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: ()=>
        <NavigationDrawerStructure
          navigationProps={navigation}
        />,
        safeAreaInsets: {top: 0},
        headerTitle: 'Welcome',
        headerStyle: {
          backgroundColor: '#D73D33',
            borderBottomRightRadius:50,
            borderBottomLeftRadius:50,
            height:60
          },
          shadowOpacity: 0,
          elevation: 0,
        headerTintColor: '#fff'
    }),
  },
 Movetosearch: {
    screen: MainScreen.searchfilter,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    }),
  },
});

const aboutus_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: MainScreen.abouuts,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: ()=>
        <NavigationDrawerStructure
          navigationProps={navigation}
        />,
        safeAreaInsets: {top: 0},
        headerStyle: {
          backgroundColor: '#D73D33',
          },
          shadowOpacity: 0,
          elevation: 0,
        headerTintColor: '#fff'
    }),
  },
});



const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: homescreen_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../../asessts/images/home.png')}
        />
      ),
      headerStyle: {
        backgroundColor: '#fff',
        },
    },
  },
  Screen2: {
    //Title
    screen: aboutus_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About us',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../../asessts/images/information.png')}
        />
      ),
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);