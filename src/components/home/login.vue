<template>
<div>
  <div class="search-box">
      <img src="http://m.yougou.com/images/new-back.png" @click="backs" >
      <p>注册</p>
      <span></span>
  </div>
  <div class="sign">
  <!-- 账号 -->
    <label >
      <img src="http://m.yougou.com/images/login/my.png" alt="">
      <input type="text" placeholder="手机号" class="tel-text" id="username"  ref="userName" maxlength="11">
      <span>{{nameMsg}}</span>
    </label>
    <!-- 密码 -->
    <label >
      <img src="http://m.yougou.com/images/login/lock.png" alt="">
      <input type="text" placeholder="输入新密码" id="password"  ref="passWord" >
      <span>{{wordMsg}}</span>
    </label> 
    <p style="red" v-show='isHide'>登录失败</p>
    <!-- 注册-->
    <div class="box">
          <button class="btn" @click='sign'>注册</button>
    </div>

  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'denglu',
  data(){
    return {
       names:null,
       word:null,
       code:null,
       nameMsg:'',
       wordMsg:'',
       n:false,
       w:false,
       isHide:false
    }
  },
  methods:{
    //后退
   backs(){
         this.$router.back(-1);
         },
    //注册     
   sign(){
            var self=this
          //通过ref获取用户名的值
          this.names=this.$refs.userName.value
          //通过ref获取密码的值
          this.word=this.$refs.passWord.value
          if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.names))){
              this.nameMsg="不正确的手机号";
              this.n=false;
          }else{
              this.nameMsg='';
               this.n=true;
          }if (this.word=="") {
            this.wordMsg="密码未填写";
            this.w=false;
          }else{
            this.wordMsg="";

            this.w=true;
          }
          if(this.n&&this.w){
            axios.post("http://localhost:6500/bai",{
              username:this.names,
              password:this.word
            },
             {headers: {'Content-Type': 'application/json'}}
            ).then(function(res){
              
              self.$router.push("/denglu");
                         
            
            }).catch(function(err){
                alert(err)
    })
          }
   }
    

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box
{
  width:100%;
  height:4.9rem;
  display:flex;
  justify-content: space-between;
  background-color: #ccc;
}
.search-box img
{
  width: 2rem;
  height: 2rem;
  margin-top: 1.4rem;
}
.search-box p
{
  font-size: 1.6rem;
  line-height: 4.9rem;
}
.sign
{
  width: 100%;
}
.sign label
{
  display: inline-block;
  width: 90%;
  border:1px solid;
  margin: auto;
  display: flex;
  margin-top: 2rem;
  height: 3rem;
  line-height: 3rem;

}
.sign label img 
{
  width: 3rem;
}
.sign label input
{
  border: none;
  width: 80%;
}
.sign label span
{
  text-align: center;
}
.box
{
  margin:3rem auto;
  width: 90%;
}
.btn
{
  width: 100%;
}
</style>
