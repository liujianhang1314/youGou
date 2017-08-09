<template>
<div>
  <div class="search-box">
      <img src="http://m.yougou.com/images/new-back.png" @click="backs">
      <p>登录</p>
      <p @click='login'>注册</p>
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
      <input type="text" placeholder="输入密码" id="password"  ref="passWord" >
      <span>{{wordMsg}}</span>
    </label> 
    <!-- 注册-->
    <div class="box">
          <button class="btn" @click='sign'>登录</button>
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
       hello:null
    }
  },
  beforeCreate(){
      var selfid=sessionStorage.getItem("selfId");
        if(selfid){
          this.$router.push('/mine')
        }
  },
  methods:{
    login(){
      this.$router.push('login')
    },
   backs(){
    this.$router.back(-1)
   },
   sign(){
          //通过ref获取用户名的值
          this.names=this.$refs.userName.value
          //通过ref获取密码的值
          this.word=this.$refs.passWord.value
          var self=this
    axios.post("http://localhost:6500/bai/login",{
              username:this.names,
              password:this.word
            },
             {headers: {'Content-Type': 'application/json'}}
            ).then(function(res){
             // 把数据存储到sessionStorage本地的临时会话
             //用户名
              sessionStorage.setItem("selfId",self.names);
              //后台每条数据的id
              sessionStorage.setItem("uid",res.data.uid);
              self.$router.push('/mine');
   
            })
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
  margin-top: 1rem;
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
