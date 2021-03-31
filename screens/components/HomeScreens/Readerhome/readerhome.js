import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Log = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>KASHAN</Text>
        </View>
    );
};
export default Log;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4D47B7',
    }
});
