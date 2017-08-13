<template>
<div>
    <div class="header">
          <img src="../../../static/img/classify/new-back.png" class="back" @click="backs">
        <p class="title">我的优购</p>
        <img src='../../../static/img/classify/ico-menu.png' class="menu" @click='tab' />
      </div>
       <ul class="box" v-show="isShow">
       <li>
         <img src="http://pic.yougou.com/pics/mobile/appointment/indexNicon/home-red.png" alt="">
         <p>首页</p>
       </li>
       <li>
         <img src="http://pic.yougou.com/pics/mobile/appointment/indexNicon/share_shoppingw.png" alt="">
         <p>海外购</p>
       </li>
       <li>
         <img src="http://pic.yougou.com/pics/mobile/appointment/indexNicon/car-gray.png" alt="">
         <p>购物车</p>
       </li>
       <li>
          <img src="http://pic.yougou.com/pics/mobile/appointment/indexNicon/center-gray.png" alt="">
         <p>我的</p>
       </li>
     </ul>
</div>
  
</template>

<script>
export default {
  name: 'mineheader',
  data () {
    return {
    isShow:false
    }
  },
  methods:{
    tab(){
      this.isShow =! this.isShow
    },
    backs(){
      this.$router.back(-1)
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
  background:#f8f8f8;
  display: flex;
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
.box{
  display: flex;
  justify-content:space-around;    
}
.box li img
{
  width: 2rem;
  height: 2rem;
}
</style>