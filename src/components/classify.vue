<template>
  <div class="classify">
      <search></search>
      <productlist></productlist>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
import search from '@/components/classify/search.vue'
import tabBar from '@/components/tabBar'
import productlist from '@/components/classify/productlist.vue'
export default {
  name: 'classify',
  data () {
    return {
      
  }
},
  components:{
    search,
    productlist,
    tabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
