import React, { useState, useEffect, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    ActivityIndicator,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';


const Home = ({ navigation }) => {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                setdata(json)
                setloading(false)
            });


    });

    const renderItemComponent = (props) => {

        return (

            <TouchableOpacity onPress={() => navigation.navigate("Movetodisplaypdf")}>
                <View style={styles.row}>
                    <Image
                        source={{
                            uri:
                                'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                        }}
                        style={styles.pic}
                    />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt}>{props.item.title}</Text>
                            <Text style={styles.time}>{props.item.completed}</Text>
                        </View>
                        <View style={styles.msgContainer}>
                            {/* <Icon
                    name={props.icon}
                    size={15}
                    color="#b3b3b3"
                    style={{marginLeft: 15, marginRight: 5}}
                  /> */}
                            <Text style={styles.msgTxt}>{props.item.id}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>



            <View style={styles.searchcontainer}>
                <TouchableOpacity style={styles.inputcontainer}
                    onPress={() => navigation.navigate("Movetosearch")}>
                    <Image
                        source={require('../../../asessts/images/search.png')}
                        style={{ resizeMode: 'contain' }} />
                    <Text style={styles.inputStyle}> Search Here</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.scrollcontainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <Text style={styles.buttonTextStyle}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <Text style={styles.buttonTextStyle}>Book</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <Text style={styles.buttonTextStyle}>Research</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <Text style={styles.buttonTextStyle}>Novel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <Text style={styles.buttonTextStyle}>Article</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.listcontainer}>
                {loading ? <ActivityIndicator size="large" color="#D73D33" style={styles.indicator} /> : <FlatList
                    data={data}
                    renderItem={(item) => renderItemComponent(item)}
                    keyExtractor={(item) => item.id.toString()}
                />}
<View style={styles.bottomView}>
          <Image source={require('../../../asessts/images/upload.png')} />
        </View>

            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    listcontainer: {
        height: '84%',
        width: '100%',
        backgroundColor: '#fff'
    },
    searchcontainer: {
        height: '8%',
        width: '100%',
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    scrollcontainer: {
        height: '8%',
        marginTop: 10,
    },
    buttonStyle: {
        backgroundColor: '#D73D33',
        borderWidth: 0,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '80%',
        width: 90,
        borderRadius: 50,
        marginLeft: 10
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputcontainer: {
        height: 40,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50
    },
    inputStyle: {
        fontSize: 16
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#f7f7f7',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,
    },
    time: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12,
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    bottomView: {
        width: 50,
        height: 50,
        backgroundColor: '#D73D33',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        right: 20,
        borderRadius: 100,
      }
});
