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
  const [wrongfirstname, setwrongfirstname] = useState(false);
  const [correctfirstname, setcorrectfirstname] = useState(false);
  const [wronglastname, setwronglastname] = useState(false);
  const [correctlastname, setcorrectlastname] = useState(false);
  const [wrongemail, setwrongemail] = useState(false);
  const [correctemail, setcorrectemail] = useState(false);
  const [firstnamevalue, setfirstnamevalue] = useState("");
  const [secondnamevalue, setsecondnamevalue] = useState("");
  const [emailvalue, setemailvalue] = useState("");

  const displayonoffpassword = () => { setshowpassword(!showpassword) }
  const displayonoffconfirmpassword = () => { setshowconfirmpassword(!showconfirmpassword) }
  const validatefirstname = (text) => {
    const userFirstname = text.toLowerCase();
    let reg = /^[a-z ,.'-]+$/i;
    if (reg.test(userFirstname) === false) {
      setcorrectfirstname(false);
      setwrongfirstname(true);
      return false;
    } else {
      setcorrectfirstname(true);
      setwrongfirstname(false);
      setfirstnamevalue(userFirstname);
    }
  };
  const validatesecondname = (text) => {
    const userSecondname = text.toLowerCase();
    let reg = /^[a-z ,.'-]+$/i;
    if (reg.test(userSecondname) === false) {
      setcorrectlastname(false);
      setwronglastname(true);
      return false;
    } else {
      setcorrectlastname(true);
      setwronglastname(false);
      setsecondnamevalue(userSecondname);
    }
  };
  const validateemail = (text) => {
    const userEmail = text.toLowerCase();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === false) {
      setcorrectemail(false);
      setwrongemail(true);
      return false;
    } else {
      setcorrectemail(true);
      setwrongemail(false);
      setemailvalue(userEmail);
    }
  };
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
            <View style={[styles.inputcontainer, { marginTop: '9%' }]}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter First Name..." //dummy@abc.com
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
                onChangeText={(text) => validatefirstname(text)}
              />
              <View style={{ marginLeft: 2, justifyContent: 'center' }} activeOpacity={0.8}>
                {wrongfirstname && (
                  <Image
                    source={require('../../../asessts/images/wrong.png')}
                  />
                )}
                {correctfirstname && (
                  <Image
                    source={require('../../../asessts/images/correct.png')}
                  />
                )}
              </View>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
              <TextInput
                style={styles.inputStyle}
                ref={lastnameref}
                placeholder="Enter Last Name..." //dummy@abc.com
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
                onChangeText={(text) => validatesecondname(text)}
              />
              <View style={{ marginLeft: 2, justifyContent: 'center' }} activeOpacity={0.8}>
                {wronglastname && (
                  <Image
                    source={require('../../../asessts/images/wrong.png')}
                  />
                )}
                {correctlastname && (
                  <Image
                    source={require('../../../asessts/images/correct.png')}
                  />
                )}
              </View>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
              <TextInput
                style={styles.inputStyle}
                ref={emailInputRef}
                placeholder="Enter Email..." //dummy@abc.com
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
                onChangeText={(text) => validateemail(text)}
              />
              <View style={{ marginLeft: 2, justifyContent: 'center' }} activeOpacity={0.8}>
                {wrongemail && (
                  <Image
                    source={require('../../../asessts/images/wrong.png')}
                  />
                )}
                {correctemail && (
                  <Image
                    source={require('../../../asessts/images/correct.png')}
                  />
                )}
              </View>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '4%', flexDirection: 'row', alignItems: 'center' }]}>
              <TextInput
                ref={passwordInputRef}
                style={styles.inputStyle}
                placeholder="Enter Password..." //dummy@abc.com
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
                placeholder="Enter Confirm Password..." //dummy@abc.com
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
              start={{ x: 0, y: 1 }}
              end={{
                x: 0.4, y: 0
              }}>
              <TouchableOpacity style={{ borderRadius: 30, width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                onPress={() => navigation.navigate("UsertypeScreen")}>
                <Text style={styles.buttonTextStyle}>Register</Text>
              </TouchableOpacity>
            </LinearGradient>
            <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 28 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../../asessts/images/termandconditionicon.png')}
                  style={{ resizeMode: 'contain', marginTop: 2, width: 20 }} />
                <Text style={{ marginLeft: 5, fontSize: 15, fontFamily: font.fonts.RalewayMedium }}>Clicking this means you agree to our</Text>
              </View>
              <Text style={{ marginLeft: 25, fontSize: 15, fontFamily: font.fonts.RalewayMedium, color: colors.Colors.purpleLight, marginBottom: 40 }}>Terms and Conditions</Text>
            </View>
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
    flexDirection: 'row'
  },
  inputStyle: {
    width: '82%',
    color: '#6C63FF',
    marginLeft: 18,
    fontSize: 16,
    fontFamily: font.fonts.RalewayMedium,
    alignContent: 'center'
  },
  buttonStyle: {
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    width: '56%',
    marginTop: 40,
    alignSelf: 'center'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: font.fonts.RalewaySemiBold,
  }
});
