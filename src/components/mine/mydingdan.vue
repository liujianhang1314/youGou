<template>
<div>
    <div class="header">
          <img src="../../../static/img/classify/new-back.png" class="back" @click="backs">
        <p class="title">我的订单</p>
        <img src='../../../static/img/classify/ico-menu.png' class="menu" @click='tab' />
  </div>
  <div>
     <ul class="money" >
       <li @click="one">全部订单
          <div class="shuju" v-for='(obj,index) in goodsArr' >
            <img :src="obj.img" class="imgs" v-show="isHide1">
            <p class="nums" v-show="isHide1">总计：￥{{heji}}（{{obj.num}}）</p>
        </div>
       </li>
       <li @click="two">代付款
          <p v-show="isHide2">2</p>
        </li>
       <li @click="three">已完成
       <p v-show="isHide3">3</p></li>
       <li @click="four">售后记录
       <p v-show="isHide4">4</p></li>
     </ul>
     
  </div>
</div>

</template>

<script>
import axios from "axios"
export default {
  name: 'mydingdan',
  data () {
    return {
     goodsArr:[],
     heji:'',
     isHide1:true,
     isHide2:false,
     isHide3:false,
     isHide4:false
    }
  },
  created(){
     
        this.uid=sessionStorage.getItem("uid");
        if(this.uid==undefined){
          this.goodsArr=JSON.parse(localStorage.getItem("person")).data;
          console.log(this.goodsArr)
          this.zongjia()
        }
      axios.get("http://localhost:6500/bai/"+this.uid).then((res)=>{
        this.goodsArr=JSON.parse(res.data.zhan);
        this.zongjia()
    
      }).catch(function(err){
        console.log(err)
       });
    
  }
  ,
  methods:{
    backs(){
       this.$router.back(-1)
    },
    zongjia(){
      var a=0;
      for(var n in this.goodsArr){

          a +=this.goodsArr[n].price*this.goodsArr[n].num;  
          console.log(this.goodsArr[n].price) 
      }

      this.heji=a.toFixed(2);
    
    },
  one(){
    this.isHide1=true;
        this.isHide2=false;
    this.isHide3=false;
    this.isHide4=false;
  },
  two(){
    this.isHide2=true;
    this.isHide1=false;
    this.isHide3=false;
    this.isHide4=false;
  },
  three(){
    this.isHide3=true;
        this.isHide1=false;
    this.isHide2=false;
    this.isHide4=false;
  },
  four(){
    this.isHide4=true;
        this.isHide1=false;
    this.isHide3=false;
    this.isHide2=false;
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header
{
  width: 100%;
  height: 4.4rem;
  background:#ccc;
  display: flex;
  border: 1px solid;
  justify-content:space-between;
}
.back
{
  width:2rem;
  height:2rem;
  margin-top: 1.1rem;
  margin-left: 1rem;
}
.title
{
  font-size: 2rem;
line-height: 4.4rem;
}

.menu
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
.my
{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
}
.my p
{
  font-size: 1.6rem;
  line-height: 3rem;
}
.money
{
  width: 100%;
  display: flex;
 justify-content:space-around;
}
.money li 
{
  width: 33%;
  text-align: center;
  margin-top: 1rem;
}
.money li  img
{
  width: 30%;
}
.shuju
{
  width: 100%;
  display: flex;
  line-height: 10rem;
  justify-content:space-between;
}
.shuju img 
{
  height:6rem;
  height: 6rem;

}
</style>