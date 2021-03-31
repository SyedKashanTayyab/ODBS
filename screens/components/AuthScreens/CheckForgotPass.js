import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, TextInput, View, Text, Keyboard, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const cfp = ({ navigation }) => {

    const firstref = createRef();
    const secondref = createRef();
    const thirdref = createRef();
    const forthref = createRef();
    
    const [firstvalue, setfirstvalue] = useState(0);
    const [secondvalue, setsecondvalue] = useState(0);
    const [thirdvalue, setthirdvalue] = useState(0);
    const [fourthvalue, setfourthvalue] = useState(0);

    const fisrttxtinput = (fvalue) => {
        setfirstvalue(fvalue)
        if (fvalue != "") {
            secondref.current &&
            secondref.current.focus()
        }
        else
        {
            firstref.current &&
            firstref.current.focus()
        }
    }
    const secondtxtinput = (svalue) => {
        setsecondvalue(svalue)
        if (svalue != "") {
            thirdref.current &&
            thirdref.current.focus()
        }
        else
        {
            secondref.current &&
            secondref.current.focus()
        }
    }
    const thirdtxtinput = (tvalue) => {
        setsecondvalue(tvalue)
        if (tvalue != "") {
            forthref.current &&
            forthref.current.focus()
        }
        else
        {
            thirdref.current &&
            thirdref.current.focus()
        }
    }
    return (
        <LinearGradient
            colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
            style={styles.linearGradient}
            start={{ x: 0.3, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <View style={styles.uppercontainer}>
                <LinearGradient
                    colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
                    style={[styles.linearGradient, { justifyContent: 'center' }]}
                    start={{ x: 0.3, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text style={styles.definetext}>Recover Your Password</Text>
                    <Text style={styles.preferencetext}>Enter recovery code...</Text>
                </LinearGradient>
            </View>
            <View style={styles.lowercontainer}>
                <View style={styles.row}>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="?" //12345
                            ref={firstref}
                            textAlign={'center'}
                            placeholderTextColor={colors.Colors.purpleLight}
                            keyboardType="numeric"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                            maxLength={1}
                            onChangeText={(value) =>
                                fisrttxtinput(value)
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="?" //12345
                            ref={secondref}
                            textAlign={'center'}
                            placeholderTextColor={colors.Colors.purpleLight}
                            keyboardType="numeric"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                            maxLength={1}
                            onChangeText={(value) =>
                                secondtxtinput(value)
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="?" //12345
                            ref={thirdref}
                            textAlign={'center'}
                            placeholderTextColor={colors.Colors.purpleLight}
                            keyboardType="numeric"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                            maxLength={1}
                            onChangeText={(value) =>
                                thirdtxtinput(value)
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="?" //12345
                            ref={forthref}
                            textAlign={'center'}
                            placeholderTextColor={colors.Colors.purpleLight}
                            keyboardType="numeric"
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                            maxLength={1}
                            onChangeText={(value) =>
                                setfourthvalue(value)
                            }
                        />
                    </View>
                </View>

                <LinearGradient
                    style={styles.buttonStyle}
                    colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
                    start={{ x: 0.3, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                        <TouchableOpacity  style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}
                        onPress={()=>navigation.navigate("UpdatePasswordScreen")}>
                        <Text style={styles.buttonTextStyle}>Submit</Text>
                        </TouchableOpacity>
                </LinearGradient>

            </View>
            <View style={styles.belowlowercontainer}>
                <Image
                    source={require('../../../asessts/images/belowpicture.png')}
                    style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}
                />
            </View>
        </LinearGradient>
    );
};
export default cfp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4D47B7',
    },
    linearGradient: {
        height: '100%',
        width: '100%'
    },
    uppercontainer: {
        height: '28%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    lowercontainer: {
        height: '59%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    belowlowercontainer: {
        height: '13%',
        width: '100%',
        backgroundColor: '#fff'
    },
    inputcontainer: {
        marginLeft: '8%',
        marginRight: '8%',
        backgroundColor: '#F3F2FF',
        borderRadius: 80,
        alignContent: 'center',
        paddingLeft: 25,
        justifyContent: 'center'
    },
    inputStyle: {
        width: '100%',
        color: '#6C63FF',
        fontSize: 18,
        fontFamily: font.fonts.RalewayMedium
    },
    buttonStyle: {
        backgroundColor: '#6C63FF',
        borderWidth: 0,
        color: '#000',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: '22%',
        marginRight: '22%',
        marginTop: 30,
        justifyContent: 'center',
        height: 60
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 18,
        fontFamily: font.fonts.RalewaySemiBold,
    },
    definetext: {
        fontFamily: font.fonts.RalewayBold,
        fontSize: 24,
        color: 'white',
        marginLeft: '8%'
    },
    preferencetext: {
        color: 'white',
        fontSize: 15,
        fontFamily: font.fonts.RalewaySemiBold,
        marginLeft: '8%'
    },
    textview: {
        marginTop: '10%',
        backgroundColor: 'white',
        width: '95%',
        height: '20%',
        alignSelf: 'center',
        marginLeft: '8%',
    },
    notetext: {
        fontFamily: font.fonts.RalewayBold,
        fontSize: 18,
        color: '#6c63ff'
    },
    notetext2: {
        color: '#3D3D3D',
        fontSize: 15,
        fontFamily: font.fonts.RalewayMedium
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40
    },
    SectionStyle: {
        height: 50,
        width: 50,
        backgroundColor: '#F3F2FF',
        borderRadius: 100,
    }
});
