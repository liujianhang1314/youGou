<template>
   <div class="box">
     <div class="search-box"  >
        <img src='http://m.yougou.com/images/new-back.png' class='logo' @click="backs"/>
        <p>商品详情</p>
        <img src='http://m.yougou.com/images/ico-menu.png' class="message" />
     </div>
     <div class="xq">
          <img :src="arr2.src" class="xqImg" >
          <p class="xqTitle">{{arr2.title}}</p>
          <p class="nowPrice">￥{{arr2.nowPrice}} <span>￥{{arr2.before}}</span></p>
     </div>
      <div class="btns">
              <button @click=del()>-</button>
              <input type="text" v-model="count">
              <button  @click=add()>+</button>
      </div>
      <div class="changeSize" @click="changeSize()">
        <p>选择尺码</p>
        <p> > </p>
      </div>
     <div class="bottom">
       <ul>
         <li>
            <img src="http://m.yougou.com/images/like.png" alt="">
            <p>收藏</p>
          </li>
          <li>
            <img src="http://m.yougou.com/images/detail_img/car1.png" alt="">
            <p @click='goCar'>购物车</p>
          </li>
       </ul>
       <div class="buybox">
          <p class="join" @click="join" >加入购物车 </p>
             <p class="buy">立即购买</p>
       </div>
     </div>
     <div class="wrap" v-show="isHide">
       <div class="haoma">
        <div class="imgBox">
          <img :src="arr2.src" alt="">
          <p><span>￥{{jiaGe}}</span></p>
        </div>
        <div class="color">
          <p v-for="(c,index) in colors" @click="col(c,index)">{{c}}</p>
        </div>
        <div class="size">
          <p>尺码：</p>
          <ul>
            <li v-for="(a,index) in sizeNum" @click="sizeNums(a,index)">{{a}}</li>
          </ul>
        </div> 
     </div>
      <img src="http://m.yougou.com/images/goodsdetails/close.png" class="close" @click="close()">
     </div>
     
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import axios from  "axios"
export default {
  name: 'buypage',
  data () {
    return {
      arr2:true,
      msg:'',
      number:true,
      count:1,
      obj1:{},
      arr1:[],
      obj2:{},
      arrdataStr:'',
      jiaGe:'',
      isHide:false,
      sizeNum:[33,34,35,36,37,38,39,40,41],
      sizess:'',
      colors:["黑色","白色","黄色","灰色","蓝色","红色","银色"],
      colss:''
}
},

created(){
  var self=this
  axios.get("http://localhost:4000/home").then(function(res){
    self.arr2=res.data.womenShoes[self.number]
    self.jiaGe=self.arr2.nowPrice
    console.log(self.number)
  })

},
mounted(){

  this.number=this.$route.query.id;
},
methods:{
  backs(){
    this.$router.back(-1)
  },
  join(){
     var that = this 
        this.uidd =sessionStorage.getItem("uidd")
        // 通过商品ID找到对应的对象
        // this.obj=this.$data.jian[this.uidd-1]
        // 用户Id
        this.uid=sessionStorage.getItem("uid")
        // console.log(this.uid)
        // 通过用户Id获取用户信息
        if(this.uid==undefined){

                if(this.arr2.num==undefined){
                  this.arr2.num=0
                }
                this.arr2.num++;
                  this.obj2={
                  id:this.arr2.id,
                  title:this.arr2.title,
                  phone:sessionStorage.getItem("selfId"),
                  price:this.arr2.nowPrice,
                  num:this.arr2.num,
                  img:this.arr2.src
                }


              this.arr1.forEach(function(obj,index){
                if(obj.id==that.arr2.id){
                  that.arr1.splice(index,1)
                }
              })
              this.obj1={
                data:this.arr1
              }
              this.arr1.push(this.obj2);  
              localStorage.setItem("person", JSON.stringify(this.obj1))
              console.log(localStorage)
        }
        axios.get("http://localhost:6500/bai/"+this.uid).then((res)=>{
     
          // 如果id中zhan为空或者zhan的内容改变了执行
          if(res.data.zhan==""||!res.data.zhan){
              this.addArr()
              // 将接收的值转成字符串
              this.arrdataStr=JSON.stringify(this.obj2);
          }
          else{
            // 将json字符串转换为对象
            this.obj2=JSON.parse(res.data.zhan);
  
            
            this.addArr()
             // 将接收的值转成字符串
            this.arrdataStr=JSON.stringify(this.obj2)   //obj2==arrdata
         
          }

          //修改  如果内容修改了将内容重新传到后台
          axios.put("http://localhost:6500/bai/"+this.uid,{zhan:this.arrdataStr}).then((res)=>{   
            // 页面跳转到购物车页面
       
          })
        })
        MessageBox('提示', '操作成功');
  },
  del(){
    
    if(this.count>1){
     this.count--;
    }else{
      return false
    }
  },
  add(){
    this.count++;
  },
  goCar(){
    this.$router.push("/shopcar")
  },
  addArr(){
      return this.obj2[this.uidd]={
        "img":this.arr2.src,
        "title":this.arr2.title,
        "price":this.arr2.nowPrice,
        "num":this.count,
        "id":this.arr2.id,
        "size":this.sizess,
        "color":this.colss,
        "phone":sessionStorage.getItem("selfId")
      }
  },
  close(){
    this.isHide=false
  },
  changeSize(){
    this.isHide=true
  },
  sizeNums(a,e){
      this.sizess=a
  },
  col(c,index){
    this.colss=c
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box
{
  width: 100%;
  position: relative;
  margin: auto;
}
.search-box
{
  width: 100%;
  height: 4.4rem;
  display: flex;
  justify-content:space-between;
}
.search-box p
{
  font-size: 1.5rem;
  line-height: 4.4rem;
}
.logo
{
  width: 2rem;
  height: 2rem;
  margin-top: 1.1rem;
}

.message
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
.xq
{
  width: 100%;
}
.xqImg
{
  width: 100%;
}
.xqTitle
{
  font-size: 1.6rem;
}
.nowPrice
{
  color: red;
  font-size: 1.6rem;
}
.nowPrice span
{
  color: #ccc;
  text-decoration: line-through;
}
.btn
{
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  height: 4rem;
  line-height: 4rem;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
}
.bottom
{
  width: 100%;
  height: 4.9rem;
  position: fixed;
  bottom: 0;
  display: flex;
}
.bottom ul
{
  width: 30%;
  display: flex;
  justify-content:space-around;
}
.bottom ul img
{
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
}
.buybox
{
  width: 70%;
  line-height: 4.9rem;
  display: flex;
}
.buybox p
{
  width: 50%;
  height: 4.9rem;
  font-size: 1.2rem;
  text-align: center;
}
.join
{
  background-color: #ffbc00;
  color: white;
}
.buy
{
   background-color: #ff3300;
     color: white;
}
.num
{
  color: red;
  font-size: 1.5rem;
}
.btns input
{
  width: 3rem;
  text-align: center;
}
.btns
{
  margin-top: 3rem;
}
.btns button
{
  width: 2rem;
}
.wrap
{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 130;
  background: rgba(0,0,0,0.4);
}
.imgBox img
{
  width: 4rem;
  height: 4rem;
}
.haoma
{
  width: 100%;
  height: 40%;
  position: fixed;
  bottom: 4.9rem;
  background: white;
}
.imgBox
{
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.color
{
  width: 100%;
  display: flex;
  height: 4rem;

}
.color p
{
  border: 1px solid #ccc;
  height: 2rem;
  line-height: 2rem;
  margin-left: 5%;
  margin-top: 1rem;
}
.size
{
  width: 100%;
}
.size ul
{
  display: flex;
  width: 100%;
}
.size ul li
{
  margin-left: 5%;
  border: 1px solid #ccc;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 0.5rem;
}
.close
{
  display: inline-block;
  width: 3rem;
  height: 4rem;
  position: absolute;
  top:50%;
  right: 0;
}
.changeSize
{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  justify-content:space-between;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  margin-top:0.5rem; 
  }
</style>