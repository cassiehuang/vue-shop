<template>
  <div class="douban-swiper" :class="type">
    <swiper :options="swiperOption">
      <swiper-slide class="item" v-for="(slider,key) in sliders" :key="key">
        <img :src="slider.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        slidesPreView: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: {
          delay: 2000
        },
        loop: true
      }
    }
  },
  props: ['type', 'sliders'],

  components: {
    swiper,
    swiperSlide
  },

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
.douban-swiper {
  height: 200px;
}
.douban-swiper .item {
  height: 200px;
}
.douban-swiper img {
  height: 100%;
  width: 100%;
}
</style>
