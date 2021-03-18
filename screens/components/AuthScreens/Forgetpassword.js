import React, { useState, useEffect, createRef } from 'react';
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


const fp = ({ navigation }) => {


  const [errortext, setErrortext] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.uppercontainer}>
        <Image  style={{height:'150%',width:'100%'}} source={require('../../../asessts/images/background.png')} />
      </View>
      <View style={styles.lowercontainer}>

        <Text style={{ color: 'black', fontSize: 28, marginTop: 35, marginLeft: '10%', fontWeight: 'bold' }}>Forgot Password</Text>

        <View style={styles.inputcontainer}>
          <Image
            source={require('../../../asessts/images/email.png')}
            style={{ resizeMode: 'contain' }} />
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

        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>
            {errortext}
          </Text>
        ) : null}
        <View style={{width:'80%',marginTop: 25,alignSelf:'center',alignItems:'flex-end'}}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('CFPScreen')}>
          <Text style={styles.buttonTextStyle}>Send</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};

export default fp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  uppercontainer: {
    height: '45%',
    width: '100%',
    backgroundColor: '#fff',
  },
  lowercontainer: {
    height: '55%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
  },
  inputcontainer: {
    height: 40,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb'
  },
  inputStyle: {
    height: 40,
    width: '80%',
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
    width:'50%'
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
