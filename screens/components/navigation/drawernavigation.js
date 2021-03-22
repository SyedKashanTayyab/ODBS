import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import * as MainScreen from '../HomeScreens/index'
import CustomSidebarMenu from './CustomSidebarMenu'

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

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
  First: {
    screen: MainScreen.home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: () =>
        <NavigationDrawerStructure
          navigationProps={navigation}
        />,
      safeAreaInsets: { top: 0 },
      headerTitle: 'Welcome',
      headerStyle: {
        backgroundColor: '#D73D33',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        height: 60
      },
      shadowOpacity: 0,
      elevation: 0,
      headerTintColor: '#fff'
    }),
  },
  Movetosearch: {
    screen: MainScreen.searchfilter,
    navigationOptions: ({ navigation }) => ({
      safeAreaInsets: { top: 0 },
      headerTitle: 'Search',
      headerStyle: {
        backgroundColor: '#D73D33',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        height: 60
      },
      shadowOpacity: 0,
      elevation: 0,
      headerTintColor: '#fff'
    }),
  },
  Movetodisplaypdf: {
    screen: MainScreen.displaypdf,
    navigationOptions: ({ navigation }) => ({
      safeAreaInsets: { top: 0 },
      headerTitle: 'Display',
      headerStyle: {
        backgroundColor: '#D73D33',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        height: 60
      },
      shadowOpacity: 0,
      elevation: 0,
      headerTintColor: '#fff'
    }),
  },

},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  });

const aboutus_StackNavigator = createStackNavigator({
  Second: {
    screen: MainScreen.abouuts,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: () =>
        <NavigationDrawerStructure
          navigationProps={navigation}
        />,
      safeAreaInsets: { top: 0 },
      headerStyle: {
        backgroundColor: '#D73D33',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        height: 60
      },
      shadowOpacity: 0,
      elevation: 0,
      headerTintColor: '#fff'
    }),
  },
});



const DrawerNavigatorExample = createDrawerNavigator({

  Home: {
    screen: homescreen_StackNavigator,
    navigationOptions: {
      // drawerLabel: 'Home',
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
  'About us': {
    screen: aboutus_StackNavigator,
    navigationOptions: {
      // drawerLabel: 'About us',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../../asessts/images/information.png')}
        />
      ),
    },
  },
}, {
  contentComponent: CustomSidebarMenu
});

export default createAppContainer(DrawerNavigatorExample);