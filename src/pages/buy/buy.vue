<template>
  <div class="douban-buy">
    <sticky>
      <div class="back" @click="$router.go(-1)">确认订单</div>
    </sticky>
    <div class="address">
      <div class="address_icon">icon</div>
      <div>
        <div class="name">收货人：{{address.name}}
          <div class="fr">{{address.tel}}</div>
        </div>
        <p>收货地址：{{address.address}}</p>
        <p class="orange">收货不便时刻选择代收服务</p>
      </div>
      <div>></div>
    </div>
    <div class="product">
      <div class="product_shop">{{productData.shopName}}</div>
      <div class="product_detail" v-for="(item,index) in productData.orderList" :key="index">
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <div class="right">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <span>{{item.price}}</span>
          <span>X{{item.num}}</span>
        </div>
      </div>
    </div>
    <div class="order_detail">
      <div class="sendType box">
        <div>配送方式</div>
        <div>{{productData.sendPrice}}</div>
      </div>
      <div class="shopCoupon box">
        <div>店铺优惠</div>
        <div>{{productData.shopCoupon}}</div>
      </div>
      <div class="doubanCoupon box">
        <div>豆瓣优惠</div>
        <div>{{productData.doubanCoupon}}</div>
      </div>
      <div class="summary">
        <span>共{{productNum}}件商品，小计{{productData.resultPrice}}</span>
      </div>
    </div>
    <sticky type="bottom">
      <div class="result">
        <div class="price">合计：
          <span>{{productData.resultPrice}}</span>
        </div>
        <div class="confirm">提交订单</div>
      </div>
    </sticky>
  </div>
</template>

<script>
import axios from 'axios'
import sticky from '@/components/sticky.vue'
export default {
  data() {
    return {
      productData: {},
      addressData: [],
      address: {},
      productNum: 1
    }
  },

  components: {
    sticky
  },

  computed: {},

  mounted() {
    axios.get('/mock/buy').then(response => {
      if (response.data.code === '0') {
        this.productData = response.data.data
        this.productNum = this.productData.orderList.length
      }
    })
    axios.get('/mock/address').then(response => {
      if (response.data.code === '0') {
        this.addressData = response.data.list
      }
      if (this.addressData.length > 0) {
        this.address = this.addressData[response.data.defaultAdd]
      }
    })
  },

  methods: {}
}

</script>
<style scoped>
.douban-buy {
  text-align: left;
  background: #eee;
  overflow: hidden;
}
.back {
  height: 60px;
  padding-left: 30px;
  padding-top: 30px;
  font-size: 26px;
  border-bottom: 1px solid #ccc;
}
.left img {
  width: 100%;
  height: 180px;
}
.address {
  border-bottom: 10px solid rgb(168, 233, 187);
  height: 200px;
  display: grid;
  grid-template-columns: 10% 74% 8%;
  grid-column-gap: 4%;
  padding-top: 90px;
  align-items: center;
  background: #ffffff;
}
.address_icon {
  justify-self: right;
}
.name {
  font-size: 28px;
  padding-bottom: 8px;
}
.fr {
  float: right;
}
.orange {
  color: rgba(248, 206, 91, 0.911);
  padding-top: 5px;
}
.product {
  background: #fff;
  margin-top: 20px;
}
.product_shop {
  padding: 20px 30px;
}
.product_detail {
  background: #eee;
  display: grid;
  padding: 10px 20px;
  grid-template-columns: 1fr 2.5fr;
  grid-column-gap: 20px;
  color: #444;
}
.right > p {
  margin-bottom: 10px;
}
.right > p:last-of-type {
  color: #999;
  margin-bottom: 20px;
}
.right span:first-of-type {
  color: red;
}
.right span:last-of-type {
  float: right;
}
.box {
  border-bottom: 1px solid #eee;
  height: 80px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 50% 50%;
  align-items: center;
}
.box > div:last-of-type {
  justify-self: right;
}
.order_detail {
  background: #fff;
}
.summary {
  height: 80px;
  line-height: 80px;
  text-align: right;
  padding-right: 20px;
}
.result {
  height: 80px;
  display: grid;
  grid-template-columns: 67% 30%;
  grid-column-gap: 3%;
}
.result .price {
  justify-self: right;
  line-height: 80px;
}
.result .price > span {
  color: red;
}
.confirm {
  background: rgb(241, 152, 80);
  color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 28px;
}
</style>
