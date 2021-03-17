import React, {Component} from 'react';
import {Dimensions, Image} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator} from 'react-navigation-drawer';
import * as AuthScreens from '../AuthScreens/index';
import TopTabNavigation from './TopTabNavigation';

// const Auth = createStackNavigator({
//   Login: {
//     screen: AuthScreens.login,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
//   // ForgotPassword: {
//   //   screen: AuthScreens.ForgotPassword,
//   //   navigationOptions: {
//   //     headerTitle: '',
//   //     headerStyle: {
//   //       backgroundColor: 'none',
//   //       shadowOffset: {
//   //         height: 0,
//   //         width: 0,
//   //       },
//   //       shadowOpacity: 0,
//   //       elevation: 0,
//   //     },
//   //     headerBackImage: () => <CommonComponents.HeaderBackButton />,
//   //   },
//   // }
// });
const RootNavigator = createSwitchNavigator({
  SplashScreen: AuthScreens.Splash,
  SignupLoginOption: TopTabNavigation,
  LoginScreen: AuthScreens.emaillogin,
  EmailSignupScreen:AuthScreens.emailsignup,
  FPScreen:AuthScreens.Forgetpassword
  // RegisterScreen: {
  //   screen: Register_StackNavigator,
  // },
});

const MainNavigator = createAppContainer(RootNavigator);

export default MainNavigator;
