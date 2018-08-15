<template>
  <div class="homeProducts">
    <div class="productBlock">
      <product v-for="(product,key) in products" :key="key" v-if="key <= 5" :product="product">
      </product>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
.homeProducts {
  padding: 20px;
}
.productBlock {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
  text-align: left;
}
</style>
