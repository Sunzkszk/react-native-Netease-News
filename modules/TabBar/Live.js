import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions,ScrollView,Image,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Live extends Component{
   render(){
      return(
         <ScrollView style={styles.live}>
            <View style={styles.state}>
               <Text style={{fontSize:20,lineHeight:30,}}>由于没有直播相关接口，在此将本部分用于轮播图组件的练习使用。</Text>
            </View>
            <View style={styles.body}>
               <Text style={styles.title}>react-native-swiper</Text>
               <Swiper style={styles.wrapper} 
                  showsButtons={true}
                  //horizontal={false}
               >
                  <View style={styles.slide1}>
                     <Text style={styles.text}>Hello Swiper</Text>
                  </View>
                  <View style={styles.slide2}>
                     <Text style={styles.text}>Beautiful</Text>
                  </View>
                  <View style={styles.slide3}>
                     <Text style={styles.text}>And simple</Text>
                  </View>
               </Swiper>
            </View>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   live:{
      flexDirection:'column',
   },
   state:{
      width:Dimensions.get('window').width,
      backgroundColor:'pink',
      paddingLeft:10,
   },
   body:{
      marginTop:20,
   },
   title:{
      fontSize:20,
      textAlign:'center',
   },
   wrapper:{
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height/5,
      backgroundColor:'red',
   },
   slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
});

