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
import LinearGradient from 'react-native-linear-gradient';
import font from '../../font/fonts'

const Signupemail = ({ navigation }) => {

  const lastnameref = createRef();
  const passwordInputRef = createRef();
  const confirmpasswordInputRef = createRef();
  const emailInputRef = createRef();
  return (
    // <View style={styles.container}>
   
      <LinearGradient
      colors={['#4D47B7', '#423D9B', '#393587']}
      style={styles.linearGradient}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 1 }}
    >

      <View style={styles.uppercontainer}>
        <LinearGradient
          colors={['#4D47B7', '#423D9B', '#393587']}
          style={styles.linearGradient}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
          onPress={()=>navigation.navigate("LoginScreen")}>
          <Image
            source={require('../../../asessts/images/arrow.png')}
            style={{marginLeft:20}}
            />
          </TouchableOpacity>
            
        </LinearGradient>
      </View>

      <View style={styles.lowercontainer} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <Text style={styles.headingtext}>Register</Text>
          <Text style={styles.belowheadingtext}>Enter your credentials...</Text>

          <View style={[styles.inputcontainer, { marginTop: '6%' }]}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter First Name" //dummy@abc.com
              placeholderTextColor="#6C63FF"
              autoCapitalize="none"
              keyboardType='ascii-capable'
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              onSubmitEditing={() =>
                lastnameref.current &&
                lastnameref.current.focus()
              }
            />
          </View>

          <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
            <TextInput
              style={styles.inputStyle}
              ref={lastnameref}
              placeholder="Enter Last Name" //dummy@abc.com
              placeholderTextColor="#6C63FF"
              autoCapitalize="none"
              keyboardType='ascii-capable'
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
            />
          </View>

          <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
            <TextInput
              style={styles.inputStyle}
              ref={emailInputRef}
              placeholder="Enter Email" //dummy@abc.com
              placeholderTextColor="#6C63FF"
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


          <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
            <TextInput
            ref={passwordInputRef}
              style={styles.inputStyle}
              placeholder="Enter Password" //dummy@abc.com
              placeholderTextColor="#6C63FF"
              autoCapitalize="none"
              keyboardType="ascii-capable"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              secureTextEntry={true}
              onSubmitEditing={() =>
                confirmpasswordInputRef.current &&
                confirmpasswordInputRef.current.focus()
              }
            />
          </View>

          <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
            <TextInput
              style={styles.inputStyle}
              ref={confirmpasswordInputRef}
              placeholder="Enter Confirm Password" //dummy@abc.com
              placeholderTextColor="#6C63FF"
              autoCapitalize="none"
              keyboardType='ascii-capable'
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};

export default Signupemail;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#4D47B7',
  },
  uppercontainer: {
    height: '12%',
    width: '100%',
    backgroundColor: 'red',
  },
  lowercontainer: {
    height: '88%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  headingtext: {
    fontSize: 35,
    color: '#6C63FF',
    marginLeft: '10%',
    fontWeight: 'bold',
    marginTop: '6%',
    fontFamily: font.fonts.RalewayBold
  },
  belowheadingtext: {
    fontSize: 16,
    marginLeft: '10%',
    fontFamily: font.fonts.RalewayLight
  },
  inputcontainer: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#F3F2FF',
    borderRadius: 80,
    alignContent: 'center',
    flexDirection:'column'
  },
  innertext: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30,
    marginTop: 8,
    fontFamily: font.fonts.RalewayLight
  },
  inputStyle: {
    width: '80%',
    color: '#6C63FF',
    marginLeft: 30,
    fontSize: 16,
    fontFamily: font.fonts.RalewayMedium,
    alignContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#6C63FF',
    borderWidth: 0,
    color: '#000',
    height: '9%',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: '28%',
    marginRight: '28%',
    marginTop: 20,
    justifyContent: 'center'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: font.fonts.RalewaySemiBold,

  },
  viewimage: {
    height: '30%',
    width: '100%',
    alignSelf: 'center',
    marginTop: '8%',

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  registerbuttonStyle:{
    height:50,
    width:120,
    marginRight:'7%',
    borderRadius:30,
    borderWidth:2,
    borderColor:'#fff',
    alignItems:'center'
  }
});
