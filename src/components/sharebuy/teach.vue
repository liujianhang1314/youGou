<template>
  <div class="teach">
    <img src="http://i1.ygimg.cn/pics/mobile/homepage/2016/12/1480582469882.jpg" class="logo" >
    <ul class="teachUl">
      <li>
        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1486524421690.jpg" alt="">
        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1486524464269.jpg" alt="">
      </li>
      <li>
        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1486548476731.jpg" alt="">
        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1486524480729.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'teach',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teach
{
  width: 100%;
  background-color: black;
  margin-bottom: 5rem;
}
.logo
{
  width: 100%;
}
.teachUl
{
   width: 100%;
   display: flex; 
   justify-content:space-between;
}
.teachUl li
{
  width: 48%;
}
.teachUl li img 
{
  width: 100%;
}
</style>