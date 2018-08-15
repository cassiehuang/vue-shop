<template>
  <div class="productDetail">
    <img :src="img" alt="" v-for="(img,index) in details" :key="index">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      details: []
    }
  },

  components: {},

  computed: {},

  mounted() {
    axios.get('/mock/detail').then(response => {
      this.details = response.data.info.details
    })
  },

  methods: {}
}

</script>
<style scoped>
img {
  width: 100%;
}
</style>
