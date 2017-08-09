<template>
  <div class="share">
   <div class="backDiv">
      
    </div>
    <ul class="coupons">
      <li>
        <p class="price">￥<span>20</span></p>
        <p class="del">-满299可用-</p>
        <div>
          运动专享劵 >
        </div>
      </li>
      <li>
        <p class="price">￥<span>30</span></p>
        <p class="del">-无门槛-</p>
        <div>
          男女鞋专享劵
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shareimg',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.share
{
  width: 100%;
  background-color: black;
}
.backDiv
{width: 100%;
  height: 32rem;
  background-image: url("http://i1.ygimg.cn/pics/mobile/appointment/share/1024/banner-bg.jpg");
  background-size: 100% 100%;
}
.login
{
  display: flex;
  color: white;
    height: 4rem;
    line-height: 4rem;
}
.login img
{
  width: 4rem;
  height: 4rem;
}
.coupons
{
  width: 95%;
  margin: auto;
  display: flex;
  justify-content:space-between;
}
.coupons li
{
  width: 48%;
  height: 7rem;
  border: 1px solid #d6b87b;
  text-align: center;
}
.price
{
  color: #d6b87b;
}
.price span
{
  font-size: 2rem;
}
.del
{
    color: #d6b87b;
    margin-bottom: 0.5rem;
}
.coupons li div
{
  height: 2rem;
  width: 50%;
  margin: auto;
  line-height: 2rem;
  background-color: red;
  color: white;
}
</style>