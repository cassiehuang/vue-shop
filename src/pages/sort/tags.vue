<template>
  <div class="sortTags">
    <div class="gridBox">
      <router-link v-for="(tag,index) in tags" :key="index" :to="{path:'/sort/products/'+tag.url+'/all'}">
        <div class="tag">
          {{tag.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {
    ...mapState(['tags'])
  },

  mounted() { },

  methods: {}
}

</script>
<style scoped>
.sortTags {
  margin: 40px 40px;
}
.gridBox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
  align-items: center;
}
.tag {
  height: 100px;
  line-height: 100px;
  border-radius: 15px;
  background: rgb(97, 192, 110);
  font-size: 20px;
  color: #222;
}
</style>
