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
    FlatList,
    Platform
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const sf = ({ navigation }) => {

    const [type, settype] = useState("Author")

    return (
        <View style={styles.container}>
            <View   style={{
        ...(Platform.OS = 'android' && {
            zIndex: 10
        }),alignSelf:'center',marginTop:15,
        borderWidth: 1,
        borderColor: '#bbb',width:'80%',borderRadius:7
    }}>
            <DropDownPicker
                items={[
                    { label: 'Author', value: 'Author' },
                    { label: 'YYY', value: 'Name' },
                    { label: 'Author', value: 'novel' },
                ]}
                defaultValue={type}
                containerStyle={{ height: 47, width: '100%'}}
                style={{ backgroundColor: '#fff' }}
                itemStyle={{
                    justifyContent: 'flex-start',
                    color: 'white'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => settype(item.value)}
            />

            </View>

         
            <View style={styles.inputcontainer}>

               
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search Here" //12345
                    placeholderTextColor="#000"
                    keyboardType="default"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"

                />
 <Image
                    source={require('../../../asessts/images/search.png')}
                    style={{ resizeMode: 'contain',alignSelf:'center' }} />
            </View>

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                <Text style={styles.buttonTextStyle}>Search</Text>
              </TouchableOpacity>


              <View style={styles.listcontainer}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default sf;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    seacrhcontainer: {
        height: 50,
        width: '80%',
        backgroundColor: '#bbb',
        alignSelf:'center',
        marginTop:15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbb',
    },
    inputcontainer: {
        height: 50,
        width: '80%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#bbb',
        marginTop: 15,
        alignSelf: 'center',
        alignItems:'center'

    },
    inputStyle: {
        height: 40,
        width: '90%',
        color: 'black',
        paddingLeft: 14,
    },
    buttonStyle: {
      backgroundColor: '#D73D33',
      borderWidth: 0,
      color: '#000',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      width: '60%',
      alignSelf:'center',
      marginTop:15
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    listcontainer: {
        height: '70%',
        width: '100%',
        backgroundColor: '#D73D33',
        marginTop:15
    }
});
