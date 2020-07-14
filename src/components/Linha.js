import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';

export default function Linha({ sala }) {

    return (
        <Ripple style={styles.container}>
            <Image style={styles.foto} source={{ uri: sala.image }} />
            <View>
                <View style={{ justifyContent: 'space-between' }}>
                    <View>
                        <View style={styles.parteSuperiorLinha}>
                            <Text style={styles.nomeContato}>{sala.nome}</Text>
                            <Text style={styles.textoHorario}>{sala.horario}</Text>
                        </View>

                        <View style={styles.parteInferiorLinha}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="check-all" size={17} color="#0091EA" style={{ marginRight: 2 }} />
                                <Text style={styles.textoMsg}>{sala.ultimaMsg.message}</Text>
                            </View>
                            <View style={styles.contador}>
                                <Text style={styles.textoContador}>{sala.totalNaoLido}</Text>
                            </View>
                        </View>
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

    statusMsg: {
        height: 40,
        width: 40
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

    nomeContato: {
        fontWeight: 'bold',
        fontSize: 14
    },

    parteSuperiorLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 80,
        marginBottom: 7
    },

    parteInferiorLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 80
    },

    contador: {
        backgroundColor: 'red',
        height: 20,
        width: 20,
        alignItems: 'center',
        borderRadius: 10
    },

    textoContador: {
        color: '#FFF',
        fontWeight: 'bold'
    },

    textoHorario: {
        color: '#757575'
    },

    textoMsg: {
        color: '#757575'
    }
})