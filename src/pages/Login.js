import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function Login({ navigation }) {

    function direcionarTabBar() {
        navigation.navigate('TabBar')
    }

    return (
        <View style={styles.container}>
            <Text style={{color:'#DF4723',fontSize:33, fontWeight:'bold'}}>ChatMsg</Text>
            
            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Apelido"
                style={styles.input} />
            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Senha"
                style={styles.input} />

            <TouchableOpacity onPress={direcionarTabBar} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        width: Dimensions.get('window').width - 40,
        marginTop: 20,
        paddingHorizontal: 15
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});