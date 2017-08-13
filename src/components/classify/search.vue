<template>
<div>
 <div class="search-box">
    <img src='../../../static/img/classify/new-back.png' class='back' @click='backs'/>
 
      
        <img src='../../../static/img/classify/ico-menu.png' class="message" />
    </div>
  </div>
   
</div>
 
</template>

<script>
import bus from "../../assets/bus";
export default {
  name: 'search',
  data(){
    return {
      aa:''
    }
  },
  methods:{
    backs(){
      this.$router.back(-1);
    }
    // ,change(){
    //   this.$router.push({path:"/list",query:{tex:this.$refs.text.value}})
    //   // this.aa=this.$refs.text.value;
    //   // bus.$emit("userDefinedEvent",this.aa)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box
{
  width:100%;
  height:4.9rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display:flex;
  justify-content: space-between;
  background:#f8f8f8;
}
.search
{
  width:68%;
  margin:auto;
  display:flex;
  border-radius: 0.9rem;
  background: #e6e6e6;
  color: #A9A9A9;
}
.search input
{
  width:90%;
  height:3rem;
  border-radius: 0.9rem;
  margin-top:0.4rem;
  border:none;
  outline:medium;
  background: #e6e6e6;
  color: #A9A9A9;
}
.search span
{
 font-size: 1.2rem;
  margin-top:0.9rem;
}
.back
{
  width:2rem;
  height:2rem;
  margin-top: 1.1rem;
  margin-left: 1rem;
}
.message
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}

</style>