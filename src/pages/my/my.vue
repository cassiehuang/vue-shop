<template>
  <div class="douban-my">
    <layout type="home"></layout>
    <div class="noLogin" v-if="!$store.state.isLogin">
      <div>还未登录，请使用手机号码或淘宝账号登录</div>
      <div @click="$router.push({name:'login',query:{from:'my',redirect:'my'}})"> 登录</div>
    </div>
    <div class="login" v-if="$store.state.isLogin">
      <div class="box">
        <div class="avatar">
          <img :src="user.avatar" alt="">
        </div>
        <div class="name">{{user.userName}}</div>
      </div>
      <div class="box orderlist">
        <div>我的订单</div>
        <div>
          <div>待付款</div>
          <div>待发货</div>
          <div>待收获</div>
          <div>待评价</div>
          <div>退款</div>
          <div>1</div>
          <div>3</div>
          <div>5</div>
          <div>22</div>
          <div>0</div>
        </div>
      </div>
      <div class="btn" @click="logout">退出登录</div>
    </div>
  </div>
</template>

<script>
import layout from '@/pages/layout.vue'
import axios from 'axios'
export default {
  data() {
    return {
      user: {}
    }
  },

  components: {
    layout
  },

  computed: {},

  mounted() {
    if (this.$store.state.isLogin) {
      axios.get('/mock/userDetail').then(response => {
        if (response.data.code === '0') {
          this.user = response.data.user
        }
      })
    }
  },

  methods: {
    logout() {
      axios.post('/mock/logout', {
        userid: this.user.userId
      }).then(response => {
        if (response.data.code === '0') {
          this.$store.commit('logout')
          localStorage.removeItem('token')
          localStorage.removeItem('userName')
          localStorage.removeItem('userId')
        }
      })
    }
  }
}

</script>
<style scoped>
.noLogin > div:first-of-type {
  height: 120px;
  margin-top: 80px;
}
.noLogin > div:nth-of-type(2) {
  height: 80px;
  margin: 0 30px;
  background: rgb(97, 192, 110);
  font-size: 26px;
  color: #fff;
  line-height: 80px;
  border-radius: 20px;
}
.box {
  padding: 20px 20px;
  margin: 20px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.avatar {
  width: 80px;
  height: 80px;
  display: inline-block;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.name {
  font-size: 28px;
  position: relative;
  top: -25px;
  left: 20px;
  display: inline-block;
}
.btn {
  height: 80px;
  margin: 30px;
  background: rgb(97, 192, 110);
  font-size: 26px;
  color: #fff;
  line-height: 80px;
  border-radius: 20px;
}
.orderlist > div:first-of-type {
  font-size: 24px;
  font-weight: 900;
  border-bottom: 1px solid #aaa;
  padding-bottom: 10px;
}
.orderlist > div:nth-of-type(2) {
  display: grid;
  padding-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 25px;
}
.orderlist {
  padding-bottom: 30px;
}
</style>
