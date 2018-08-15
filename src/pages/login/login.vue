<template>
  <div class="douban-login">
    <div class="box">
      <div class="back" @click="$router.push({ path: $route.query.from })">取消</div>
      <div class="title">登录豆瓣</div>
    </div>
    <my-form>
      <input type="text" placeholder="用户名或手机号" v-model="tel" />
      <input type="text" placeholder="密码" v-model="password" />
      <p class="hint">{{hint}}</p>
      <input type="submit" value="登录" class="green" @click="login()" />
    </my-form>
  </div>
</template>

<script>
import myForm from '@/components/form.vue'
import axios from 'axios'
export default {
  data() {
    return {
      tel: '',
      password: '',
      hint: ''
    }
  },

  components: {
    myForm
  },

  computed: {},

  mounted() { },

  methods: {
    login() {
      if (this.tel !== '' && this.password !== '') {
        // axios.post('/mock/login', qs.stringify({
        //   tel: this.tel,
        //   password: this.password
        // })).then(response => {
        //   if (response.data.result) {
        //     this.$store.dispatch('login', response.data.user)
        //   } else {
        //     this.hint = '用户名和密码不匹配'
        //   }
        // })
        axios.post('/mock/login', {
          tel: this.tel,
          password: this.password
        }).then(response => {
          if (response.data.code === '0') {
            window.localStorage.setItem('token', response.data.user.token)
            window.localStorage.setItem('userName', response.data.user.userName)
            window.localStorage.setItem('UserId', response.data.user.userId)
            this.$store.commit('isLogin', response.data.user)
            this.$router.push(this.$route.query.redirect)
          } else {
            this.hint = '用户名和密码不匹配'
          }
        })
      } else {
        this.hint = '请输入用户名和密码'
      }
    }
  }
}

</script>
<style scoped>
.douban-login {
  background: #fff;
  height: 100%;
}
.box {
  border-bottom: 1px solid #ccc;
  padding: 20px 30px;
}
.title {
  font-size: 32px;
  font-weight: 900;
}
.back {
  float: left;
  color: #68cb78;
  font-size: 22px;
}
</style>
