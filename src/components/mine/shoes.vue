<template>
  <div>
     <div class="my">
       <p>我的鞋管家</p>
       <p> > </p>
     </div>
     <ul class="money">
       <li>
         <img src="http://m.yougou.com/images/myYG/member.png" alt="">
         <p>用户中心</p>
       </li>
       <li>
         <img src="http://m.yougou.com/images/myYG/integration.png" alt="">
         <p>积分商城</p>
       </li>
       <li>
         <img src="http://m.yougou.com/images/myYG/past.png" alt="">
         <p>每日签到</p>
       </li>
       <li>
          <img src="http://m.yougou.com/images/myYG/service.png" alt="">
         <p>联系客服</p>
       </li>
       <li>
          <img src="http://m.yougou.com/images/myYG/collection.png" alt="">
         <p>我的收藏</p>
       </li>
       <li>
          <img src="http://m.yougou.com/images/myYG/help.png" alt="">
         <p>帮助中心</p>
       </li>
       <li>
          <img src="http://m.yougou.com/images/myYG/suguession.png" alt="">
         <p>意见反馈</p>
       </li>
       <li @click="exit">
         <img src="https://m.zuipin.cn/wap/images/%E4%BA%BA.png" alt="">
          <p>退出登录</p>
       </li>
     </ul>
     
  </div>
</template>

<script>
export default {
  name: 'wallet',
  data () {
    return {
     
    }
  },
  methods:{
      exit(){
    sessionStorage.clear();
    this.$router.push('/denglu')
  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my
{
  width: 100%;
  height: 3rem;
  display: flex;
  margin-top: 2rem;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
}
.my p
{
  font-size: 1.4rem;
  line-height: 3rem;
}
.money
{
  width: 100%;
  display: flex;
  flex-flow:row wrap;
}
.money li 
{
  width: 25%;
  text-align: center;
  margin-top: 1rem;

}
.money li  img
{
  width: 23%;
}
.exit
{
  width: 80%;
  height: 4rem;
  background-color: red;
  line-height: 4rem;
  text-align: center;
  color: white;
  margin: auto;
  margin-top: 1rem;
}
</style>