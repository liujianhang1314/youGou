<template>
  <div>
   <top></top>
   <carousel></carousel>
   <discount></discount>
   <drag></drag>
   <bottom></bottom>
  </div>
</template>

<script>
import top from "@/components/home/top"
import carousel from "@/components/home/carousel"
import discount from "@/components/home/discount"
import drag from '@/components/home/drag'
import bottom from '@/components/home/bottom'
export default {
  name: 'tabbar',
  data () {
    return {
    
    }
  },components:{
    top,
    carousel,
    discount,
    drag,
    bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    display: flex;            
    justify-content: space-around;
    list-style: none;
    text-align: center;
    border:1px solid;
    z-index: 5;
    background-color: white;
}

.tabbar a{
    text-decoration: none;
    color:grey;
} 
.tabbar img{
  width:2rem;
  height:2rem;
  margin-top:0.4rem;
}

</style>
