import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as AuthScreens from '../AuthScreens/index';


const RootNavigator = createSwitchNavigator({
  SplashScreen: AuthScreens.Splash,
  LoginScreen: AuthScreens.emaillogin,
  EmailSignupScreen: AuthScreens.emailsignup,
  UsertypeScreen:AuthScreens.usertype

});

const MainNavigator = createAppContainer(RootNavigator);

export default MainNavigator;
