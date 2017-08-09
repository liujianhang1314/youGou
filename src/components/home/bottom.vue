<template>
  <div class="bottomBox">
      <ul class="bottom">
        <li class="login">
          <span @click="denglu">登录</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          <span @click='login'>注册</span>
        </li>
        <li class="manner">
          <p>电脑版</p>
          <p>客户端</p>
          <p>微信</p>
        </li>
      </ul>
      <div class="bottomName">
         <p>百丽国际旗下购物网站</p>
        <p>Copyright © 2011-2017 优购 m.yougou.com</p>
      </div>
       
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      
  }
},
methods:{
  login(){
    this.$router.push("/login");
  },
  denglu(){
    this.$router.push("/denglu");
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom
{
  width: 100%;
  display: flex;
  justify-content:space-between;
}
.login a
{
  color: black;
  text-decoration: none;
}
.manner{
  width: 30%;
  display: flex;
   justify-content:space-between;
}
.bottomName
{
  width: 100%;
  margin-top: 1rem;
}
.bottomName p
{
  text-align: center;
}
.bottomBox{
  height: 6rem;
  margin-bottom: 6rem;
    margin-top: 1rem;
}
</style>