import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const Log = ({ navigation }) => {

  const passwordInputRef = createRef();
  const [show, setshow] = useState(true);
  const [wrong, setwrong] = useState(false);
  const [correct, setcorrect] = useState(false);
  const [email, setemail] = useState("");

  const displayonoff = () => {

    setshow(!show)
  }
  const validate = (text) => {
    const userEmail = text.toLowerCase();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === false) {
      setcorrect(false);
      setwrong(true);
      return false;
    } else {
      setcorrect(true);
      setwrong(false);
      setemail(userEmail);
    }
  };
  return (
    <LinearGradient
      colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
      style={styles.linearGradient}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 1 }}>
      <View style={styles.uppercontainer}>
        <LinearGradient
          colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
          style={[styles.linearGradient, { justifyContent: 'center' }]}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={styles.registerbuttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("EmailSignupScreen")}>
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.lowercontainer}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <Text style={styles.headingtext}>Login</Text>
            <Text style={styles.belowheadingtext}>Enter your credentials...</Text>
            <View style={[styles.inputcontainer, { marginTop: '7%' }]}>
              <Text style={styles.innertext}>Email</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#6C63FF"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  underlineColorAndroid="#f000"
                  onChangeText={(text) => validate(text)}
                  blurOnSubmit={false}
                  onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                />
                <View style={{ marginLeft: 2 }} activeOpacity={0.8}>
                  {wrong && (
                    <Image
                      source={require('../../../asessts/images/wrong.png')}
                    />
                  )}
                  {correct && (
                    <Image
                      source={require('../../../asessts/images/correct.png')}
                    />
                  )}
                </View>
              </View>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '4%' }]}>
              <Text style={styles.innertext}>Password</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                  secureTextEntry={show}
                />
                <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => displayonoff()}>

                  <Image
                    source={show ? require('../../../asessts/images/eyeoff.png') : require('../../../asessts/images/eyeon.png')}
                    style={{ resizeMode: 'contain' }}
                  />
                </TouchableOpacity>


              </View>
            </View>
            <Text style={styles.fpstyle}
              onPress={() => navigation.navigate("FPScreen")}>Forgot Password?</Text>
            <LinearGradient
              style={styles.buttonStyle}
              colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
              start={{ x: 0.3, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <TouchableOpacity style={{ flex: 1 }}>

                <Text style={styles.buttonTextStyle}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </KeyboardAvoidingView>
          <View style={{ width: '100%', alignSelf: 'center', marginTop: 20}}>
            <Image
              source={require('../../../asessts/images/logindesignpic.png')}
              style={{ resizeMode: 'contain', alignSelf: 'center', width: '100%' }}
            />
          </View>
        </ScrollView>
      </View>
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
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#F3F2FF',
    borderRadius: 80,
    alignContent: 'center',
    paddingLeft: 25,
    justifyContent: 'center'
  },
  innertext: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    fontFamily: font.fonts.RalewaySemiBold,
    marginLeft: 4
  },
  inputStyle: {
    width: '85%',
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
    marginTop: 10,
    justifyContent: 'center',
    height: 50
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: font.fonts.RalewaySemiBold,
  },
  registerbuttonStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    width: 120,
    marginRight: '7%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fpstyle: {
    color: '#6C63FF',
    fontFamily: font.fonts.RalewayMedium,
    fontSize: 14,
    marginTop: 10,
    alignSelf: 'center'
  }
});
