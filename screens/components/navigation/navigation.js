import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as AuthScreens from '../AuthScreens/index';

import TopTabNavigation from './TopTabNavigation';
import drawernavigation from './drawernavigation'

const RootNavigator = createSwitchNavigator({
  SplashScreen: AuthScreens.Splash,
  SignupLoginOption: TopTabNavigation,
  LoginScreen: AuthScreens.emaillogin,
  EmailSignupScreen: AuthScreens.emailsignup,
  FPScreen: AuthScreens.Forgetpassword,
  CFPScreen: AuthScreens.CheckForgotPass,

  HomeScr: drawernavigation
});

const MainNavigator = createAppContainer(RootNavigator);

export default MainNavigator;
