<template>
  <div class="douban-header">
    <div class="main">
      <div v-show="!isSearch" class="mainBox">
        <div class="logo">
          <router-link to="/home">
            <i class="logoText">豆瓣市集</i>
          </router-link>
        </div>
        <div class="searchButton" @click="isSearch=!isSearch">
          <svg class="icon icon_type1" aria-hidden="true">
            <use xlink:href="#icon-fangdajing"></use>
          </svg>
        </div>
      </div>
      <div v-show="isSearch" class="searchBlock">
        <div class="searchBox">
          <input type="text" placeholder="请输入" class="inputBox" v-model="searchValue" @keyup.enter="submit" />
          <svg class="icon icon_type2" aria-hidden="true" @click="submit">
            <use xlink:href="#icon-fangdajing"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="mask" @click="isSearch=!isSearch" v-show="isSearch"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearch: false,
      searchValue: ''
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {
    submit: function () {
      console.log(this.searchValue)
    }
  }
}

</script>
<style scoped>
.douban-header {
  background: rgb(97, 192, 110);
  overflow: hidden;
  height: 80px;
}
.mainBox {
  display: grid;
  grid-template-columns: 10% 70% 20%;
  align-items: center;
  justify-items: left;
}
.logo {
  grid-column: 2/3;
}
.logoText {
  font-family: 'webfont';
  font-size: 48px;
  color: #fff;
  font-weight: 900;
}
@font-face {
  font-family: 'webfont';
  src: url('//at.alicdn.com/t/webfont_at5shrxit5f.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_at5shrxit5f.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('//at.alicdn.com/t/webfont_at5shrxit5f.woff')
      format('woff'),
    /* chrome、firefox */ url('//at.alicdn.com/t/webfont_at5shrxit5f.ttf')
      format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/webfont_at5shrxit5f.svg#站酷小薇体') format('svg'); /* iOS 4.1- */
}
.icon_type1 {
  font-size: 54px;
  font-weight: 900;
  color: #fff;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(122, 122, 122, 0.3);
  z-index: 1;
}
.main,
.main > div {
  height: 100%;
}
.searchBlock {
  position: relative;
  z-index: 2;
}
.searchBox {
  width: 75%;
  height: 54px;
  border-radius: 30px;
  border: 3px #fff solid;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 4% 84% 12%;
  align-items: center;
}
.inputBox {
  grid-column: 2/3;
}
.icon_type2 {
  font-size: 40px;
  color: #fff;
}
</style>
