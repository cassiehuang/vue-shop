<template>
  <div class="douban-sort">
    <layout :type="navType"></layout>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.isKeepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.isKeepAlive" /> -->
    <router-view />
  </div>
</template>

<script>
import Tags from '@/pages/sort/tags.vue'
import layout from '@/pages/layout.vue'
export default {
  data() {
    return {
      navType: 'sort'
    }
  },

  components: {
    Tags,
    layout
  },

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
</style>
