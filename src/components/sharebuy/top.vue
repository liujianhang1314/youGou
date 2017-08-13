<template>
  <div class="top">
    <img src="../../../static/img/classify/new-back.png" @click="backs">
    <p @click='share'>分享购</p>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
    
    }
  },
  methods:{
    backs(){
      this.$router.back(-1);
    },
    share(){
      console.log(this.$root.hello)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top
{
  width: 100%;
  height: 4.4rem;
    background:#f8f8f8;
  display: flex;
  justify-content:space-between;
}
.top img
{
  width: 2rem;
  height: 2rem;
  margin-top: 1.1rem;
}
.top p
{
  font-size: 1.5rem;
  line-height: 4.4rem;
}
</style>