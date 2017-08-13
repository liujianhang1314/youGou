<template>
  <div>
     <div class="my">
       <p>我的钱包</p>
       <p></p>
     </div>
     <ul class="money">
       <li>
         <p>0</p>
         <p>礼品卡</p>
       </li>
       <li>
         <p>0</p>
         <p>优惠券</p>
       </li>
       <li>
         <p>0</p>
         <p>积分</p>
       </li>
       <li>
          <img src="http://m.yougou.com/images/myYG/dividend.png" @click="a">
         <p>分享购</p>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'wallet',
  data () {
    return {
    
    }
  },
  methods:{
    a(){
      this.$router.push('/aaa')
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
  margin-top: 1rem;
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

  text-align: center;
  margin-top: 1rem;
}
.money li  img
{
  width: 23%;
}
.money li :nth-child(1){
  font-size: 1.4rem;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
}
</style>