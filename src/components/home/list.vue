<template>
    <div>
    <div class="search-box"  >
      <img src='http://m.yougou.com/images/new-back.png' class='logo' @click="backs"/>
      <div class='search'>
        <p>商品列表</p>
      </div>
    <div>
      <img src='http://m.yougou.com/images/ico-menu.png' class="message" />
    </div>
  </div>
    <liebiao></liebiao>
    <a href="javascript:scroll(0,0)" class="a" v-show="scrolled">
      <img src="../../assets/goTop.png" />
    </a>
  </div>

</template>

<script>

import liebiao from "@/components/home/liebiao"

export default {
  name: 'juan',
  data () {
    return {
     scrolled:false
  }
},
mounted(){
      //获取网页高度值


// 1 先绑定 scroll 事件
        var map = {};
        window.onhashchange = function() {
            document.body.scrollTop = 0;
        }
        /*  2 再屏蔽掉浏览器自动恢复滚动位置行为带来的影响
            a 在 hashchange 时强制 document.body.scrollTop = 0
            b 在 scroll 事件里面, 当 document.body.scrollTop = 0 的时候不做 存操作.*/
        window.onscroll = function() {
            if (document.body.scrollTop) {
                // 存
                map[location.hash] = document.body.scrollTop;
            } else {
                var timer = null;
                //3 在读操作里面, 设置一个定时任务, 去判断 document.body.scrollTop 的值和你保存的位置是不是相同的
                timer = setInterval(function(){
                    if (document.body.scrollTop == map[location.hash]) {
                        clearInterval(timer);
                        map={}
                    } else {
                        document.body.scrollTop = map[location.hash];
                    }
                }, 20);
            }
        }
         window.addEventListener('scroll', this.handleScroll);
},
methods:{
  backs(){
    this.$router.back(-1);
  },
handleScroll(){
  this.scrolled=document.body.scrollTop>500;
}
},
components:{
  liebiao:liebiao
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
  border-bottom: 1px solid #eee;
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
.search p
{
  font-size:1.8rem;
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
}
.a
{
  position: fixed;
  bottom: 10rem;
  right: 0;
}
.a img
{
  width: 3rem;
  height: 3rem;
}
</style>