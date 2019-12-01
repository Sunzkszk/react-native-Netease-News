
import React,{Component} from 'react'
import {Text,StyleSheet,View,Dimensions,Image,TouchableOpacity} from 'react-native';
export default class Header extends Component{
   _onPress(){
      this.props.navigation.navigate('Search');
   }
   render(){
      return(
         <View style={styles.header}>
            <Image source={require('../../assets/images/logo.png')} style={styles.headerLogo} resizeMode={'contain'} />
            <TouchableOpacity style={styles.search} onPress={this._onPress.bind(this)}>
               <Image source={require('../../assets/images/i_search.png')} style={styles.searchLogo} resizeMode={'contain'} />
               <Text style={styles.searchText}>搜索新闻热点</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/i_24h.png')} style={styles.headerLogo} resizeMode={'contain'} />
         </View> 
      )
   }
}

const styles = StyleSheet.create({
   header:{
      width:Dimensions.get('window').width,
      //height:Dimensions.get('window').height/28,
      backgroundColor:'#FF3333',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:10,
      paddingRight:10,
      alignItems:'center'
   },
   headerLogo:{
      width: 45,
      height: 45,
   },
   headerRightImg:{
      width: 27,
      height: 27,
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
   searchText:{
      color:'white'
   },
   searchLogo:{
      width: 17,
      height: 17,
      marginRight: 5
   }
});

