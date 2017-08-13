<template>
  <div >
    <top></top>
    <shareimg></shareimg>
    <upcarousel></upcarousel>
    <teach></teach>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import top from '@/components/sharebuy/top'
import shareimg from '@/components/sharebuy/shareimg'
import upcarousel from '@/components/sharebuy/upcarousel'
import teach from '@/components/sharebuy/teach'
import tabBar from '@/components/tabBar'
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
    teach,
    tabBar
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
