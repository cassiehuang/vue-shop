<template>
  <div class="douban-numchange">
    <span class="button-num" @click="numDecement">-</span>
    <slot name="number" :num="num"></slot>
    <span class="button-num" @click="numIncrement">+</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  components: {},

  computed: {
  },

  mounted() { },

  methods: {
    numIncrement() {
      this.num++
      this.$emit('getNum')
    },
    numDecement() {
      if (this.num > 1) {
        this.num--
      }
    }
  }
}

</script>
<style scoped>
.douban-numChange {
  font-size: 28px;
}
.button-num {
  width: 70px;
  height: 50px;
  background: #ccc;
  display: inline-block;
  text-align: center;
  line-height: 50px;
  font-weight: 900;
  font-size: 26px;
  color: #fff;
}
.num {
  display: inline-block;
  width: 50px;
  text-align: center;
}
</style>
