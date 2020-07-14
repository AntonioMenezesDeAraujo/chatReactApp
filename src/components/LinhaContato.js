import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';

export default function LinhaContato({ contatoFavoritado }) {

    return (
        <Ripple style={styles.container}>
            <Image style={styles.foto} source={{ uri: contatoFavoritado.image }} />
            <View>
                <View>
                    <View style={styles.parteSuperiorLinha}>
                        <Text style={styles.apelidoContato}>{contatoFavoritado.apelido}</Text>
                        <Text style={styles.textoNome}>{contatoFavoritado.nome}</Text>
                    </View>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#DDD', marginTop: 12 }} />
            </View>
        </Ripple>
    )
}


const styles = StyleSheet.create({
    foto: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginRight: 10
    },

    container: {
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width,
        paddingTop: 10,
        paddingBottom: 3,
        height: 'auto',
    },

    apelidoContato: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom:7
    },

    parteSuperiorLinha: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 80,
        marginBottom: 7
    },

    textoNome: {
        color: '#757575'
    }
})