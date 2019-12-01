import React,{Component} from 'react'
import {ScrollView,Text,StyleSheet,Image,TextInput,View,Dimensions,ImageBackground,TouchableOpacity} from 'react-native';
import MineList from '../Components/MineList';

export default class Mine extends Component{
   
   constructor(props){
      super(props);
      this.state={
         username:'立即登录',
         password:'',
         headerImg:'https://graph.baidu.com/thumb/1816087301,2888076364.jpg',
      }
   }
   settingData = [
      {
         leftText: '我的消息',
         rightText: '评论我的跟帖/通知',
      },
      {
         leftText: '我的关注',
      },
      {
         leftText: '金币商城',
         rightText: '踏春出行，新品幸运享不停'
      },
      {
         leftText: '活动广场',
      },
      {
         leftText: '我的钱包',
      },
      {
         leftText: '免流量看新闻',
      },
      {
         leftText: '扫一扫',
      },
      {
         leftText: '设置',
      },
      {
         leftText:'客服电话',
         isShowUnderline: false,
      }
   ];
   _onPress(){
      this.props.navigation.navigate('Login');
   }
   //headerImg='unheader';
   UNSAFE_componentWillMount(){
      
      if(this.state.username!=='立即登录'){
         this.setState({
            headerImg : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572493594876&di=20ba4e5b2ff3b45b61e7fed6437d91ff&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201507%2F23%2F20150723115018_ma428.thumb.700_0.jpeg'
         });
      }
   }
   render(){
      return(
         <ScrollView style={styles.mine}>
            <ImageBackground source={require('../../assets/images/login.png')} style={styles.getLogin}>
               <View style={styles.person}>
                  <Image style={styles.pic} source={{uri:this.state.headerImg}} />
                  <View style={styles.personright}>
                     <TouchableOpacity style={{marginBottom:10}} onPress={()=>this._onPress()}>
                        <Text style={{fontSize:25}}>{this.state.username}</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Text style={{fontSize:16,color:'rgba(0,0,0,0.5)'}}>让生活多份自在</Text>
                     </TouchableOpacity>
                  </View>
                  
               </View>
               <TouchableOpacity style={styles.wallet}>
                  <Text style={{fontSize:25,color:'#FF9900'}}>充值</Text>
                  <Image source={require('../../assets/images/icon_right.png')} />
               </TouchableOpacity>
            </ImageBackground>
            <View style={styles.middle}>
               <TouchableOpacity style={styles.middleware}>
                  <Text style={styles.middleware_num}>2</Text>
                  <Text style={styles.middleware_text}>收藏</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.middleware}>
                  <Text style={styles.middleware_num}>2</Text>
                  <Text style={styles.middleware_text}>历史</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.middleware}>
                  <Text style={styles.middleware_num}>2</Text>
                  <Text style={styles.middleware_text}>跟贴</Text> 
               </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
               {
                  this.settingData.map((item, index) => (
                     <MineList
                        key={index}
                        leftText={item.leftText}
                        rightText={item.rightText}
                        rightComponent={item.rightComponent}
                        isShowArrow={item.isShowArrow}
                        isShowUnderline={item.isShowUnderline}
                        onPress={item.onPress}
                     />
                  ))
               }
            </View>
            <View style={styles.down}>
               <TouchableOpacity style={styles.logout}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>退出登录</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   mine:{
      flexDirection:"column",
      
   },
   getLogin:{
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height/5,
      backgroundColor:'pink',
      marginBottom:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:10,
      paddingRight:10,
   },
   person:{
      width:Dimensions.get('window').width/2,
      height:Dimensions.get('window').height/6,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
   },
   personright:{
      justifyContent:'center',
   },
   pic:{
      width:Dimensions.get('window').width/2/2,
      height:Dimensions.get('window').width/2/2,
      borderRadius:Dimensions.get('window').width/2/2/2,
      justifyContent:'center',
   },
   wallet:{
      width:Dimensions.get('window').width/6,
      height:Dimensions.get('window').height/10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
   },
   middle:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:10,
      backgroundColor: '#F8F8F8',
   },
   middleware:{
      alignItems:'center',
      justifyContent:'center',
      width:Dimensions.get('window').width/8,
      height:Dimensions.get('window').height/10,
      alignItems:'center'
   },
   middleware_text:{
      fontSize:20,
      color:'rgba(0,0,0,0.5)',
   },
   middleware_num:{
      fontSize:24,
      fontWeight:'bold',
   },
   bottom:{
      width:Dimensions.get('window').width,
      backgroundColor:'pink',
      
   },
   down:{
      justifyContent:'center',
      alignItems:'center',
   },
   logout:{
      width:Dimensions.get('window').width*0.8,
      borderRadius:10,
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:5,
      height:Dimensions.get('window').height/16,
      alignItems:'center',
   }
});

