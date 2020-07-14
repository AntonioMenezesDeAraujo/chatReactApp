import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, List, StatusBar } from 'react-native';

import LinhaConexao from '../components/LinhaConexao'

export default function Favorites() {

    const listSalas = [
        {
            id: 1,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 2,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false

        }, {
            id: 3,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 4,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 5,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 6,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 7,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 8,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 9,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 10,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 11,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        }, {
            id: 12,
            nome: 'Bia',
            image: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160a/p160x160/55485152_1169813699844510_3908775776752762880_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEmstYaOA-jZEr_NASkGBu-viCbHkFJrdK-IJseQUmt0oANcAJDQsXNYgeYJvLwA5NJsqg9Xni6noRVeNfxQ9xM&_nc_ohc=sQi5sypEuqsAX9WFkTR&_nc_ht=scontent.ffor11-1.fna&oh=a41bccb0e9046f1a616fc69583909159&oe=5EC85073',
            apelido: 'Chata#Demais',
            favorito: false
        },];

    return (
        <View style={styles.container}>
            <FlatList
                data={listSalas}
                renderItem={({ item }) => (<LinhaConexao contatoFavoritado={item} />)}
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