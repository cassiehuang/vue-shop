<template>
  <div class="productBox">
    <router-link :to="{path:'/detail/'+product.id}">
      <img :src="product.src" alt="">
      <p class="name">{{product.title}}</p>
    </router-link>
    <span class="newPrice">{{product.newPrice}}</span>
    <span class="oldPrice">{{product.oldPrice}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['product'],
  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
.productBox {
  font-size: 24px;
  color: rgb(204, 204, 204);
  background: #fff;
  padding-bottom: 10px;
  border: 1px solid #eeeeee;
  width: 100%;
}
.productBox img {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.name {
  width: 94%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(204, 204, 204);
  padding: 3px 0 8px 8px;
}
.newPrice {
  color: red;
  padding-left: 8px;
  font-size: 20px;
}
.oldPrice {
  text-decoration: line-through;
  font-size: 20px;
}
</style>
