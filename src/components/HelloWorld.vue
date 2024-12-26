<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="menu">
    <a href="#" v-for="(item, idx) in menu" :key="idx">{{ idx }}</a>
  </div>

  <div v-for="(item, idx) in products_obj" :key="idx">
      <img :src="item.img" :alt="item.tit">
      <h4>{{  item.tit }}</h4>
      <p>{{ item.price }}</p>
      <button type="button" v-on:click="item.report +=1">신고</button>
      <p>신고수 : {{ item.report }}</p>
  </div>
  <div class="black-bg" v-if="modalOpen">
      <div class="white-bg">
          <h4>상세페이지</h4>
          <p>상세페이지 내용</p>
          <button type="button" v-on:click="modalOpen = false">닫기</button>
      </div>
  </div>
  <button type="button" v-on:click="modalOpen = true">누르면 팝업</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      price1: 60,
      price2: 70,
      products: ['역삼동'],
      products_obj: [
      {
          tit: '역삼동 원룸',
          price: 60,
          img: require('../assets/logo.png'),
          report: 0,
        },
        {
          tit: '천호동 원룸',
          img: require('../assets/3d_center.png'),
          price: 70,
          report: 0,
        },
        {
          tit: '마포구 원룸',
          img: require('../assets/cap.png'),
          price: 80,
          report: 0,
        },
      ],
      menu: ['HOME', 'Shop', 'About'],
      blueColor: 'color: blue',
      modalOpen: true,
    }
  },
  methods: {
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.black-bg {
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  display: flex;             
  justify-content: center; 
  align-items: center;
}
.white-bg {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
</style>
