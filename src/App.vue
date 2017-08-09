<template>
  <div id="app">
  <navigation>
    <router-view></router-view>
    </navigation>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }

 }
 //,
//   created () {
//   console.log(this.getStatus(this.$route.path))
// },
//  watch: {
//    '$route' (to, from) {
//      console.log(this.getStatus(this.$route.path))
//    }
//  },
//  methods: {
//     getStatus (urlStr) {
//       var urlStrArr = urlStr.split('/')
//       return urlStrArr[urlStrArr.length - 1]
//     }
// }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
body
{
  max-width:640px;
  min-width:320px;
  margin: auto;
}
html
{
  font-size:62.5%;
}
</style>
