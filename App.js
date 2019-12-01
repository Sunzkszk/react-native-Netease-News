import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from './modules/Views/Detail';
import MainScreen from './modules/Views/Main';
import SearchScreen from './modules/Components/Search';
import NewsListScreen from './modules/Components/NewsList';
import HomeScreen from './modules/TabBar/Home';
import HeaderScreen from './modules/Components/Header';
import LoginScreen from './modules/Views/Login';
import MineScreen from './modules/TabBar/Mine';
import BackScreen from './modules/Components/Back';

const AppNavigator = createStackNavigator({
   
   Main: {
      screen: MainScreen,
      navigationOptions:{
         header:null
      }
   },
   
   Detail: {
      screen: DetailScreen,
      navigationOptions:{
         header:null
      }
   },
  
   Search:{
      screen: SearchScreen,
      navigationOptions:{
         header:null
      }
   },
   Login:{
      screen: LoginScreen,
      navigationOptions:{
         header:null
      }
   },
},{
   initialRouteName: 'Main',
   headerMode: 'float',
});

export default createAppContainer(AppNavigator);