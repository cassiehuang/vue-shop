<template>
  <div class="douban-hotShop">
    <div class="shop" v-for="(shop,key) in hotShop" :key="key" v-if="key < 2">
      <div class="avatar">
        <img :src="shop.icon" alt="">
        <span class="shopName">{{shop.name}}</span>
      </div>
      <p class="intro">{{shop.intrduction}}</p>
      <div class="block">
        <product v-for="(product,index) in shop.products" :key="index" v-if="index < 2" :product="product">
        </product>
      </div>
      <router-link to="/shop/1">
        <div class="link">>>>进入店铺</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import product from '@/components/product.vue'
export default {
  data() {
    return {
    }
  },

  components: {
    product
  },

  computed: {
    ...mapState(['hotShop'])
  },

  mounted() {
    this.getHotShop()
  },

  methods: {
    ...mapActions(['getHotShop'])
  }
}

</script>
<style scoped>
.shop {
  margin: 10px 0;
  text-align: left;
  background: #fff;
  padding: 20px;
  overflow: hidden;
  margin: 40px 0;
}
.avatar > img {
  width: 40px;
  height: 40px;
}
.shopName {
  position: relative;
  top: -10px;
  left: 15px;
}
.intro {
  margin-top: 5px;
  font-size: 24px;
  color: rgb(214, 214, 214);
}
.block {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-column-gap: 20px;
  margin-top: 40px;
}
.link {
  text-align: right;
  color: #444;
  padding: 10px 0;
  font-size: 24px;
}
</style>
