import React,{Component} from 'react'
import {Text,StyleSheet,View,Image,Dimensions} from 'react-native';
import VideoList from '../Components/VideoList';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

export default class Video extends Component{
   constructor(props){
      super(props);
      
   }
   tabArr = [
      {columnName: '推荐', requestCode: 'home'},
      {columnName: '搞笑', requestCode: 'home'},
      {columnName: '影视', requestCode: 'home'},
      {columnName: '音乐', requestCode: 'home'},
      {columnName: '现场', requestCode: 'home'},
      {columnName: '黑科技', requestCode: 'home'},
      {columnName: '小品', requestCode: 'home'},
      {columnName: '萌物', requestCode: 'home'},
      {columnName: '猎奇', requestCode: 'home'},
      {columnName: '军武', requestCode: 'home'},
      {columnName: '涨姿势', requestCode: 'home'}
   ];
   render(){
      return(
         <View style={styles.viewBody}>
               {/*上部导航栏*/}
               <View style={styles.columnSelect}>
                  <Image source={require('./../../assets/images/i_menu.png')} style={{width: 20, height: 20}} />
               </View>
               {/*新闻列表*/}
               <ScrollableTabView
                  ref={'tabView'}
                  renderTabBar={() => <ScrollableTabBar style={{borderBottomWidth: 0, paddingBottom: 5, width: Dimensions.get('window').width* .9, height: 45}} />}
                  tabBarUnderlineStyle={{ height: 2, backgroundColor: 'rgba(216,30,6,.8)'}}
                  tabBarInactiveTextColor="#515151"
                  tabBarActiveTextColor="#d81e06"
                  tabBarTextStyle={{fontSize: 15}}
                  onChangeTab={(ref)=>{}}
                  onScroll={(postion)=>{}}
                  locked={false}
                  initialPage={0}
               >
                  {
                     this.tabArr.map(item => {
                        return (
                           <VideoList
                              key={item.columnName}
                              tabLabel={item.columnName}
                              requestCode={item.requestCode}
                              navigation={ this.props.navigation }
                           />
                        )
                     })
                  }
               </ScrollableTabView>
            </View>
      )
   }
}

const styles = StyleSheet.create({
   viewPager: {
     flex: 1,
   },
   viewBody:{
      flex: 1,
        backgroundColor: '#F8F8F8',
        position: 'relative'
   },
   columnSelect:{
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: Dimensions.get('window').width* .1,
      height: 50,
      top: 0,
      right: 0,
   }
 });

