import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('SignupLoginOption');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require('../../../asessts/images/background.png')}
        style={{ flex: 1 }}
      />
      <ActivityIndicator size={60} color="#fff" style={styles.indicator} />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  bottomView: {
    width: 200,
    height: 200,
    backgroundColor: '#D73D33',
    position: 'absolute',
    borderRadius: 100,
  },
  indicator: {
    position: 'absolute',
    marginTop: 60
  }
});
