import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const LoginPhoneEmailButton = ({ navigationProps }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.b1}>
        <Text style={{ color: '#D73D33', fontWeight: 'bold', fontSize: 18 }}>Login With Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.b2}
        onPress={() => navigationProps.navigation.navigate('LoginScreen')}
        activeOpacity={0.9}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Login With Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPhoneEmailButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
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