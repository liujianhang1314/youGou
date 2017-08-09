<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="n in data" :key='n'>
        <img :src="n"  class="swiper-slide-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>

  </div>

</template>

<script>

import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from "axios"

export default {
  name: 'carousel',
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        observer:true,
        prevButton:'.swiper-button-prev',//上一张
        nextButton:'.swiper-button-next',//下一张
      },
      data:true
    }
  },
  created(){
    var that=this;
    axios.get("../../static/json/a.json").then(res=>{
        that.data=res.data.lunbo
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
 

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper img{
  width: 100%;
  height: 26.5rem;
  z-index: -2;
}
</style>