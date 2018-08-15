<template>
  <div class="sortNav">
    <swiper :options="swiperOption">
      <swiper-slide class="item" v-for="(item,key) in navs" :key="key">
        <router-link :to="{path:item.url}" replace>
          {{item.name}}
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6
      }
    }
  },
  props: ['type', 'navs'],

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
.sortNav {
  height: 60px;
  background: rgb(97, 192, 110);
}
.item {
  line-height: 60px;
}
a {
  color: #000;
  font-size: 20px;
}
.router-link-exact-active {
  color: #fff;
}
</style>
