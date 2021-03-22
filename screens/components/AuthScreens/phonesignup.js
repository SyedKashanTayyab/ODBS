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


const Signupphone = ({ navigation }) => {

  const numberRef = createRef();
  const otpRef = createRef();
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
        <Image style={{ height: '150%', width: '100%' }} source={require('../../../asessts/images/smallbackground.jpg')} />
      </View>
      <View style={styles.lowercontainer}>

        <View>
          <KeyboardAvoidingView enabled>

            <Text style={{ color: 'black', fontSize: 28, marginTop: 20, marginLeft: '10%', fontWeight: 'bold' }}>Sign Up</Text>
            <View style={{ alignItems: 'center' }}>

            </View>

            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../asessts/images/name.png')}
                style={{ resizeMode: 'contain' }} />
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Name" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType='ascii-capable'
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                onSubmitEditing={() =>
                    numberRef.current &&
                    numberRef.current.focus()
                }
              />
            </View>

            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../asessts/images/call.png')}
                style={{ resizeMode: 'contain' }} />
              <TextInput
                style={styles.inputStyle}
                ref={numberRef}
                placeholder="Enter Number" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                onSubmitEditing={() =>
                    otpRef.current &&
                    otpRef.current.focus()
                }
              />
            </View>
            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../asessts/images/otp.png')}
                style={{ resizeMode: 'contain' }} />
             <TextInput
                            style={styles.inputStyle}
                            ref={otpRef}
                            placeholder="Enter otp" //dummy@abc.com
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType='number-pad'
                            returnKeyType="next"
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
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
              <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={{ color: '#D73D33', fontSize: 14, alignSelf: 'center', marginTop: 5, fontWeight: 'bold' }}
              onPress={() => navigation.navigate('SignupLoginOption')}>Already Have Account?</Text>

          </KeyboardAvoidingView>
        </View>

      </View>
    </ScrollView>
    //  </View>
  );
};

export default Signupphone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  uppercontainer: {
    height: '35%',
    width: '100%',
    backgroundColor: '#fff',
  },
  lowercontainer: {
    height: '65%',
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
    marginTop: 20,
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
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: 20
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
