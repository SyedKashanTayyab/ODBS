// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ScrollView
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { useEffect } from 'react/cjs/react.development';

const CustomSidebarMenu = (props) => {
  const [uname, setuname] = useState("Greyson Walker")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: '#D73D33', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ height: 85, width: 85, borderRadius: 60 }}
          source={require('../../../asessts/images/profile.png')} />

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 10 }}>{uname}</Text>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};


export default CustomSidebarMenu;