<template>
  <div class="sortProducts">
    <!-- <div class="sortName">{{sortName}}</div> -->
    <sort-nav :navs="sorts" :type="title"></sort-nav>
    <ul>
      <li @click="getProducts({ name: $route.params.title, sort: $route.params.sort,type:'all' })"> 综合排序
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-down"></use>
        </svg> -->
      </li>
      <li @click="getProducts({ name: $route.params.title, sort: $route.params.sort,type:'price' })">价格
        <!-- <svg class="icon icon_type1" aria-hidden="true">
          <use xlink:href="#icon-down"></use>
        </svg> -->
      </li>
      <li @click="getProducts({ name: $route.params.title, sort: $route.params.sort,type:'credit' })">信用
        <!-- <svg class="icon icon_type1" aria-hidden="true">
          <use xlink:href="#icon-down"></use>
        </svg> -->
      </li>
      <li @click="getProducts({ name: $route.params.title, sort: $route.params.sort,type:'sale' })">销量
        <!-- <svg class="icon icon_type1" aria-hidden="true">
          <use xlink:href="#icon-down"></use>
        </svg> -->
      </li>
    </ul>
    <div class="productBlock">
      <product v-for="(product,key) in products" :key="key" v-if="key <= 20" :product="product">
      </product>
    </div>
  </div>
</template>

<script>
import product from '@/components/product.vue'
import sortNav from '@/pages/sort/sortNav.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  props: ['title', 'sort'],
  components: {
    product,
    sortNav
  },

  computed: {
    ...mapState(['products', 'navItem']),
    // sortName() {
    //   return this.$store.getters.getSortItem(this.title)['name']
    // },
    sorts() {
      if (this.title) {
        return this.$store.getters.getSortItem(this.title)['sort']
      }
    }
  },

  mounted() {
    console.log('mounted')
    this.getProducts({ name: this.title, sort: this.sort })
  },

  methods: {
    ...mapActions(['getProducts'])
  },
  beforeRouteUpdate(to, from, next) {
    this.getProducts({ name: to.params.title, sort: to.params.sort })
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath.indexOf('/sort/tags') !== -1 || to.fullPath.indexOf('/home') !== -1) {
      from.meta.isKeepAlive = false
    } else {
      from.meta.isKeepAlive = true
    }
    next()
  }
}

</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  height: 100%;
  align-items: center;
  margin-top: 20px;
}
li::after {
  content: 'up';
}
a {
  color: #000;
  font-size: 24px;
}
.productBlock {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
  text-align: left;
  padding: 20px;
}
</style>
