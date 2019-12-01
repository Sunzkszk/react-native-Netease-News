
import React,{Component} from 'react'
import {View,Dimensions,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
export default class Search extends Component{
   render(){
      return(
         <View style={styles.view}>
            <TouchableOpacity 
               activeOpacity={.8} 
               style={{flexDirection: 'row', alignItems: 'center'}} 
               onPress={()=>{ this.props.navigation.goBack() }}
            >
               <Image 
                  source={require('./../../assets/images/i_goback.png')} 
                  resizeMode={'contain'} 
                  style={styles.headerLeftImg}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.search}>
               <Image source={require('../../assets/images/i_search_grey.png')} style={styles.searchLogo} resizeMode={'contain'} />
               <Text style={styles.searchText}>搜索新闻热点</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text>搜索</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   view:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:10,
      paddingRight:10,
      alignItems:'center',
      backgroundColor:'#FF3333',
   },
   search:{
      flexDirection:'row',
      justifyContent:'center',
      width: Dimensions.get('window').width * 0.6,
      height: 33,
      borderRadius: 18,
      backgroundColor: 'rgba(255,255,255,.3)',
      alignItems:'center',
   },
   searchLogo:{
      width: 17,
      height: 17,
      marginRight: 5
   },
   headerLeftImg:{
      width: 45,
      height: 45,
   }
});

