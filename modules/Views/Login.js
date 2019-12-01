import React,{Component} from 'react'
import {Text,StyleSheet,TextInput,View,Dimensions,Button,ImageBackground,TouchableOpacity} from 'react-native';
import Back from '../Components/Back';
export default class Login extends Component{
   constructor(props){
      super(props);
      this.state={
         username:'',
         password:'',
      }
   }
   _buttononpress=()=>{
      console.log('ss',this.state.username!=='' && this.state.password!=='');
      if(this.state.username!=='' && this.state.password!==''){
         console.log(this.state.username!=='' && this.state.password!=='');
         this.props.navigation.navigate('Mine');
      }
   }
   render(){
      return(
         <View navigation={this.props.navigation}>
            <Back navigation={this.props} />
            <ImageBackground style={styles.login} source={require('../../assets/images/login.png')}>
               <View style={styles.username}>
                  <Text>用户名:</Text>
                  <TextInput
                     placeholder={'用户名'}
                     style={styles.input}
                     onChangeText={(value)=>{
                        this.setState({
                           username:value,
                        });
                     }}
                  ></TextInput>
               </View>
               <View style={styles.password}>
                  <Text>密&nbsp;&nbsp;&nbsp;&nbsp;码:</Text>
                  <TextInput
                     style={styles.input}
                     placeholder={'密码'}
                     onChangeText={(value)=>{
                        this.setState({
                           password:value,
                        });
                     }}
                  ></TextInput>
               </View>
               <Button style={styles.button} title={"登录"} onPress={this._buttononpress} />
            </ImageBackground>
         </View>
      )
   }
}
Login.router = Back.router;
const styles = StyleSheet.create({
   login:{
      justifyContent:'space-around',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height*.3,
      backgroundColor:'pink',
      paddingLeft:10,
      paddingRight:10,
      marginTop:5,
   },
   username:{
      flexDirection:'row',
      alignItems:'center',
   },
   password:{
      flexDirection:'row',
      alignItems:'center',
   },
   input:{
      borderRadius: 18,
      backgroundColor: 'rgba(255,255,255,.5)',
      width:Dimensions.get('window').width/2
   },
   button:{
      alignItems:'center',
      borderRadius: 18,
   }
});

