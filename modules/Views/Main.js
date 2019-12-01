import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Home from '../../modules/TabBar/Home';
import Live from '../../modules/TabBar/Live';
import Mine from '../../modules/TabBar/Mine';
import Video from '../../modules/TabBar/Video';
//导航条组件
const BottomTabNavigator = createMaterialTopTabNavigator({
   Home: {
      screen: Home,
      navigationOptions:{
         title:"主页",
         tabBarIcon:({focused})=>{
            if(focused){
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_home_foc.png')} />
            }
            else{
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_home.png')} />
            }
         }
      }
   },
   Video: {
      screen: Video,
      navigationOptions:{
         title:"视频",
         tabBarIcon:({focused})=>{
            if(focused){
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_video_foc.png')} />
            }
            else{
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_video.png')} />
            }
         }
      }
   },
   Live : {
      screen: Live,
      navigationOptions:{
         title:"直播",
         tabBarIcon:({focused})=>{
            if(focused){
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_live_foc.png')} />
            }
            else{
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_live.png')} />
            }
         }
      }
   },
   Mine: {
      screen: Mine,
      navigationOptions:{
         title:"我的",
         tabBarIcon:({focused})=>{
            if(focused){
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_mine_foc.png')} />
            }
            else{
               return <Image style={styles.tabBarIcon}
                  source={require('../../assets/images/i_mine.png')} />
            }
         }
      }
   },
   
}, {
   
   tabBarPosition: 'bottom',       //标签栏在屏幕顶部还是底部
   swipeEnabled:true,           //是否可以滑动切换标签
   // backBehavior:'none',         //andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
   lazy: false,                    //是否只渲染显示的标签
   tabBarOptions: {
       activeTintColor: 'red',  //标签栏激活字体颜色
       inactiveTintColor: 'black',//标签栏未激活字体颜色
       showLabel: true,             //是否显示标签栏
       labelStyle: {fontSize: 18},  //标签样式(可设置字体大小等)
       showIcon: true,              //是否显示标签栏上图标
       scrollEnabled: true,        //是否可以滚动标签栏目(当tab总数超过一屏)
       indicatorStyle: {height: 0}, //指示器样式 height：0则不显示
       style: {backgroundColor: 'rgb(248,248,248)'}, //设置整个tabbar样式(背景颜色等)
       tabStyle:{
         width:Dimensions.get('window').width/4,
         height:Dimensions.get('window').width/8,
         alignItems:'center',
         textAlign:'center',
         upperCaseLabel:true,
         paddingTop:0,
         paddingBottom:0,
         marginBottom:-3,
     }
   }
});

const styles = StyleSheet.create({
   tabBarIcon : {
      width:Dimensions.get('window').width/16,
      height:Dimensions.get('window').width/16,
      paddingTop:20,
      marginLeft:-2.8,
   }
});


export default createAppContainer(BottomTabNavigator);
