 <template>
  <div class="shopcar">
      <cartop></cartop>
      <div class="goods" v-for='(obj,index) in goodsArr'>
        <p class="name">{{obj.title}}</p>
        <div class="goodsImg">
          <div class="imgDiv">
            <img v-bind:src="src" class="duihao" ref='duihao' @click='danxuan(obj)'>
            <img :src="obj.img" class="imgs">
          </div>
          <div class="jiage">
            <p class="prices">￥{{obj.price}}</p>
            <div class="caozuo">
              <div class="jian" @click="obj.num<2 ?obj.num=1:obj.num--,zongjia()">-</div>
            <input type="num" class="num" v-model="obj.num" >
            <div class="jia" @click="obj.num++,zongjia()">+</div>
            </div>
           
          </div>
          
          <img src="../assets/del.png" class="del" @click="del(obj.id,index)">
        </div> 
         <p class="cols"><span>颜色：{{obj.color}}</span><br><span>尺码：{{obj.size}}</span></p>   
      </div>
      <div class="quanxuan">
        <p>
          <img src="../../static/img/goods.png" class="topImg" @click='quanxuan'>全部
        </p>
        <p >总计：<span v-model='heji'>{{heji}}</span></p>
        <p class="jiesuan">
          去结算
        </p>
      </div>
  </div>
</template>

<script>
import cartop from "@/components/shopcar/cartop"
import  axios from "axios"


export default {
  name: 'shopcar',
  data () {
    return {
      goodsArr:[],
      uidd:'',
      nums:"",
      prices:0,
      heji:0,
      src:"../../static/img/goods.png",
      uid:''
    }
  },
  components:{
    cartop
  },
  created(){
     
        this.uid=sessionStorage.getItem("uid");
        if(this.uid==undefined){
          this.goodsArr=JSON.parse(localStorage.getItem("person")).data;
          console.log(this.goodsArr)
          this.zongjia()
        }
      axios.get("http://localhost:6500/bai/"+this.uid).then((res)=>{
        this.goodsArr=JSON.parse(res.data.zhan);
        this.zongjia();
    
      }).catch(function(err){
        console.log(err)
       });
    
  },
  methods:{
    //全选
    quanxuan(){
      //通过ref获取所有的单选img的属性，
      for(var i=0;i<this.$refs.duihao.length;i++){
        //判断图片属性
        if(this.$refs.duihao[i].src=="http://localhost:8080/static/img/goods.png"){
          this.$refs.duihao[i].src="../../static/img/good-1.png";
          
          this.prices=0;
        }else{
         this.$refs.duihao[i].src="../../static/img/goods.png";
  
         this.prices=this.zongjia
        }
      }
    },
    //单选
    danxuan(obj,e){
             e=e ||window.event;
      if (e.target.src== "http://localhost:8080/static/img/goods.png") {
            e.target.src="../../static/img/good-1.png"
            this.heji=this.heji-(obj.num*obj.price)
        } else {
           e.target.src="../../static/img/goods.png"
          this.heji=this.heji+(obj.num*obj.price)
        }
    },
    //删除
    del(obj,index,e){
      e=e || window.event;
      e.target.parentNode.parentNode.remove();
       delete this.goodsArr[index]
        this.gai(this.goodsArr);
         localStorage.removeItem(localStorage[index])
         this.zongjia()
         sessionStorage.removeItem("suns")
    },
    //总价
    zongjia(){
      var a=0;
      for(var n in this.goodsArr){

          a +=this.goodsArr[n].price*this.goodsArr[n].num;  
          console.log(this.goodsArr[n].price) 
      }

      this.heji=a.toFixed(2);
      this.gai(this.goodsArr);
    },
    //更新数据
    gai(tt) {
        //  JSON.stringify(）是从一个对象解析出JSON字符串
        this.gai0 = JSON.stringify(tt);
        //修改 后将值传到对应ID 第一个参数是路径  第二个参数是要传的对象
        axios.put("http://localhost:6500/bai/" + this.uid, {
          zhan: this.gai0
        }).then((res) => {
          console.log("成功");
          this.aa()
        }, function (err) {
          console.log("错误" + err)
        });
      },
      //封装的获取
      aa() {
        axios.get("http://localhost:6500/bai/" + this.uid).then((res) => {
          //从json对象中解析出json字符串
          this.arr = JSON.parse(res.data.zhan);
        })
  }
 } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all
{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  display: flex;
}
.all p
{
    margin-left: 3rem;
}
.duihao
{
  width: 2rem;
  margin-top: 0.5rem;
  height: 2rem;
}
.goods
{
  width: 100%;
  border-bottom:1px solid #ccc;
  margin-top: 1rem;
}
.goodsImg
{
  width: 100%;
  display: flex;
  justify-content:space-between;
}
.imgDiv
{
   display: flex;
}
.jiage
{
  width: 50%;
  height: 3rem;
  display: flex;
  margin-top: 1rem;
  justify-content:space-around;
}
.imgs
{
  width: 6rem;
  height: 6rem;
}
.topImg
{
  width: 2rem;
  height: 2rem;

}
.caozuo
{
  display: flex;
  margin-left: 2rem;
}
.duihao
{
  width: 2rem;
  height: 2rem;
  margin-top: 2rem;
}
.name
{
  width: 80%;
  margin-left: 2rem;
  overflow:hidden;
  text-overflow:ellipsis; 
  -o-text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 1.5rem;
}
.jiage input
{
  width: 28%;
  height: 2.85rem;
  text-align: center;
}
.jian
{
  width: 2rem;
  border: 1px solid;
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  font-size: 1.5rem;
}
.jia
{
   width: 2rem;
  border: 1px solid;
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  font-size: 1.5rem;
}
.del
{
  width: 3rem;
  height: 3rem;
  float: right;
  margin-top: 2rem;
}
.prices
{
  width: 50%;
  font-size: 1.3rem;
  margin-top: 0.5rem;
}
.quanxuan
{
  width: 100%;
  height: 4.9rem;
  display: flex;
  justify-content:space-between;
  line-height: 4.9rem;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 999;
}
.jiesuan
{
  width: 20%;
  height: 100%;
  color: white;
  background-color: red;
  text-align: center;
}
.cols
{
  margin-left: 35%;
}
</style>
