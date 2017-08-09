<template>
  <div>
    <div class="remind">
      <img src="../../../static/img/msg.jpg" alt="">
      <p>提醒会员谨防诈骗电话</p>
    </div>
    <div class="Concessions">
      <p>U惠购</p>
      <p>查看全部</p>
    </div>
   <swiper :options="swiperOption" ref="mySwiper" class="swiper">
          <swiper-slide v-for='obj in data'><img :src="obj.img" :class="swiper-slide-img"><p>￥{{obj.title1}} <span>￥{{obj.title2}}</span></p></swiper-slide>
        <!-- Add Pagination -->
    </swiper>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from "axios"

export default {
  name: 'drag',
  data () {
    return {
     swiperOption: {
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
      },
      data:true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created(){
    var that=this;
    axios.get("../../static/json/a.json").then(res=>{
      that.data=res.data.drag
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.remind
{
  width: 100%;
  height: 3rem;
  display: flex;
}
.remind img
{
  width: 8rem;
  height: 3rem;
}
.remind p
{
  height: 2.5rem;
  margin-left: 1rem;
  margin-top: 0.2rem;
  line-height: 2.5rem;
  border-left: 1px solid grey;
  padding-left: 1rem;
  font-size: 1.2rem;
}
.Concessions
{
  width: 96%;
  margin: auto;
  height: 3rem;
  font-size: 1.2rem;
  line-height: 3rem;
  display: flex;
  justify-content:space-between;
}
.swiper-slide img{
  width: 100%;
}
.swiper-slide p
{
  color: red;
  text-align: center;
}
.swiper-slide span
{
  color: grey;
  text-decoration: line-through;
}
</style>