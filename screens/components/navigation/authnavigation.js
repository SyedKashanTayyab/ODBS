import { createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionPreset } from 'react-navigation-stack';
import * as AuthScreens from '../AuthScreens/index';

const authAppNavigator = createStackNavigator({ 
    
    LoginScreen:{
        screen:AuthScreens.emaillogin,
        navigationOptions: {
            headerShown: false,
          },
    },
    EmailSignupScreen:{
        screen:AuthScreens.emailsignup,
        navigationOptions: {
            headerShown: false,
          },
    },
    UsertypeScreen:{
        screen:AuthScreens.usertype,
        navigationOptions: {
            headerShown: false,
          },
    },
    FPScreen:{
        screen:AuthScreens.Forgetpassword,
        navigationOptions: {
            headerShown: false,
          },
    }
    
});

export default createAppContainer(authAppNavigator);