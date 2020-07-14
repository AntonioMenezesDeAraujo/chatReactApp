import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, List, StatusBar } from 'react-native';

import Linha from '../components/Linha'

export default function Rooms() {
    
    const listSalas = [{
        id: 1,
        nome: 'Bia',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHBIpTAFd557pGlrdDrArB3IxGsv2Zhl-_MFgvDPsax_tPksj8&usqp=CAU',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }, {
        id: 2,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }, {
        id: 3,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.20.160.160a/p160x160/58382101_1272773126215147_1878883793536811008_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_eui2=AeETWswRRSN9xZnio2zblXFjtZe7LS24zCG1l7stLbjMIc3h8fInt8KVa8q6N29Yds18yEpiZYUnckY38AzGRBWn&_nc_ohc=mxqWJN6KWp0AX9HUgFM&_nc_ht=scontent.ffor11-1.fna&oh=ca7df719f1d28c449eb1eb8c6f496108&oe=5EC9EFD0',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }, {
        id: 4,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/p160x160/58858023_2307527792638926_6099962787163799552_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEMMe_u81WZu0jDXzrB5PqcEOfT181kqikQ59PXzWSqKSGZ89tzUB5yNPhEFYAbmVWCdaP9KvStDIR3gxu9GnCV&_nc_ohc=C8_ZGDF7k58AX-07nRT&_nc_ht=scontent.ffor11-1.fna&_nc_tp=6&oh=e3fc6103c170865b2d940ec7566b168e&oe=5EC88EE8',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    },
    {
        id: 5,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/p160x160/58858023_2307527792638926_6099962787163799552_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEMMe_u81WZu0jDXzrB5PqcEOfT181kqikQ59PXzWSqKSGZ89tzUB5yNPhEFYAbmVWCdaP9KvStDIR3gxu9GnCV&_nc_ohc=C8_ZGDF7k58AX-07nRT&_nc_ht=scontent.ffor11-1.fna&_nc_tp=6&oh=e3fc6103c170865b2d940ec7566b168e&oe=5EC88EE8',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    },
    {
        id: 6,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }, {
        id: 7,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.20.160.160a/p160x160/58382101_1272773126215147_1878883793536811008_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_eui2=AeETWswRRSN9xZnio2zblXFjtZe7LS24zCG1l7stLbjMIc3h8fInt8KVa8q6N29Yds18yEpiZYUnckY38AzGRBWn&_nc_ohc=mxqWJN6KWp0AX9HUgFM&_nc_ht=scontent.ffor11-1.fna&oh=ca7df719f1d28c449eb1eb8c6f496108&oe=5EC9EFD0',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }, {
        id: 8,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/p160x160/58858023_2307527792638926_6099962787163799552_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEMMe_u81WZu0jDXzrB5PqcEOfT181kqikQ59PXzWSqKSGZ89tzUB5yNPhEFYAbmVWCdaP9KvStDIR3gxu9GnCV&_nc_ohc=C8_ZGDF7k58AX-07nRT&_nc_ht=scontent.ffor11-1.fna&_nc_tp=6&oh=e3fc6103c170865b2d940ec7566b168e&oe=5EC88EE8',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    },
    {
        id: 9,
        nome: 'Bia',
        image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/p160x160/58858023_2307527792638926_6099962787163799552_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEMMe_u81WZu0jDXzrB5PqcEOfT181kqikQ59PXzWSqKSGZ89tzUB5yNPhEFYAbmVWCdaP9KvStDIR3gxu9GnCV&_nc_ohc=C8_ZGDF7k58AX-07nRT&_nc_ht=scontent.ffor11-1.fna&_nc_tp=6&oh=e3fc6103c170865b2d940ec7566b168e&oe=5EC88EE8',
        ultimaMsg: { message: 'Deu Certo', visualizado: true, enviado: true },
        horario: '11:24',
        totalNaoLido: 5
    }];

    return (
        <View style={styles.container}>
            <FlatList
                data={listSalas}
                renderItem={({ item }) => (<Linha sala = {item}/>)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 3,
        paddingBottom: 5,
        marginTop: 8,
        borderStartColor: '#FFF'

    }
});