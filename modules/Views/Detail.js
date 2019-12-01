import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import ajax from '../../utils/fetch'
import HTMLView from 'react-native-htmlview'
import { ScrollView } from 'react-native-gesture-handler';
import Back from '../Components/Back';
//新闻详情页
export default class Detail extends Component{
   constructor(props){
      super(props);
      this.state={
         newsData:'',
         body: '',
         title:'',
         source:'',
         ptime:'',
      }
   }
   //在render之前请求数据
   UNSAFE_componentWillMount(){
      let docid = this.props.navigation.state.params.docid
      ajax({
         url: `http://c.m.163.com/nc/article/${docid}/full.html`,
         success: (data)=>{
            let body = data[docid].body;
            data[docid]['img'].forEach(item =>{
               body = body.replace(item.ref, `<img src="${item.src}" />`);
            });
            this.setState({
               newsData : data[docid],
               body : data[docid].body,
               title : data[docid].title,
               source : data[docid].source,
               ptime : data[docid].ptime,
            });
            console.log('body',this.state.body);
         },
         error: (err)=>{
            console.info('详情请求错误:');
            console.info(err);
         }
      });
   }
   render(){
      let detail = this.state.title ? 
         (<ScrollView>
            <Text style={{padding:5,fontWeight:'bold',fontSize:25}}>{this.state.title}</Text>
            <View style={{flexDirection:'row',padding:10,justifyContent:'flex-start',fontSize:16}}>
               <Text>{this.state.source}</Text>
               <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
               <Text>{this.state.ptime}</Text>
            </View>
            <HTMLView 
               value={this.state.body}
               stylesheet={htmlStyles}
               style={{padding: 10}}
               saveToLocalByLongPress={false}
            />
         </ScrollView>)
         : 
         (<ScrollView>
            <Text style={{padding:5,fontWeight:'bold',fontSize:25}}>由于接口原因，部分新闻详情无法获取。</Text>
            <Image style={styles.itemimage} source={require('../../assets/images/contentnotfound.png')}></Image>
         </ScrollView>);
      return(
         <View style={styles.headerContainer} navigation={this.props.navigation}>
            <Back navigation={this.props} />
            {detail}
         </View>
      )
   }
}
const styles = StyleSheet.create({
   headerContainer: {
      backgroundColor: '#F8F8F8',
      height:Dimensions.get('window').height,
   },
   itemimage:{
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').width*9/16,
   },
});

const htmlStyles = StyleSheet.create({
   p:{
      color: '#2c2c2c',
      lineHeight: 30,
      fontSize:18
   },
   img:{
      width: 25,
      height: 35,
   }
});