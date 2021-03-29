import React, { createRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'

const usertypefunc = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#4D47B7', '#423D9B', '#393587']}
            style={styles.linearGradient}
            start={{ x: 0.3, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <View style={styles.upperview}>
                <Text style={styles.definetext}>What defines you?</Text>
                <Text style={styles.preferencetext}>Choose your preference...</Text>
            </View>

            <View style={styles.underview}>
                <ScrollView contentContainerStyle={{ width: '100%', height: '100%' }}>
                    <View style={styles.viewofcard}>
                        <View style={styles.Card}>
                            <TouchableOpacity style={styles.cardimage}
                                onPress={() => console.log("clicked")}>
                                <Image
                                    source={require('../../../asessts/images/reader.png')}
                                    style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 15 }} />
                            </TouchableOpacity>
                            <Text style={styles.cardtext}>Reader</Text>
                        </View>
                        <View style={styles.Card}>
                            <TouchableOpacity style={styles.cardimage}
                                onPress={() => console.log("clicked")}>
                                <Image
                                    source={require('../../../asessts/images/writer.png')}
                                    style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 15 }} />
                            </TouchableOpacity>
                            <Text style={styles.cardtext}>Writer</Text>
                        </View>
                        <View style={styles.Card}>
                            <TouchableOpacity style={styles.cardimage}
                                onPress={() => console.log("clicked")}>
                                <Image
                                    source={require('../../../asessts/images/both.png')}
                                    style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 15 }} />
                            </TouchableOpacity>
                            <Text style={styles.cardtext}>Both</Text>
                        </View>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.notetext}>Note:</Text>
                        <Text style={styles.notetext2}>Dictation - Speech to text allows to dictate, translate and transcribe text instead of typing. It uses latest speech to text voice recognition technology and its main purpose is speech to text and translation for text messaging.</Text>
                    </View>

                    <View style={{ bottom: 0, position: 'absolute', width: '100%', height: '12%', marginTop: 20 }}>
                        <Image
                            source={require('../../../asessts/images/belowpicture.png')}
                            style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}
                        />
                    </View>

                </ScrollView>
            </View>
        </LinearGradient>
    );
};
export default usertypefunc;
const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
        width: '100%'
    },
    upperview: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 20
    },
    underview: {
        height: '80%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    definetext: {
        fontFamily: font.fonts.RalewayBold,
        fontSize: 30,
        color: 'white'
    },
    preferencetext: {
        color: 'white',
        fontSize: 18,
        fontFamily: font.fonts.RalewaySemiBold
    },
    viewofcard: {
        marginTop: '20%',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '95%',
        height: '21%',
        alignSelf: 'center',
        justifyContent: 'space-evenly'
    },
    Card: {
        backgroundColor: 'white',
        width: '30%',
        marginTop: 5,
        borderRadius: 15
    },
    cardimage: {
        width: '100%'
    },
    cardtext: {
        color: '#3D3D3D',
        fontSize: 18,
        fontFamily: font.fonts.RalewayMedium,
        marginTop: 5,
        alignSelf: 'center'
    },
    textview: {
        marginTop: '20%',
        backgroundColor: 'white',
        width: '95%',
        height: '20%',
        alignSelf: 'center',
        paddingLeft: '3%'
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
    }
});
