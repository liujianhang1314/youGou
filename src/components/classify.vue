<template>
  <div class="classify">
      <search></search>
      <productlist></productlist>
  </div>
</template>

<script>
import search from '@/components/classify/search.vue'
import productlist from '@/components/classify/productlist.vue'
export default {
  name: 'classify',
  data () {
    return {
      
  }
},
  components:{
    search,
    productlist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
