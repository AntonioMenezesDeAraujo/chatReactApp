import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';

export default function LinhaContato({ contatoFavoritado }) {
//https://edit.lottiefiles.com/?src=https%3A%2F%2Fassets4.lottiefiles.com%2Fpackages%2Flf20_vLsBzf%2Fchat_03.json
//https://edit.lottiefiles.com/?src=https%3A%2F%2Fassets4.lottiefiles.com%2Fpackages%2Flf20_AqReMb.json
    return (
        <View style={styles.container}>
            <Image style={styles.foto} source={{ uri: contatoFavoritado.image }} />
            <View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.parteSuperiorLinha}>
                        <Text style={styles.apelidoContato}>{contatoFavoritado.apelido}</Text>
                        <Text style={styles.textoNome}>{contatoFavoritado.nome}</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="star" size={25} color="#FFDE03" style={{ marginRight: 2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="star-border" size={25} color="#0091EA" style={{ marginRight: 2 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 0.5, backgroundColor: '#DDD', marginTop: 12 }} />
            </View>
        </View>
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
        marginBottom: 7
    },

    parteSuperiorLinha: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 105,
        marginBottom: 7
    },

    textoNome: {
        color: '#757575'
    }
})