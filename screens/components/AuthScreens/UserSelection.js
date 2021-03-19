import React from 'react';

import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const UserSelection = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;
  const activeTabIndex = navigation.state.index;

  return (
    <View style={styles.container}>
      <View style={{ height: '70%' }}>
        <Image
          source={require('../../../asessts/images/aboutreact.png')}
          style={{ width: '90%', height: '100%', resizeMode: 'contain', margin: 30 }}
        />
      </View>
      <View style={styles.footer}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          {navigationState.routes.map((route, index) => {
            const isRouteActive = index === activeTabIndex;
            const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(route.routeName)}
                key={index}>

                <Text
                  style={{
                    backgroundColor: `${isRouteActive ? '#81b840' : 'white'}`,
                    color: `${tintColor}`,
                    paddingHorizontal: 50,
                    paddingVertical: 10
                  }}>
                  {route.routeName}
                </Text>

              </TouchableWithoutFeedback>
            );
          })}
        </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  footer: {
    // flex: 0.4,
    backgroundColor: '#e9ba00',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
export default UserSelection;