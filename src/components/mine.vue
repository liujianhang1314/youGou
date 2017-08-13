<template>
  <div class="mine">
    <mineheader></mineheader>
    <zhuanghu></zhuanghu>
    <dingdan></dingdan>
    <wallet></wallet>
    <shoes></shoes>
    <bottom></bottom>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import mineheader from "@/components/mine/mineheader"
import zhuanghu from "@/components/mine/zhuanghu"
import dingdan from "@/components/mine/dingdan"
import wallet from "@/components/mine/wallet"
import shoes from "@/components/mine/shoes"
import bottom from "@/components/mine/bottom"
import tabBar from "@/components/tabBar"
export default {
  name: 'mine',
  data () {
    return {
        
    }
  },
 components:{
    mineheader,
    zhuanghu,
    dingdan,
    wallet,
    shoes,
    bottom,
    tabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
