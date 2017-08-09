<template>
  <div class="cartop">
    <img src="../../../static/img/classify/new-back.png" class="back" @click='backs'/>
    <p class="title">分享购</p>
    <div class="login">
       <img src='../../../static/img/classify/ico-menu.png' class="menu" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartop',
  data () {
    return {
    
    }
  },
  methods:{
  
    backs(){
      this.$router.back(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartop
{
  width: 100%;
  height: 4.4rem;
  background:#ccc;
  display: flex;
  justify-content:space-between;
}
.back
{
  width:2rem;
  height:2rem;
  margin-top: 1.1rem;
  margin-left: 1rem;
}
.title
{
  font-size: 2rem;
line-height: 4.4rem;
}
.login 
{
  display: flex;
}
.login p
{
  font-size: 1.5rem;
line-height: 4.4rem;
}
.menu
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
</style>