import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as AuthScreens from '../AuthScreens/index';
import authAppNavigator from './authnavigation'


const RootNavigator = createSwitchNavigator({
  SplashScreen: AuthScreens.Splash,
  AuthNavigatorScreen: authAppNavigator,
  CFPScreen:AuthScreens.CheckForgotPass,
  UpdatePasswordScreen:AuthScreens.updatepassword
});

const MainNavigator = createAppContainer(RootNavigator);

export default MainNavigator;
