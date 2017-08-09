<template>
  <div>
     <div class="my" @click="dingdan">
       <p>我的订单</p>
       <p>全部订单 > </p>
     </div>
     <ul class="money">
       <li>
         <img src="http://m.yougou.com/images/myYG/pay.png" alt="">
         <p>代付款</p>
       </li>
       <li>
         <img src="http://m.yougou.com/images/myYG/logistics.png" alt="">
         <p>代付款</p>
       </li>
       <li>
         <img src="http://m.yougou.com/images/myYG/evaluate.png" alt="">
         <p>代付款</p>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'dingdan',
  data () {
    return {
    
    }
  },
  methods:{
    dingdan(){
      this.$router.push('/mydingdan')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my
{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
}
.my p
{
  font-size: 1.6rem;
  line-height: 3rem;
}
.money
{
  width: 100%;
  display: flex;
 justify-content:space-around;
}
.money li 
{
  width: 33%;
  text-align: center;
  margin-top: 1rem;
}
.money li  img
{
  width: 30%;
}
</style>