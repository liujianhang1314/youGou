<template>
<div>
    <router-view></router-view>
    <ul class="tabbar">
       <li v-for="(obj,index) in list">
        <router-link :to="obj.to" :class="obj.cla"  :activeClass="obj.activeCla"  >
          </router-link>
        <p>{{obj.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',

  data () {
    return {
      requireAuth:true,
     list:[
      {
        to:"/home",
        title:'首页',
        cla:'homeCla',
         activeCla:'activeHome'
      },
            {
        to:"/classify",
        title:'分类',
        cla:'classifyCla',
         activeCla:'activeClassify'
      },
            {
        to:"/sharebuy",
        title:'分享购',
        cla:'sharebuyCla',
         activeCla:'activeSharebuy'
      },
          {
        to:"/shopcar",
        title:'购物车',
         cla:'shopcarCla',
         activeCla:'activeShopcar'
      },
            {
        to:this.requireAuth,
        title:'我的',
         cla:'dengluCla',
         activeCla:'activeDenglu'
      }
     ],
     
   
    }
  },
  beforeCreate(){
    //模板渲染之前，先去本地临时存储中找一下有没有用户id名
    //如果用户id名存在，就跳转到个人购物车页面
    let userId=sessionStorage.getItem("selfId");
    if(userId){
      this.requireAuth = "/mine"
    }else if(userId==null){
      this.requireAuth = "/denglu"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{
  list-style: none;
  width:100%;
  position:fixed;
  bottom:0;
  height:4.9rem;
  background-color:white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-top:1px solid plum;
  z-index:39;
}
.tabbar li{
  width:20%;
  margin-top: 0.5rem;
}
.tabbar a{
  width: 2.5rem;
  height:2.5rem;
  display: inline-block;
  text-decoration: none;
}
.homeCla 
{
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/home.png);
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
}

  .activeHome
{
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/home_1.png);
     background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
}
.classifyCla 
{
     background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/brand.png);
      background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
}
 .activeClassify {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/brand_1.png);
     background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
  }
.sharebuyCla 
{
     background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/by_icon.png);
      background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
}
.activeSharebuy{
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/by_icon_1.png);
     background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
  }
.shopcarCla
{
   background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/hot.png);
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-position: 0 -8%;
}
.activeShopcar  {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/hot_1.png);
     background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
   }
.dengluCla 
{
   background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/user.png);
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
}
.activeDenglu {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/user_1.png);
     background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
   }
   .activeHome~p,.activeClassify~p,.activeSharebuy~p,.activeShopcar~p,.activeDenglu~p{
  color:green;
}
</style>
