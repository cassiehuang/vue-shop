<template>
  <div class="nav footNav">
    <ul>
      <li class="item" v-for="(item,key) in navs" :key="key">
        <router-link :to="item.url">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['type', 'navs'],

  components: {
  },

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style scoped>
.nav {
  height: 60px;
  background: #fff;
  border-top: 2px solid rgb(97, 192, 110);
  border-bottom: 2px solid rgb(97, 192, 110);
  text-align: center;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  height: 100%;
  align-items: center;
}
a {
  color: #000;
  font-size: 24px;
}
.router-link-active {
  color: red;
}
.footNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
</style>
