import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';
import avatarPerfil from '../asserts/perfil.jpeg';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import api from '../service/api';

export default function Create({ navigation }) {
    const [user, setUser] = useState({});

    async function direcionarTabBar() {
        const data = new FormData();
        //data.append('image', {
        //    'uri': 'content://media/external/images/media/88',
        //    'type': 'image/jpg',
        //    'name': 'image.jpg'
        //});
        data.append('nome', user.nome);
        data.append('apelido', user.apelido);
        data.append('senha', user.senha);
        data.append('image', user.image);
        data.append('Content-Type', user.image.type);

        console.log(data)
        //axios({
        //    url: 'http://192.168.56.1:3333/user',
        //    method: 'post',
        //    body: data,
        //    headers: {
        //        'Content-type': 'multipart/form-data'
        //    },
        //}).then(response => {
        //     console.log('certo')
        // }).catch(error => {
        //     console.log(error)
        // })

        try {
            const response = await fetch('http://192.168.56.1:3333/user', {
                method: 'POST',
                body: data,
            })

            const json = await response.json();
        } catch (err) {
            console.log(err)
        }

        navigation.navigate('TabBar')
    }



    function handleChoosePhoto() {
        const options = {
            noData: false,
        };

        ImagePicker.showImagePicker({
            title: 'Selecione uma Imagem'
        }, upload => {
            if (upload.error) {
                console.log('Error...')
            } else if (upload.didCancel) {
                console.log('Used cancel...')
            } else {
                const preview = {
                    uri: `data:image/jpeg;base64,${upload.data}`
                }

                let prefix;
                let ext;

                if (upload.fileName) {
                    [prefix, ext] = upload.fileName.split('.');
                    ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                } else {
                    prefix = new Date().getTime();
                    ext = 'jpg'
                }

                console.log('uri:', upload.uri )
                console.log('path:', upload.path)

                const image = {
                    uri:  upload.uri,
                    type: upload.type,
                    name: upload.fileName
                }


                setUser({ ...user, pathFoto: preview, image: image });


            }
        })

        // ImagePicker.launchImageLibrary(options, response => {
        //     console.log("rsponse", response);
        //     if (response.uri) {

        //         let prefix;
        //         let ext;

        //         if(response.fileName) {
        //             [prefix, ext] = response.fileName.split('.');
        //            ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext; 
        //        } else {
        //            prefix = new Date().getTime();
        //            ext = 'jpg';
        //        }

        //         const image = {
        //             uri: response.path,
        //             type: response.type,
        //             name: `${prefix}.${ext}`
        //         };

        //        setUser({...user, pathFoto:response.uri, image: image})
        //    }
        //});
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#DF4723', fontSize: 33, fontWeight: 'bold' }}>ChatMsg</Text>
            <TouchableOpacity onPress={handleChoosePhoto}>
                <Image style={{ width: 120, height: 120, borderRadius: 60 }}
                    source={user.pathFoto ? user.pathFoto : avatarPerfil} />
            </TouchableOpacity>

            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Nome"
                style={styles.input}
                value={user.nome}
                onChangeText={nome => setUser({ ...user, nome })} />
            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Apelido"
                style={styles.input}
                value={user.apelido}
                onChangeText={apelido => setUser({ ...user, apelido })} />
            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                placeholder="Senha"
                style={styles.input}
                value={user.senha}
                onChangeText={senha => setUser({ ...user, senha })} />

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