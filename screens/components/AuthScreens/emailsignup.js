import React, { createRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const Signupemail = ({ navigation }) => {
  const lastnameref = createRef();
  const passwordInputRef = createRef();
  const confirmpasswordInputRef = createRef();
  const emailInputRef = createRef();
  const [showpassword, setshowpassword] = useState(true);
  const [showconfirmpassword, setshowconfirmpassword] = useState(true);

  const displayonoffpassword = () => {

    setshowpassword(!showpassword)
  }
  const displayonoffconfirmpassword = () => {

    setshowconfirmpassword(!showconfirmpassword)
  }
  return (
    <LinearGradient
      colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
      style={styles.linearGradient}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.uppercontainer}>
        <LinearGradient
          colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
          style={[styles.linearGradient, { justifyContent: 'center' }]}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ left: 20, marginTop: '5%', marginBottom: '5%', width: 70 }}>

            <Image
              source={require('../../../asessts/images/arrow.png')}
            />
          </TouchableOpacity>

        </LinearGradient>

      </View>
      <View style={styles.lowercontainer}>
        <ScrollView keyboardShouldPersistTaps="handled"   >
          <KeyboardAvoidingView enabled={true}>
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
            <View style={[styles.inputcontainer, { marginTop: '4%', flexDirection: 'row', alignItems: 'center' }]}>
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
                secureTextEntry={showpassword}
                onSubmitEditing={() =>
                  confirmpasswordInputRef.current &&
                  confirmpasswordInputRef.current.focus()
                }
              />
              <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => displayonoffpassword()}>
                <Image
                  source={showpassword ? require('../../../asessts/images/eyeoff.png') : require('../../../asessts/images/eyeon.png')}
                  style={{ resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '4%', flexDirection: 'row', alignItems: 'center' }]}>
              <TextInput
                style={styles.inputStyle}
                ref={confirmpasswordInputRef}
                placeholder="Enter Confirm Password" //dummy@abc.com
                placeholderTextColor="#6C63FF"
                autoCapitalize="none"
                keyboardType='ascii-capable'
                returnKeyType="next"
                underlineColorAndroid="#f000"
                secureTextEntry={showconfirmpassword}
                blurOnSubmit={false}
              />
              <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => displayonoffconfirmpassword()}>
                <Image
                  source={showconfirmpassword ? require('../../../asessts/images/eyeoff.png') : require('../../../asessts/images/eyeon.png')}
                  style={{ resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              style={styles.buttonStyle}
              colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
              start={{ x: 0.3, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => navigation.navigate("UsertypeScreen")}>

                <Text style={styles.buttonTextStyle}>Sign Up</Text>
              </TouchableOpacity>
            </LinearGradient>
          </KeyboardAvoidingView>
        </ScrollView>
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
  belowlowercontainer: {
    height: '10%',
    width: '100%',
    backgroundColor: '#fff'
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
    width: '85%',
    color: '#6C63FF',
    marginLeft: 8,
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
