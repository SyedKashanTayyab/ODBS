import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const sgenre = ({ navigation }) => {
    const [dataSource, setDataSource] = useState([]);
    const [dataindex, setdataindex] = useState([]);
    const [count, setcount] = useState(1);

    useEffect(() => {
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return {
                id: i,
                text: 'History'
            };
        });
        setDataSource(items);
    }, []);

    const updateOnPress = (index) => {
        const categories = dataSource.map((item) => {
            item.selected = false;
            return item;

        });
        if (count <= 5) {
            console.log(count)
            let matched = false;

            if (dataindex.length === 0) {
                categories[index].selected = true;
                dataindex.push(index);
                setDataSource(categories);
                setcount(count + 1)
                console.log(count)
            }
            else if (dataindex.length != 0) {
                for (let i = 0; i < dataindex.length; i++) {
                    if (dataindex[i] == index) {
                        matched = true
                        dataindex.splice(i, 1);
                        setcount(count - 1)
                        console.log(count)
                        break;
                    }
                }
                for (let j = 0; j < dataindex.length; j++) {
                    let a = dataindex[j]
                    categories[a].selected = true;
                    setDataSource(categories);
                }
                if (!matched) {
                    dataindex.push(index);
                    for (let i = 0; i < dataindex.length; i++) {
                        let a = dataindex[i]
                        categories[a].selected = true;
                        setDataSource(categories);
                    }
                    setcount(count + 1)
                    console.log(count)
                }
            }
        }
        else {
            for (let i = 0; i < dataindex.length; i++) {
                if (dataindex[i] == index) {
                    dataindex.splice(i, 1);
                    setcount(count - 1)
                    console.log(count)
                    break;
                }
            }
            for (let j = 0; j < dataindex.length; j++) {
                let a = dataindex[j]
                categories[a].selected = true;
                setDataSource(categories);
            }
        }
    };
    return (
        <LinearGradient
            colors={[colors.Colors.purpleLight, colors.Colors.purpleDark]}
            style={styles.linearGradient}
            start={{ x: 0.3, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <View style={styles.upperview}>
                <Text style={styles.definetext}>What are your preferences?</Text>
                <Text style={styles.preferencetext}>Select upto 5 tags...</Text>
            </View>
            <View style={styles.underview}>
                <FlatList
                    style={styles.list}
                    data={dataSource}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.innerlistview}>
                            <TouchableOpacity onPress={() => updateOnPress(item.id)}
                                style={item.selected ? styles.listboxselected : styles.listboxnormal}>
                                <Text style={item.selected ? styles.listtextselected : styles.listtextnormal}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
                <TouchableOpacity style={styles.gonextbutton}>
                    <Image
                        source={require('../../../asessts/images/forward.png')}
                        style={{ resizeMode: 'contain', alignSelf: 'center'}}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default sgenre;

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
        borderTopLeftRadius: 35,
        paddingTop: 20
    },
    definetext: {
        fontFamily: font.fonts.RalewayBold,
        fontSize: 24,
        color: 'white'
    },
    preferencetext: {
        color: 'white',
        fontSize: 15,
        fontFamily: font.fonts.RalewaySemiBold
    },
    list: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    listboxnormal: {
        width:'85%',
        height: 55,
        backgroundColor: '#F0EFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerlistview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 20
    },
    listtextnormal: {
        color: '#3D3D3D',
        fontFamily: font.fonts.RalewayMedium,
        fontSize: 20
    },
    listboxselected: {
        width: 164,
        height: 55,
        backgroundColor: '#4D47B7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listtextselected: {
        color: '#fff',
        fontFamily: font.fonts.RalewayMedium,
        fontSize: 20
    },
    gonextbutton: {
        backgroundColor: colors.Colors.purpleDark,
        bottom: 14,
        position: 'absolute',
        borderRadius: 100,
        height: 55,
        width: 55,
        right: 14,
        alignItems:'center',
        justifyContent:'center',
        elevation:25
    }
});
