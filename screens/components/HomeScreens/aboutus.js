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


const au = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={{fontSize:62,fontWeight:'bold'}}>I am About</Text>
        </View>
    );
};

export default au;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});
