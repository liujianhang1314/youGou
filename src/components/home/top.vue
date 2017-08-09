<template>
<div>
  <div class="search-box"  ref="changeColor">
    <img src='../../assets/logo.png' class='logo'/>
    <div class='search'>
      <input type="text" placeholder="耐克鞋服 折后最高减50券" @click="change">
      <img src="../../../static/img/classify/fdj.jpg" class="jpg" >
    </div>
    <div>
      <img src='../../assets/information-small.png' class="message" /><p style="color:white">消息</p>
    </div>
  </div>
  <div class="chuxian" v-show='isHide'>
     <div class="box"  >
    <p @click='fanhui'>X</p>
    <div class='searchs'>
      <input type="text" placeholder="耐克鞋服 折后最高减50券" v-model='msg'>
      <img src="../../../static/img/classify/fdj.jpg" class="jpg" @click='jpg' >
    </div>
  </div>
  <p>热门搜索</p>
  <ul class="hotSearch">
    <li v-for='(a,index) in lists' @click='inputValue(index)'>{{a}}</li>       
  </ul>
  <ul>
    <li v-for='a in srr'>
      {{a}}
    </li>
  </ul>
  <p @click='dele'>{{del}}</p>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'top',
  data(){
    return {
      isHide:false,
       scroll:true,
      lists:["百丽","卡骆驰","真美诗","思加图"],
      msg:"",
      a:true,
      srr:[],
      del:''
    }
  },
  mounted(){
     window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
   change(){
      this.isHide=true
   },
    inputValue(index){
        this.msg=this.lists[index];
        this.a=index;

      }
        ,

        fanhui(){
          this.isHide=false
        },
        jpg(){
         sessionStorage.setItem("message",this.msg)
          this.srr.push(sessionStorage.getItem("message"))
          this.del="清除历史记录"
           this.$router.push({path:"/list", query:{id:this.msg}})
        },
        dele(){
          this.srr.length=0;
          this.del=""
        },
        handleScroll(){
          if(document.body.scrollTop>200){
            this.$refs.changeColor.setAttribute("class","search-box1")
          }else{
            this.$refs.changeColor.setAttribute("class","search-box")
          }
        }

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
  justify-content: space-around;
  background:rgba(0,0,0,0);
}
.search-box1
{
  width:100%;
  height:4.9rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display:flex;
  justify-content: space-around;
  background:red;
}
.search
{
  width:68%;
  margin:auto;
    height:3rem;

  display:flex;
    border-radius: 0.8rem;
  background: #e6e6e6;
  color: #A9A9A9;
}
.search input
{
  width:90%;
  height:100%;
   border-radius: 0.8rem;
  border:none;
  outline:medium;
  background: #e6e6e6;
  color: #A9A9A9;
}
.jpg
{
  width: 15%;
  height: 100%;
   border-radius: 0.8rem;
}
.logo
{
  width:5rem;
  height:3rem;
  margin-top: 0.95rem;
}
.message
{
  width:2rem;
  margin-right: 0.5rem;
  margin-top: 1.05rem;
  height:2rem;
}
.search-box a
{
  color: white;
}
.box
{
  width:100%;
  height:4.9rem;
  display:flex;
  background-color: white;
  line-height: 4.9rem;
}
.box p
{
  margin-left: 2rem;
}
.searchs
{
  width:68%;
  margin:auto;
  border:1px solid;
  display:flex;
    border-radius: 0.8rem;
  color: #A9A9A9;
}
.searchs input
{
  width:90%;
  height:2rem;

  margin-top:0.4rem;
  border:none;
  outline:medium;
}
.searchs img
{
  font-size:2rem;
  margin-top:0.5rem;
}
.hotSearch 
{
  width: 100%;
  display: flex;
}
.hotSearch li
{
  margin-left: 2rem;
}
.chuxian
{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 22;
  background-color: white;
}
</style>
