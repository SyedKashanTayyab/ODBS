import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Settings } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../../constants/fonts'
import colors from '../../constants/colors'

const sgenre = ({ navigation }) => {
    const [dataSource, setDataSource] = useState([]);
    const [dataindex,setdataindex] = useState([]);

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
          console.log(index);
        });
        if(dataindex.length == 0)
        {
            categories[index].selected = true;
            dataindex.push(index);
            setDataSource(categories);
            console.log(dataindex)
        }
        else
        {
            for(let i = 0;i < 5;i++)
            {
                if(dataindex[i] == index)
                {
                    console.log("matched")
                }
                else
                {
                    categories[index].selected = true;
                    dataindex.push(index);
                    setDataSource(categories);
                    console.log(dataindex)
                }
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
        backgroundColor: '#b2b2b2'
    },
    listboxnormal: {
        width: 164,
        height: 55,
        backgroundColor: '#F0EFFF',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
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
        color:'#3D3D3D',
        fontFamily:font.fonts.RalewayMedium,
        fontSize:20
    },
    listboxselected: {
        width: 164,
        height: 55,
        backgroundColor: '#4D47B7',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    listtextselected: {
        color:'#fff',
        fontFamily:font.fonts.RalewayMedium,
        fontSize:20
    }
});
