<template>
  <div >
      <ul class="discount">
      	<li>
      		<img src="../../../static/img/d1.png" alt="" >
      	</li>
      	<li>
      		<img src="../../../static/img/d2.png" alt="">
      	</li>
      	<li>
      		<img src="../../../static/img/d3.png" alt="">
      	</li>
      	<li>
      		<img src="../../../static/img/d4.png" alt="">
      	</li>
      </ul>
      <ul class="juan">
      	<li>
      		<img src="../../../static/img/d8.jpg" @click="jump" >
      	</li>
      	<li>
      		<img src="../../../static/img/d6.jpg" alt="">
      	</li>
      	<li>
      		<img src="../../../static/img/d7.jpg" alt="">
      	</li>
      	<li>
      		<img src="../../../static/img/d5.jpg" alt="">
      	</li>
      </ul>
  </div>
</template>
<script>
import axios from "axios"
	export default{
		name:'discount',
		data(){
			return {
                        data:true
			}

                  
  },
  created(){
  var  self=this
  axios.get("http://localhost:4000/home").then(res=>{
    self.data=res.data.price;
    console.log(self.data)
  })
},
methods:{
      
  jump(){
    this.$router.push({path:"/juan", query:{id:this.data}})
  }
   


		}
	}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discount 
{
	max-width: 640;
	width: 100%;
	display:flex;
}
.discount li
{
	width: 25%;
}
.discount li  img
{
	width: 100%;
}
.juan{
	max-width: 640;
	width: 100%;

	display:flex;
	flex-flow:row wrap;
}
.juan li
{
	width: 50%;
}
.juan li  img
{
	width: 100%;
}
</style>