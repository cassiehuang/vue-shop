<template>
  <div class="douban-home mainBlock">
    <layout :type="navType"></layout>
    <douban-slider :type="sliderType" :sliders="sliders"></douban-slider>
    <products></products>
    <hot-shop></hot-shop>
  </div>
</template>

<script>
import layout from '@/pages/layout.vue'
import doubanSlider from '@/components/slider'
import products from '@/pages/home/products.vue'
import hotShop from '@/pages/home/hotShop.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      navType: 'home',
      sliderType: 'img'
    }
  },

  components: {
    layout,
    doubanSlider,
    products,
    hotShop
  },

  computed: {
    ...mapState(['sliders'])
  },

  mounted() {
    this.getSliders()
  },

  methods: {
    ...mapActions(['getSliders'])
  }
}

</script>
<style scoped>
</style>
