import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as AuthScreens from '../AuthScreens/index';


const RootNavigator = createSwitchNavigator({
  SplashScreen: AuthScreens.Splash,
  LoginScreen: AuthScreens.emaillogin,
  EmailSignupScreen: AuthScreens.emailsignup,
  UsertypeScreen:AuthScreens.usertype,
  FPScreen:AuthScreens.Forgetpassword,
  CFPScreen:AuthScreens.CheckForgotPass,
  UpdatePasswordScreen:AuthScreens.updatepassword

});

const MainNavigator = createAppContainer(RootNavigator);

export default MainNavigator;
