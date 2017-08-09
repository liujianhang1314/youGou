<template>
  <div>
    
  </div>
</template>

<script>
import axios from  "axios"
export default {
  name: 'shaixuan',
  data () {
    return {
      text:true,
      brr:true,
      classText:'',
      isHide:false
  }
}
methods:{
 
       

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box
{
  width: 100%;
  height: 4.4rem;
  display: flex;
  border: 1px solid;
  justify-content:space-between;
}
.logo
{
  width: 2rem;
  height: 2rem;
  margin-top: 1.1rem;
}
.search
{
  line-height: 4.4rem;

}
.search input
{
  width:90%;
  height:3rem;

  margin-top:0.4rem;
  border:none;
  outline:medium;
  background: #e6e6e6;
  color: #A9A9A9;
}
.search span
{
  font-size:2rem;
  margin-top:1.1rem;
}
.message
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
.paixu
{
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content:space-around;
  text-align: center;
  line-height: 4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.goodsList
{
  width: 100%;
  display: flex;
  flex-flow:row wrap;
}
.goodsList li
{
  width:45%;
  margin-left: 3%;
}
.goodsList li img
{
  width: 80%;
}
.price
{
  color: red;
}
.price span
{
  color: #ccc;
  text-decoration: line-through;
}
.name{
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
}
</style>