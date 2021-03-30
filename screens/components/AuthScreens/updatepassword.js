import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const Update = ({ navigation }) => {

  const passwordInputRef = createRef();
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
      end={{ x: 1, y: 1 }}>
      <View style={styles.uppercontainer}>
        <LinearGradient
          colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
          style={[styles.linearGradient, { justifyContent: 'center' }]}
          start={{ x: 0.3, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.definetext}>Recover Your Password</Text>
          <Text style={styles.preferencetext}>Enter new password...</Text>
        </LinearGradient>
      </View>

      <View style={styles.lowercontainer}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <View style={[styles.inputcontainer, { marginTop: '7%', alignItems: 'center', flexDirection: 'row' }]}>
              <TextInput
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
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
              />
              <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => displayonoffpassword()}>
                <Image
                  source={showpassword ? require('../../../asessts/images/eyeoff.png') : require('../../../asessts/images/eyeon.png')}
                  style={{ resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.inputcontainer, { marginTop: '5%', alignItems: 'center', flexDirection: 'row' }]}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Confirm Password" //dummy@abc.com
                placeholderTextColor="#6C63FF"
                ref={passwordInputRef}
                autoCapitalize="none"
                keyboardType='ascii-capable'
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                secureTextEntry={showconfirmpassword}
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
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
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity style={{ width:'100%',height:'100%',alignItems:'center'}}
                onPress={() => navigation.navigate("CFPScreen")}>
                <Text style={styles.buttonTextStyle}>Send Recovery Code</Text>
              </TouchableOpacity>
            </LinearGradient>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.belowlowercontainer}>
          <Image
            source={require('../../../asessts/images/belowpicture.png')}
            style={{ resizeMode: 'contain', width: '100%', bottom: 0, position: 'absolute' }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
export default Update;
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
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  lowercontainer: {
    height: '75%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  belowlowercontainer: {
    height: '7%',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: -1
  },
  inputcontainer: {
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#F3F2FF',
    borderRadius: 80,
    alignContent: 'center',
    paddingLeft: 8,
    justifyContent: 'center'
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
    marginTop: 20,
    justifyContent: 'center',
    height: 40
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
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
