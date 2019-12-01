import React,{Component} from 'react'
import {StyleSheet,View,FlatList,Image,Dimensions} from 'react-native';
import Header from '../Components/Header';
import NewsList from '../Components/NewsList';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import SplashScreen from 'react-native-splash-screen';
export default class Home extends Component{
   tabArr = [
      {columnName: '热点', requestCode: 'T1348647909107'},
      {columnName: '体育', requestCode: 'T1348649079062'},
      {columnName: '娱乐', requestCode: 'T1348648517839'},
      {columnName: '科技', requestCode: 'T1348649580692'},
      {columnName: '游戏', requestCode: 'T1348654151579'},
      {columnName: '手机', requestCode: 'T1348649654285'},
      {columnName: '旅游', requestCode: 'T1348654204705'},
      {columnName: '二次元', requestCode: 'T1481105123675'},
   ];
   componentDidMount() {
      // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide();//关闭启动屏幕
   }
   render(){
      return(
         <View style={styles.viewPager}>
            {/*头部*/}
            <Header navigation={this.props.navigation} />
            {/*身部*/}
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
                           <NewsList
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

