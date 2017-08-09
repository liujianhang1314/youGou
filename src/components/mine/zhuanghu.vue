<template>
  <div class="header">
    <div class="wrap">
      <div class="box">
        <img src="http://i1.ygimg.cn/pics/shop/zhu_zhan/share/919/head.png" alt="">
        <div class="pbox">
          <p>{{msg}}</p>
          <p>普通会员</p>
        </div>
    </div>
      <div class="msg">
        <img src="../../assets/information-small.png" alt="">
        <p>账户管理 > </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhuanghu',
  data () {
    return {
        msg:'用户名'
    }
  },
  mounted(){
    this.msg=sessionStorage.getItem("selfId")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header
{
  width: 100%;

}
.wrap
{
  width: 100%;
  height: 8rem;
  background-color: red;
    display: flex;
    justify-content:space-between;
}
.box
{
  display: flex;
}
.box img
{
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
}
.pbox
{
  color: white;
  margin-top: 2rem;
}
.pbox :nth-child(2){
  width: 6rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background-color: #bd2302;
  border-radius: 1rem;
}
.msg img
{
  width: 2rem;
  height: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
}
.msg p
{
  color: white;
}
</style>