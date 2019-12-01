import React,{Component} from 'react';
import {View,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
class Back extends Component{
   constructor(props){
      super(props);
      this.state = {

      };
   }
   _onPress=()=>{
      this.props.navigation.navigation.goBack();
   }
   render(){
      return(
         <View>
            <TouchableOpacity 
               activeOpacity={.8} 
               style={{flexDirection: 'row', alignItems: 'center',backgroundColor:'#CCCCFF'}} 
               onPress={this._onPress}
            >
               <Image 
                  source={require('./../../assets/images/i_goback.png')} 
                  resizeMode={'contain'} 
                  style={styles.headerLeftImg}
               />
            </TouchableOpacity>
         </View>
         
      )
   }
}
export default withNavigation(Back);
const styles = StyleSheet.create({
   headerLeftImg: {
      width: '8%',
      height: 35,
  },
});