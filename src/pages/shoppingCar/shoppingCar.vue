<template>
  <div class="douban-shoppingCar">
    <layout type="shoppingCar"></layout>
    <div class="title">购物车</div>
    <div v-if="!ifManage" class="manage" @click="ifManage = !ifManage">管理</div>
    <div v-if="ifManage" class="manage" @click="ifManage = !ifManage">完成</div>
    <div class="product" v-for="(shop,key) in shopList" :key="key">
      <input type="checkbox" class="checkbox shopCheck" @click="shopCheck(key,$event)" />
      <div class="product_shop">{{shop.shopName}}</div>
      <div class="product_detail" v-for="(item,index) in shop.orderList" :key="index">
        <input type="checkbox" class="productCheck" @click="productCheck(key,index,$event)" :data-price="item.price" :data-sum="item.num" />
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
    <sticky class="sticky" type="middle">
      <div class="shopping_result">
        <div>
          <input type="checkbox" @click="allCheck($event)" class="allCheck" />
          <label>全选</label>
        </div>
        <div>合计:￥{{total}}</div>
        <div @click="buy" v-if="!ifManage">
          结算({{sum}})
        </div>
        <div @click="deleteOrder" v-if="ifManage">
          删除
        </div>
      </div>
    </sticky>
  </div>
</template>

<script>
import axios from 'axios'
import Layout from '@/pages/layout.vue'
import sticky from '@/components/sticky.vue'
export default {
  data() {
    return {
      userId: '',
      ifManage: false,
      shopList: [],
      total: 0,
      sum: 0
    }
  },

  components: {
    Layout,
    sticky
  },

  computed: {
  },

  mounted() {
    this.getList()
  },

  methods: {
    getList() {
      axios.get('/mock/shoppingCar', {
        params: {
          userid: this.$store.state.userId
        }
      }).then(response => {
        if (response.data.code === '0') {
          this.shopList = response.data.list
        }
      })
    },
    allCheck(e) {
      if (e.target.checked) {
        $('.shopCheck:not(:checked)').prop('checked', true)
        $('.productCheck:not(:checked)').prop('checked', true)
      } else {
        $('.shopCheck:checked').prop('checked', false)
        $('.productCheck:checked').prop('checked', false)
      }
      this.getPrice()
    },
    shopCheck(shopIndex, e) {
      if (e.target.checked) {
        $('.shopCheck').eq(shopIndex).prop('checked', true)
        $('.product').eq(shopIndex).find('.productCheck:not(:checked)').prop('checked', true)
        let checked = $('.shopCheck:not(:checked)').length === 0
        $('.allCheck').prop('checked', checked)
      } else {
        $('.shopCheck').eq(shopIndex).prop('checked', false)
        $('.product').eq(shopIndex).find('.productCheck:checked').prop('checked', false)
        $('.allCheck').prop('checked', false)
      }
      this.getPrice()
    },
    productCheck(shopIndex, productIndex, e) {
      if (e.target.checked) {
        let checked = $('.product').eq(shopIndex).find('.productCheck:not(:checked)').length === 0
        $('.shopCheck').eq(shopIndex).prop('checked', checked)
        if (checked) {
          let shopchecked = $('.shopCheck:not(:checked)').length === 0
          $('.allCheck').prop('checked', shopchecked)
        }
      } else {
        $('.shopCheck').eq(shopIndex).prop('checked', false)
        $('.allCheck').prop('checked', false)
      }
      this.getPrice()
    },
    getPrice() {
      let totalPrice = 0
      $('.productCheck:checked').each((index, btn) => {
        totalPrice += parseFloat($(btn).attr('data-price').replace(/[^0-9-.]/g, '')) * parseFloat($(btn).attr('data-sum'))
      })
      this.total = totalPrice
      this.sum = $('.productCheck:checked').length
    },
    buy() {
      let args = {
        list: []
      }
      $('.productCheck:checked').each((index, btn) => {
        args.list.push({ id: index })
      })
      axios.post('/mock/orderlist', args).then(response => {
        if (response.data.code === '0') {
          this.$router.push({ name: 'buy', params: { id: response.data.id } })
        }
      })
    },
    deleteOrder() {
      let args = {
        list: []
      }
      $('.productCheck:checked').each((index, btn) => {
        args.list.push({ id: index })
      })
      axios.post('/mock/orderlist', args).then(response => {
        if (response.data.code === '0') {
          // this.getList()
          // this.shopList = this.shopList.slice(0, 2)
          // this.sum = 0
          // this.total = 0
          location.reload()
        }
      })
    }
  }
}

</script>
<style scoped>
.douban-shoppingCar {
  text-align: left;
  padding-bottom: 80px;
}
.title {
  font-size: 40px;
  color: rgb(253, 156, 60);
  margin: 25px 0 25px 30px;
  font-weight: 900;
}
.manage {
  position: absolute;
  top: 40px;
  right: 35px;
}
.product {
  background: #fff;
  margin: 20px;
  border-radius: 30px;
}
.checkbox {
  display: inline-block;
  margin-left: 20px;
}
.product_shop {
  padding: 20px 30px;
  display: inline-block;
}
.product_detail {
  display: grid;
  padding: 10px 20px;
  grid-template-columns: 35px 1fr 2.5fr;
  grid-column-gap: 15px;
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
.left img {
  width: 100%;
  height: 180px;
}
input[type='checkbox'] {
  clip: rect(0, 0, 0, 0);
}
input[type='checkbox']::before {
  content: '\a0';
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px #ccc solid;
  line-height: 30px;
  text-align: center;
}
input[type='checkbox']:checked::before {
  background-color: red;
  content: '\2713';
  color: #fff;
  font-weight: 900;
}
.sticky {
  bottom: 60px;
}
.shopping_result {
  background: #fff;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 100px 1fr 140px;
  grid-column-gap: 20px;
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #eee;
}
.shopping_result > div:nth-of-type(2) {
  justify-self: right;
}
.shopping_result > div:nth-of-type(3) {
  background: rgb(250, 132, 21);
  color: #fff;
  border-radius: 30px;
  width: 140px;
  height: 50px;
  justify-self: right;
  align-self: center;
  text-align: center;
  line-height: 50px;
}
a {
  color: #fff;
}
</style>
