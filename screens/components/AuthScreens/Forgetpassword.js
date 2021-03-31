import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const FP = ({ navigation }) => {

  const passwordInputRef = createRef();
  const [wrong, setwrong] = useState(false);
  const [correct, setcorrect] = useState(false);
  const [emailvalue, setemailvalue] = useState("");

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
      setemailvalue(userEmail);
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
          <Text style={styles.definetext}>Recover Your Password</Text>
          <Text style={styles.preferencetext}>Enter your recovery email...</Text>
        </LinearGradient>
      </View>
      <View style={styles.lowercontainer}>
        <View style={[styles.inputcontainer, { marginTop: '7%' }]}>
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
            onChangeText={(Text) => validate(Text)}
          />
          <View style={{ marginLeft: 2, justifyContent: 'center' }} activeOpacity={0.8}>
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
        <LinearGradient
          style={styles.buttonStyle}
          colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => navigation.navigate("CFPScreen")}>

            <Text style={styles.buttonTextStyle}>Send Recovery Code</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
      <View style={styles.belowlowercontainer}>
        <Image
          source={require('../../../asessts/images/belowpicture.png')}
          style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}
        />
      </View>
    </LinearGradient>
  );
};
export default FP;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D47B7',
  },
  linearGradient: {
    height: '100%',
    width: '100%'
  },
  uppercontainer: {
    height: '28%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  lowercontainer: {
    height: '59%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  belowlowercontainer: {
    height: '13%',
    width: '100%',
    backgroundColor: '#fff'
  },
  inputcontainer: {
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#F3F2FF',
    borderRadius: 80,
    alignContent: 'center',
    paddingLeft: 2,
    justifyContent: 'center',
    flexDirection: 'row'
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
    marginLeft: '18%',
    marginRight: '18%',
    marginTop: 30,
    justifyContent: 'center',
    height: 60
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: font.fonts.RalewaySemiBold,
  },
  definetext: {
    fontFamily: font.fonts.RalewayBold,
    fontSize: 24,
    color: 'white',
    marginLeft: '8%'
  },
  preferencetext: {
    color: 'white',
    fontSize: 15,
    fontFamily: font.fonts.RalewaySemiBold,
    marginLeft: '8%'
  },
  textview: {
    marginTop: '10%',
    backgroundColor: 'white',
    width: '95%',
    height: '20%',
    alignSelf: 'center',
    marginLeft: '8%',
  },
  notetext: {
    fontFamily: font.fonts.RalewayBold,
    fontSize: 18,
    color: '#6c63ff'
  },
  notetext2: {
    color: '#3D3D3D',
    fontSize: 15,
    fontFamily: font.fonts.RalewayMedium
  }
});
