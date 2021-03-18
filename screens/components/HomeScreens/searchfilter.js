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
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const sf = ({ navigation }) => {

    const[type,settype] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.seacrhcontainer}>
                <TouchableOpacity style={{ height:50,width:'10%',justifyContent:'center'}}
                onPress={()=>navigation.navigate("HomeScr")}>
                <Image
                    source={require('../../../asessts/images/arrow.png')}
                    style={{ resizeMode: 'contain',width:'100%'}} 
                    />
                </TouchableOpacity>
  
              

              <View style={styles.inputcontainer}>
                  
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Search Here" //12345
                        placeholderTextColor="#fff"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                        
                    />
                      <Image
                        source={require('../../../asessts/images/ss.png')}
                        style={{ resizeMode: 'contain' }} />
                </View>

                <DropDownPicker
                    items={[
                        { label: 'Book', value: 'book'},
                        { label: 'Article', value: 'article'},
                        { label: 'Novel', value: 'novel' },
                    ]}
                    defaultValue={type}
                    containerStyle={{ height: 50,width:'30%' }}
                    style={{ backgroundColor: '#D73D33' }}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        color:'white'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => settype(item.value)}
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
        width: '100%',
        backgroundColor: '#D73D33',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputcontainer: {
        height: 50,
        width: '60%',
        backgroundColor: '#D73D33',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        height: 40,
        width: '80%',
        color: 'white',
        paddingLeft: 5,
    }
});
