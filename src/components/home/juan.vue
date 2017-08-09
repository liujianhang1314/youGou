<template>
    <div>
      <div class="top">
          <img src="../../../static/img/classify/new-back.png" @click="backs" class="back">
          <p>分享购</p>
          <img src="http://m.yougou.com/images/ico-menu.png" class="menu" >
      </div>
        <div class="divs">
        <img v-for="n in arr" :src="n" >
     </div>
  </div>
</template>

<script>
export default {
  name: 'juan',
  data () {
    return {
      arr:true
  }
},
mounted(){
  this.arr=this.$route.query.id;
  console.log(this.arr)
},
methods:{
  backs(){
    this.$router.back(-1);
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
  display: flex;
  border: 1px solid;
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
.choicenessImg
{
  width: 100%;
}
.choiceness
{
  width: 100%;
  display: flex;
  }
  .choiceness img{
    width: 25%;
    height: 25%;
  }
    .divs
  {
    width: 100%;
  }

  .divs img
  {
    width: 100%;
  }
</style>