import React, { createRef } from 'react';
import {StyleSheet,TextInput,View,Text,ScrollView,Image,TouchableOpacity,KeyboardAvoidingView,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../font/fonts'

const Signupemail = ({ navigation }) => {

  const lastnameref = createRef();
  const passwordInputRef = createRef();
  const confirmpasswordInputRef = createRef();
  const emailInputRef = createRef();
  return (
    <LinearGradient
      colors={['#4D47B7', '#423D9B', '#393587']}
      style={styles.linearGradient}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.uppercontainer}>
        <LinearGradient
          colors={['#4D47B7', '#423D9B', '#393587']}
          style={[styles.linearGradient, { justifyContent: 'center' }]}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ width: 40, height: 40, left: 10, justifyContent: 'center', alignItems: 'center' }}>

            <Image
              source={require('../../../asessts/images/arrow.png')}
            />
          </TouchableOpacity>

        </LinearGradient>

      </View>
      <View style={styles.lowercontainer}>
        <ScrollView style={{zIndex:1 }} keyboardShouldPersistTaps="handled">
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
        </ScrollView>
        <View style={{ bottom: 0, position: 'absolute'}}>
          <Image
            source={require('../../../asessts/images/belowpicture.png')}
            style={{ resizeMode: 'contain', marginTop: 50 }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Signupemail;

const styles = StyleSheet.create({
  uppercontainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'red',
  },
  lowercontainer: {
    height: '90%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  linearGradient: {
    height: '100%',
    width: '100%'
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
    flexDirection: 'column'
  },
  inputStyle: {
    width: '80%',
    color: '#6C63FF',
    marginLeft: 15,
    fontSize: 16,
    fontFamily: font.fonts.RalewayMedium,
    alignContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#6C63FF',
    borderWidth: 0,
    color: '#000',
    height: 50,
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
  }
});
