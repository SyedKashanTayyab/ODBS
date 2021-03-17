import React, {useState, useEffect,createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


const Log = ({navigation}) => {

  const passwordInputRef = createRef();
  const [errortext, setErrortext] = useState('');
  return (
   // <View style={styles.container}>
             <ScrollView
       
       keyboardShouldPersistTaps="handled"
       contentContainerStyle={{
         flex: 1,
         justifyContent: 'center',
         alignContent: 'center',
       }}>
         
        <View style={styles.uppercontainer}>
              <Image style={styles.ImageBackground}  source={require('../../../asessts/images/background.png')}/>
        </View>
        <View style={styles.lowercontainer}>
       
       <View>
         <KeyboardAvoidingView enabled>
           
         <Text style={{color: 'black', fontSize: 28,marginTop:35,marginLeft:'10%',fontWeight:'bold'}}>Log In</Text>
           <View style={{alignItems: 'center'}}>

           </View>
           <View style={styles.inputcontainer}>
             <Image
              source={require('../../../asessts/images/email.png')}
              style={{resizeMode: 'contain'}}/>
             <TextInput
               style={styles.inputStyle}
               placeholder="Enter Email" //dummy@abc.com
               placeholderTextColor="#8b9cb5"
               autoCapitalize="none"
               keyboardType="email-address"
               returnKeyType="next"
               underlineColorAndroid="#f000"
               blurOnSubmit={false}
               onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
             />
           </View>
           <View style={styles.inputcontainer}>
           <Image
              source={require('../../../asessts/images/lock.png')}
              style={{resizeMode: 'contain'}}/>
             <TextInput
               ref={passwordInputRef}  
               style={styles.inputStyle}
               placeholder="Enter Password" //12345
               placeholderTextColor="#8b9cb5"
               keyboardType="default"
               onSubmitEditing={Keyboard.dismiss}
               blurOnSubmit={false}
               secureTextEntry={true}
               underlineColorAndroid="#f000"
               returnKeyType="next"
             />
           </View>
          
           {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>

              <Text style={{color: '#D73D33', fontSize: 14,alignSelf:'center',marginTop:5,fontWeight:'bold'}}
              onPress={() => navigation.navigate('FPScreen')}>Forgot Password?</Text>

         </KeyboardAvoidingView>
       </View>

         </View>
         </ScrollView>
  //  </View>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  uppercontainer:{
    height:'45%',
    width:'100%',
    backgroundColor: '#fff',
  },
  lowercontainer:{
    height:'55%',
    width:'100%',
    backgroundColor: '#fff',
    borderTopRightRadius:55,
    borderTopLeftRadius:55,
  },
  inputcontainer: {
    height: 40,
    width:'80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop:25,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft: 5,
    borderBottomWidth:1,
    borderBottomColor:'#bbb'
  },
  inputStyle: {
    height: 40,
    width:'80%',
    color: 'black',
    paddingLeft: 5,
  },
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  buttonStyle: {
    backgroundColor: '#D73D33',
    borderWidth: 0,
    color: '#000',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: 25
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  }
});
