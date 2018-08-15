<template>
  <div class="douban-detail">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,key) in imgList" :key="key">
        <img :src="item" alt="" class="slide-img">
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="back" @click="$router.go(-1)">返回</div>
    <div class="block">
      <div class="productName">{{title}}</div>
      <div class="productPrice">
        <span class="newPrice">{{newPrice}}</span>
        <span class="oldPrice">{{oldPrice}}</span>
      </div>
      <div class="productSend">
        <span>运费:</span>
        <span class="sendPrice">{{sendPrice}}</span>
        <span class="sendText">非包邮地区</span>
        <span class="collect"></span>
      </div>
    </div>
    <div class="block">
      <div class="productColor">
        <div class="fl">颜色</div>
        <div class="fr">
          <div class="box-circle" v-for="(color,index) in color" :key="index" @click="selectColor=index" :class="{'box-circle-select':selectColor==index}">{{color}}</div>
        </div>
      </div>
      <div class="productSize">
        <div class="fl">尺寸</div>
        <div class="fr">
          <div class="box-circle" v-for="(size,index) in size" :key="index" @click="selectSize=index" :class="{'box-circle-select':index==selectSize}">{{size}}</div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="productNum">
        <div class="fl">数量</div>
        <num-change class="fr">
          <span class="num" slot="number" slot-scope="props">
            {{props.num}}
          </span>
        </num-change>
      </div>
    </div>
    <div class="tag">
      <span>豆瓣市集担保</span>
      <span>七天无理由退货</span>
      <span>正品保证</span>
      <span>独立品牌</span>
    </div>
    <!-- <div class="productMain">
      <ul>
        <li class="detail">
          <router-link to="productDetail">商品详情</router-link>
        </li>
        <li class="assess">
          <router-link to="productGrade">评价</router-link>
        </li>
        <li class="conversition">
          <router-link to="/">讨论</router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.isKeepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.isKeepAlive" /> -->
    <div class="productMain">
      <ul>
        <li class="detail" :class="{textRed:curComponent==='productDetail'}" @click="curComponent='productDetail'">
          商品详情
        </li>
        <li class="assess" :class="{textRed:curComponent==='productGrade'}" @click="curComponent='productGrade'">
          评价
        </li>
        <li class="conversition">
          讨论
        </li>
      </ul>
    </div>
    <keep-alive>
      <component :is="curComponent"></component>
    </keep-alive>
    <div class="fixed">
      <router-link to="/shoppingCar">
        <div class="grey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gouwuche"></use>
          </svg>
        </div>
      </router-link>
      <div class="orange">加购物车</div>
      <div class="red" @click="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import numChange from '@/components/numChange.vue'
import productDetail from '@/pages/detail/productDetail'
import productGrade from '@/pages/detail/productGrade'
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: true
      },
      imgList: [],
      title: '',
      newPrice: '',
      oldPrice: '',
      sendPrice: '',
      color: [],
      size: [],
      selectColor: 0,
      selectSize: 0,
      selectNum: 1,
      curComponent: 'productDetail'
    }
  },
  props: ['id'],
  components: {
    swiper,
    swiperSlide,
    numChange,
    productDetail,
    productGrade
  },

  computed: {},

  mounted() {
    axios.get('/mock/detail').then(response => {
      this.imgList = response.data.info.sliderList
      this.title = response.data.info.title
      this.newPrice = response.data.info.newPrice
      this.oldPrice = response.data.info.oldPrice
      this.sendPrice = response.data.info.sendPrice
      this.color = response.data.info.color
      this.size = response.data.info.size
      this.details = response.data.info.details
      this.grade = response.data.info.grade
    })
  },

  methods: {
    buy() {
      axios.post('/mock/orderlist', {
        productId: this.id,
        color: this.selectColor,
        size: this.selectSize,
        num: this.selectNum
      }).then(response => {
        if (response.data.code === '0') {
          this.$router.push({ name: 'buy', params: { id: response.data.id } })
        }
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath.indexOf('home') !== -1 || to.fullPath.indexOf('/sort/products') !== -1) {
      from.meta.isKeepAlive = false
    } else {
      from.meta.isKeepAlive = true
    }
    next()
  }
}

</script>
<style scoped>
.douban-detail {
  background: #fff;
}
.slide-img {
  width: 100%;
  height: 750px;
}
.block {
  border-bottom: 1px solid #ececec;
  padding: 20px;
  text-align: left;
}
.block > div {
  margin-bottom: 8px;
}
.productName {
  font-size: 26px;
}
.productPrice {
  font-size: 24px;
  color: red;
}
.oldPrice {
  color: #ccc;
  text-decoration: line-through;
}
.productSend {
  font-size: 24px;
}
.sendText {
  color: red;
  margin-left: 20px;
}
.productColor,
.productSize,
.productNum {
  overflow: hidden;
  font-size: 22px;
}
.fl {
  float: left;
  width: 17%;
  color: #ccc;
}
.fr {
  float: left;
  width: 83%;
  overflow: hidden;
}
.box-circle {
  width: 26%;
  height: 45px;
  float: left;
  border-radius: 23px;
  background: #ccc;
  text-align: center;
  line-height: 45px;
  margin-right: 5%;
  color: #fff;
  margin-bottom: 10px;
}
.box-circle-default {
  background: #ccc;
}
.box-circle-select {
  background: #68cb78;
}
.tag {
  text-align: center;
  color: #ccc;
}
.productDetail {
  margin-bottom: 80px;
}
.productMain ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 26px;
  margin-top: 40px;
  border-bottom: 3px solid red;
  padding-bottom: 10px;
}
ul,
li {
  list-style: none;
}
a {
  color: #444;
}
.textRed {
  color: red;
}

.fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #68cb78;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 26px;
  color: #fff;
}
.grey {
  background: #bdbdbd;
  height: 100%;
  line-height: 80px;
  font-size: 34px;
}
.orange {
  background: #eba887;
  line-height: 80px;
}
.red {
  background: red;
  line-height: 80px;
  color: #fff;
}
.back {
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 100;
}
</style>
