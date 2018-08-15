<template>
  <div class="sticky" :class="type ? type:'top'">
    <div class="holder">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['type'],
  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
.sticky {
  position: fixed;
  width: 100%;
  background: #fff;
}
.holder {
  height: 100%;
  z-index: 100;
  position: relative;
}
.top {
  top: 0;
}
.bottom {
  bottom: 0;
}
</style>
