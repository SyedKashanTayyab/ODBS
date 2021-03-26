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

const Log = ({ navigation }) => {

  const passwordInputRef = createRef();
  const [errortext, setErrortext] = useState('');
  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={['#4D47B7', '#423D9B', '#393587']}
      style={styles.linearGradient}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.uppercontainer}>
          <TouchableOpacity
            style={styles.registerbuttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("EmailSignupScreen")}>
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowercontainer}>

          <ScrollView style={{ zIndex: 1 }} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
              <Text style={styles.headingtext}>Login</Text>
              <Text style={styles.belowheadingtext}>Enter your credentials...</Text>
              <View style={[styles.inputcontainer, { marginTop: '7%' }]}>
                <Text style={styles.innertext}>Email</Text>
                <TextInput
                  style={styles.inputStyle}
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
                <Text style={styles.innertext}>Password</Text>
                <TextInput
                  style={styles.inputStyle}
                  ref={passwordInputRef}
                  placeholder="Enter Password" //dummy@abc.com
                  placeholderTextColor="#6C63FF"
                  autoCapitalize="none"
                  keyboardType='ascii-capable'
                  returnKeyType="next"
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                <Text style={styles.buttonTextStyle}>Login</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
          <View style={{ bottom: 0, position: 'absolute',width:'100%',alignItems:'center'}}>
            <Image
              source={require('../../../asessts/images/logindesignpic.png')}
              style={{ resizeMode: 'contain'}}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D47B7',
  },
  linearGradient: {
    flex: 1
  },
  uppercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  lowercontainer: {
    flex: 9,
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  headingtext: {
    fontSize: 32,
    color: '#6C63FF',
    marginLeft: '10%',
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: font.fonts.RalewayBold
  },
  belowheadingtext: {
    fontSize: 15,
    marginLeft: '10%',
    fontFamily: font.fonts.RalewayLight
  },
  inputcontainer: {
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#F3F2FF',
    borderRadius: 80,
    alignContent: 'center',
    paddingLeft: 15
  },
  innertext: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    fontFamily: font.fonts.RalewayLight,
    marginLeft: 4
  },
  inputStyle: {
    width: '80%',
    color: '#6C63FF',
    fontSize: 16,
    fontFamily: font.fonts.RalewayMedium
  },
  buttonStyle: {
    backgroundColor: '#6C63FF',
    borderWidth: 0,
    color: '#000',
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
  registerbuttonStyle: {
    height: 35,
    width: 120,
    marginRight: '7%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
