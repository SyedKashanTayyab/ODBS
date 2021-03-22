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
    const [categorydata, setcategorydata] = useState([]);
    const [loading, setloading] = useState(true)
    var SampleNameArray = ["Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi"];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                setdata(json)
                setcategorydata(json)
                setloading(false)
            });


    });

    const renderItemComponent = (props) => {

        return (

            <TouchableOpacity onPress={() => navigation.navigate("Movetodisplaypdf")}
                style={styles.row}>

                <Image
                    source={require('../../../asessts/images/book.jpg')}
                    style={styles.pic}
                />


                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.item.title}</Text>
                    <Text style={styles.description}>by Imad Ali</Text>
                </View>
            </TouchableOpacity>
        );
    }


    const rendercategory = (props) => {

        return (

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                <Text style={styles.buttonTextStyle}>{props.item.id}</Text>
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
                <FlatList
                    horizontal
                    data={categorydata}
                    renderItem={(item) => rendercategory(item)}
                    showsHorizontalScrollIndicator={false}
                />
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
        backgroundColor: '#F7F7F7',
        alignItems: 'center'
    },
    listcontainer: {
        height: '84%',
        width: '100%',
        backgroundColor: '#F7F7F7'
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
        padding: 10,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 10,
        elevation: 25
    },
    pic: {
        borderRadius: 10,
        width: 80,
        height: '100%',
    },
    nameContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        marginRight: 30
    },
    nameTxt: {
        color: '#000',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 50,
        fontWeight: 'bold'
    },
    description: {
        color: '#000',
        fontSize: 18,
        marginTop: 1,
        marginLeft: 10
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
