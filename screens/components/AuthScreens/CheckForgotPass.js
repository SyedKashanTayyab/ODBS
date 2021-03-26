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


const cfp = ({ navigation }) => {


    const [errortext, setErrortext] = useState('');
    const passwordInputRef = createRef();
    const confirmpasswordInputRef = createRef();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.uppercontainer}>
                    <Image style={{ height: '150%', width: '100%' }} source={require('../../../asessts/images/background.png')} />
                </View>
                <View style={styles.lowercontainer}>

                    <Text style={{ color: 'black', fontSize: 28, marginTop: 35, marginLeft: '10%', fontWeight: 'bold' }}>Set Password</Text>

                    <View style={styles.inputcontainer}>
                   
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Enter otp" //dummy@abc.com
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType='number-pad'
                            returnKeyType="next"
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                        />
                    </View>

                    <View style={styles.inputcontainer}>
                       
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Enter Password" //dummy@abc.com
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="ascii-capable"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                            onSubmitEditing={() =>
                                confirmpasswordInputRef.current &&
                                confirmpasswordInputRef.current.focus()
                            }
                        />
                    </View>

                    <View style={styles.inputcontainer}>
                       
                        <TextInput
                            ref={confirmpasswordInputRef}
                            style={styles.inputStyle}
                            placeholder="Enter Confirm Password" //dummy@abc.com
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="ascii-capable"
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
                        <Text style={styles.buttonTextStyle}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};

export default cfp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    uppercontainer: {
        height: '45%',
        width: '100%'
    },
    lowercontainer: {
        height: '55%',
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
        marginTop: 25,
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
