<template>
  <div >
    <top></top>
    <shareimg></shareimg>
    <upcarousel></upcarousel>
    <teach></teach>
  </div>
</template>

<script>
import top from '@/components/sharebuy/top'
import shareimg from '@/components/sharebuy/shareimg'
import upcarousel from '@/components/sharebuy/upcarousel'
import teach from '@/components/sharebuy/teach'
//瀵煎嚭缁勪欢/瀵硅薄锛屽悕瀛楁槸home
export default {
  name: 'sharebuy',
  data () {
    return {
     
    }
  },
   components:{
    top,
    shareimg,
    upcarousel,
    teach
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
