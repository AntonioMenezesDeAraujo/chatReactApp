import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import TabBar from './pages/TabBar' 

export default createAppContainer(
    createSwitchNavigator({
        Home,
        Login,
        Create,
        TabBar
    })
);