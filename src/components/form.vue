<template>
  <div form-group>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
[form-group] {
  text-align: center;
  width: 100%;
  margin: 30px 0;
}
[form-group] input {
  height: 70px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 5%;
  font-size: 24px;
  padding: 0 4%;
  color: #888;
  width: 82%;
  margin-bottom: 20px;
}
[form-group] .green {
  background: #68cb78;
  color: #fff;
  width: 90%;
}
.hint {
  height: 40px;
  color: 18px;
  color: red;
}
</style>
