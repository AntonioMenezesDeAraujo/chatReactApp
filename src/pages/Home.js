import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Home({ navigation }) {

    function direcionarLogin() {
        navigation.navigate('Login')
    }

    function direcionarCreate() {
        navigation.navigate('Create')
    }

    return (
        <>
            <View style={styles.container}>
                <LottieView source={require('../asserts/logoEfect.json')} autoPlay loop resizeMode = 'contain'  />

                

                <View>
                    <TouchableOpacity onPress={direcionarLogin} style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={direcionarCreate} style={styles.btn}>
                        <Text style={styles.btnText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 30
    },
    btn: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});
