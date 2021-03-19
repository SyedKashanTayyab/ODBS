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
});
