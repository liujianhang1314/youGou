<template>
  <div class="classifyWrap">
    <!--分类页面的左侧控制栏-->
      <ul class="leftBar">
        <li class="leftLi" v-for="(obj,index) in filterBy(list,bb)" @click="choose(obj,index)">
          {{obj}}
       </li>
      </ul>
    <!--右侧内容显示-->
    <div class="goodsWrap">

        <img :src="bar" class="logoImg">
        <ul class="goodsUl">
          <li v-for="(item,index) in goods" >
            <img v-bind:src="item.veryMan.img1 " alt="图图不见了呢" @click='tiaozhuan(index)'>
            <p>{{item.veryMan.face}}</p>

          </li>
        </ul>       
    </div>
    </div>

  </div>

</template>

<script>
import bus from "../../assets/bus";
  import axios from 'axios';
  export default{
    name:'productlist',
    data(){
        return{
          list:['女鞋','男鞋','运动','户外','男装','女装','箱包','童鞋童装','化妆品','全部品牌','专柜同款'],
          bar:true,
          goods:{},
          bb:""
        }
    },
    created(){
        var self=this;
        axios.get('../../static/json/a.json').then(function(res){
                    self.bar=res.data.classify[0].img;
          self.goods = Object.assign({},  self.goods, res.data.classify[0].hotRecommend);
          
        },function(err){
            console.log(err)
        })
    },
    methods:{
//        点击左侧菜单栏获取右侧显示区域数据
      choose(obj,index,e){
          var that=this;
          e=e||window.event;
          var goodsList=document.querySelectorAll('.leftLi');
          for(var i=0;i<goodsList.length;i++){
            if(e.target==goodsList[i]){
                goodsList[i].style.background="#af5bbf";
                goodsList[i].style.color="#fff";
            }else{
              goodsList[i].style.background=" #f6f5f7";
              goodsList[i].style.color="#000";
            }
        }
      axios.get('../../static/json/a.json').then(function(res){
         that.bar=res.data.classify[index].img;
           that.goods = Object.assign({},  that.goods, res.data.classify[index].hotRecommend);
        
        },function(err){
            console.log(err)
        })
      }
      ,
      tiaozhuan(index){
        this.$router.push({path:"/list",query:{id:index}})
      },
      myfilter(value){
                if(value.indexOf(this.bb)>-1){
                    return value
                }
            }
           
    },
    mounted(){
      var that=this;
      bus.$on("userDefinedEvent",function(bb){
    
        that.bb=bb;
        
      })
    }
  }
</script>

<style scoped>
.classifyWrap
{
  width: 100%;
  position: relative;
  margin: auto;
  top:5rem;
  display: flex;
}
.leftBar
{
  width: 20%;
  position: fixed;
}
.leftBar li
{
  width: 100%;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
}
.goodsWrap
{
  width: 80%;
  margin-left: 20%;
}
.logoImg
{
  width: 100%;
}
.goodsUl{
  width: 100%;
  display: flex;
  flex-flow:row wrap;
}
.goodsUl li
{
  width: 33%;
  text-align: center;
}
.goodsUl li img 
{
  width: 100%;
}
.aa{
  background:#ccc; 
}
</style>
