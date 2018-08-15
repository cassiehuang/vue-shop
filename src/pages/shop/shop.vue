<template>
  <div class="douban-shop">
    <div class="name">零食小屋</div>
    <div class="productImg">
      <router-link :to="{path:'/detail/'+product.id}" v-for="(product,key) in products" :key="key" v-if="key <= 2" :product="product">
        <img :src="product.src" alt="">
      </router-link>
    </div>
    <div class="title">热销商品</div>
    <div class="productBlock">
      <product v-for="(product,key) in products" :key="key" v-if="key <= 11" :product="product">
      </product>
    </div>
  </div>
</template>

<script>
import product from '@/components/product.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  props: ['id'],
  components: {
    product
  },

  computed: {
    ...mapState(['products'])
  },

  mounted() {
    this.getProducts()
  },

  methods: {
    ...mapActions(['getProducts'])
  }
}

</script>
<style scoped>
.douban-shop {
  padding: 20px;
}
.productBlock {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
  text-align: left;
}
.productImg {
  width: 100%;
}
.productImg img {
  width: 100%;
  height: 300px;
}
.title {
  margin: 30px 0;
  font-size: 28px;
}
.name {
  font-size: 40px;
  color: orangered;
  margin-bottom: 30px;
  text-align: left;
  margin-left: 20px;
  font-weight: 900;
}
</style>
