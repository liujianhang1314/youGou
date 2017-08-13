<template>
    <div>
      <ul class="paixu">
        <li @click='zonghe'>综合</li>
        <li @click='xiaoliang'>销量</li>
        <li @click="price">价格</li>
        <li @click='xinpin'>新品</li>
      </ul>
      <ul class="goodsList">
        <li v-for="(obj,index) in filterBy(brr,text)" @click="buy(obj,index)">
          <img :src="obj.src" alt="">
          <p class="name">{{obj.title}}</p>
          <p class="price">￥{{obj.nowPrice}} <span>{{obj.before}}</span></p>
        </li>
      </ul>
   
  </div>
</template>

<script>
import axios from  "axios"
export default {
  name: 'liebiao',
  data () {
    return {
      text:true,
      brr:true,
      classText:'',
      isHide:false
  }
},
created(){
 var  self=this
  axios.get("http://localhost:4000/home").then(res=>{
    self.brr=res.data.womenShoes
    console.log(self.brr)
  })
 
}
,
mounted(){

  this.text=this.$route.query.id;

},
methods:{
  
  xiaoliang(){
     function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value1-value2;
                    }
                }
                this.brr.sort(compare('xiaoliang'))
              },

  xinpin(){
      function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value1-value2;
                    }
                }
                this.brr.sort(compare('xinpin'))
              },
  zonghe(){
     function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value1-value2;
                    }
                }
                this.brr.sort(compare('zonghe'))
              },
  price(){
     function compare(property) {
                    return function (a,b) {
                        var value1=a[property];
                        var value2=b[property];
                        return value1-value2;
                    }
                }
                this.brr.sort(compare('nowPrice'))
              },
   buy(obj,index){
    //跳转路由传参数
    sessionStorage.setItem("uidd",obj.id)
 
    this.$router.push({path:"/buypage", query:{id:index}})
   }        

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box
{
  width: 100%;
  height: 4.4rem;
  display: flex;
  border: 1px solid;
  justify-content:space-between;
}
.logo
{
  width: 2rem;
  height: 2rem;
  margin-top: 1.1rem;
}
.search
{
  line-height: 4.4rem;

}
.search input
{
  width:90%;
  height:3rem;

  margin-top:0.4rem;
  border:none;
  outline:medium;
  background: #e6e6e6;
  color: #A9A9A9;
}
.search span
{
  font-size:2rem;
  margin-top:1.1rem;
}
.message
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
.paixu
{
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content:space-around;
  text-align: center;
  line-height: 4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  font-size: 1.4rem;
}
.goodsList
{
  width: 100%;
  display: flex;
  flex-flow:row wrap;
}
.goodsList li
{
  width:45%;
  margin-left: 3%;
}
.goodsList li img
{
  width: 80%;
}
.price
{
  color: red;
  font-size: 1.2rem;
}
.price span
{
  color: #ccc;
  text-decoration: line-through;
}
.name{
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
font-size: 1.2rem;
}
.ding
{
  position: fixed;
  bottom: 5rem;
  right: 0;
}
</style>