import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const RegisterPhoneEmailButton = ({ navigationProps }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.b1}>
        <Text style={{ color: '#D73D33', fontWeight: 'bold', fontSize: 18 }}>Sign up With Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.b2}
        onPress={() => navigationProps.navigation.navigate('EmailSignupScreen')}
        activeOpacity={0.9}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Sign up With Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPhoneEmailButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 40,
    marginBottom:40
  },
  button: {
    marginVertical: 5,
    backgroundColor: '#D73D33',
    paddingHorizontal: 30,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  b1: {
    marginVertical: 5,
    backgroundColor: '#fff',
    borderColor: '#D73D33'
    , borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  b2: {
    marginVertical: 5,
    backgroundColor: '#D73D33'
    , paddingHorizontal: 30,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  }
});