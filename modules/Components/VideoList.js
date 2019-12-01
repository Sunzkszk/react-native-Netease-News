import React,{Component} from 'react';
import ajax from '../../utils/fetch';
import {View,Text,FlatList,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
export default class VideoList extends Component{
   constructor(props){
      super(props);
      this.state={
         list:[],
         selected:'',
         refreshing: false,
      }
   }
   currPage = 0;
   //用来处理每个data数据的函数
  _renderItem(item){
     return(
         <TouchableOpacity 
            item={item}
            style={styles.items} 
            onPress={()=>this._onPress(item)}
         >
            <Image source={{uri:item.img}} style={styles.itemimage}></Image>
            <Text style={styles.itemtitle}>{item.title}</Text>

         </TouchableOpacity>
     )
  }
   //在state之后,render之前执行
   UNSAFE_componentWillMount(){
      this._getVideoList();
   }
   //获取新闻列表
   _getVideoList(){
      //alert('获取了新列表');
      let _this = this;
      let requestCode = this.props.requestCode;
      console.log('requestCode',requestCode);
      console.log(`http://c.3g.163.com/nc/video/${requestCode}/${_this.currPage}-10.html`);
      ajax({
         url: `http://c.3g.163.com/nc/video/${requestCode}/${_this.currPage}-10.html`,
         success: (data)=>{
            //data['videoList'][0].length = 61;
            this.setState({
               list: data[requestCode]
            });
            _this.currPage += 10;
         },
         error: (err)=>{
            this.refs.toast.show('网络请求异常');
            console.log(err);
         },
         complete: ()=>{
            _this.state.refreshing && _this.setState({refreshing: false});
         }
      });
      console.log('state',this.state.list);
   }
   //单击跳转新闻详情
   _onPress(item){
      console.log('item',item.docid);
      this.props.navigation.navigate('Detail',{docid:item.docid});
      console.log('点击了');
      /*this.setState({
         selected:item.docid
      });
      console.log('selected',this.state.selected);*/
   }
   //上拉加载
   _onEndReached = () => {
      //alert('运行了上拉加载');
      this._getVideoList();
   };
   //下拉刷新
   _renderRefresh = () => {
      //alert('运行了下拉刷新');
      this.setState({refreshing: true}); //开始刷新
      this.currPage = 0;
      this._getVideoList();
   };
   _keyExtractor = (item, index) => index+'';
   render(){
      return(
         <View style={styles.container}>
            <FlatList
               data={this.state.list}
               renderItem={({item}) => this._renderItem(item)}
               numColumns={1}
               initialNumToRender={10}
               onEndReachedThreshold={0.1}
               onEndReached={ this._onEndReached }
               refreshing={ this.state.refreshing }
               onRefresh={ this._renderRefresh }
               keyExtractor={ this._keyExtractor }
            />
            <Toast
               ref="toast"
               style={{backgroundColor:'black'}}
               position='center'
               opacity={0.8}
               textStyle={{color:'white'}}
            />
         </View>
      ) 
   }
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: '#F8F8F8'
   },
   items:{
      width:'50%',
      height:150,
      alignItems:'center',
      marginTop:30
   },
   itemimage:{
      width:Dimensions.get('window').width/2*0.8,
      height:Dimensions.get('window').width/2*0.8*9/16,
   },
   itemtitle:{
      fontSize:16,
      marginTop:10,
      width:'80%',
   }
});
