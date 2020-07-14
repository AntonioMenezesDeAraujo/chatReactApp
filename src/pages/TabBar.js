import React from 'react';
import { View, Text } from 'react-native'

import Room from './Rooms';
import Favorite from './Favorites';
import Connections from './Conections';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const TabScreen = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Conversas: { screen: Room },
            Favoritos: { screen: Favorite },
            Conexões: { screen: Connections },
        }, {
            initialRouteName: 'Conversas',
            activeTintColor: '#FFF',
            tabBarOptions: {
                activeTintColor: '#FFF',
                inactiveTintColor: '#6a9a94',
                contentContainerStyle: {
                    backgroundColor: '#FF5722',
                    borderWidth: 1,
                },
                indicatorStyle: {
                    backgroundColor: '#FFF'
                },
                header: {
                    style: {
                        elevation: 0,       //remove shadow on Android
                        shadowOpacity: 0,
                    }
                }
            }
        }
    )
)

export default function TabBar() {
    return (

        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <View style={{ padding: 20, backgroundColor: '#FF5722' }}>
            </View>
            <TabScreen />
        </View>

    )
}
