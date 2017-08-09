<template>
  <div class="upcarousel">
    <img src="http://i1.ygimg.cn/pics/shop/zhu_zhan/share/1128/tou_tiao_kuai_xun_.png" alt="">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="n in listImg" :key='n'>
        {{n.title}}
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'upcarousel',
  data () {
   return {
      swiperOption: {
        autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
       direction: 'vertical'
      },
      listImg:[
        {
          title:'用户18****72 今日赚取红利￥3.96'
        },
        {
         title:'用户17****98 今日赚取红利￥7.12'
        },
        {
         title:'用户13****13 今日赚取红利￥30.44'
        },
        {
          title:'用户18****22 今日赚取红利￥14.32'
        },
        {
          title:'用户17****98 今日赚取红利￥9.92'
        },
        {
         title:'用户17****98 今日赚取红利￥7.92'
        },
        {
          title:'用户17****98 今日赚取红利￥8.32'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upcarousel
{
  width: 100%;
  display: flex;
  height: 4rem;
  line-height: 4rem;
  background: black;
}
.upcarousel img
{
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  padding-right: 0.5rem;
  border-right: 1px solid white;
}
.swiper
{
  color: white;
}
</style>