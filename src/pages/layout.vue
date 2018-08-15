<template>
  <div class="douban-layout">
    <douban-header v-show="type==='home'"></douban-header>
    <douban-nav :navs="navItem"></douban-nav>
  </div>
</template>

<script>
import doubanHeader from '@/components/header'
import doubanNav from '@/components/nav'
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  props: ['type'],

  components: {
    doubanHeader,
    doubanNav
  },

  computed: {
    ...mapState(['navItem'])
  },

  mounted() { },

  methods: {}
}

</script>
<style>
.mainBlock {
  padding-bottom: 80px;
}
</style>
