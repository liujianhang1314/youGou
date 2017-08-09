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
  name: 'tabbar',

  data () {
    return {
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
        to:"/mine",
        title:'我的',
         cla:'dengluCla',
         activeCla:'activeDenglu'
      },
     ]
   
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
    background-repeat: no-repeat;
    background-position: center;
}

  .activeHome
{
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/home_1.png);
}
.classifyCla 
{
     background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/brand.png);
    background-repeat: no-repeat;
    background-position: center;
}
 .activeClassify {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/brand_1.png);
  }
.sharebuyCla 
{
     background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/by_icon.png);
    background-repeat: no-repeat;
    background-position: center;
}
.activeSharebuy{
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/by_icon_1.png);
  }
.shopcarCla
{
   background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/hot.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position: 0 -8%;
}
.activeShopcar  {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/hot_1.png);
   }
.dengluCla 
{
   background-image:url(//s.ebaoyang.cn/mobile/src/img/newH5/user.png);
    background-repeat: no-repeat;
    background-position: center;
}
.activeDenglu {
    background-image: url(//s.ebaoyang.cn/mobile/src/img/newH5/user_1.png);
   }
   .activeHome~p,.activeClassify~p,.activeSharebuy~p,.activeShopcar~p,.activeDenglu~p{
  color:green;
}
</style>
