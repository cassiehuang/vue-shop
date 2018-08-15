<template>
  <div class="productGrade">
    <div class="total">综合评分
      <span class="orange">{{grade.average}}</span>
    </div>
    <div class="level">
      <span>很好</span>
      <span class="orange">{{grade.best}}</span>
      <span>较好</span>
      <span class="orange">{{grade.good}}</span>
      <span>一般</span>
      <span class="orange">{{grade.notbad}}</span>
      <span>差</span>
      <span class="orange">{{grade.bad}}</span>
      <span>极差</span>
      <span class="orange">{{grade.awful}}</span>
    </div>
    <div class="box" v-for="(commit,index) in commits" :key="index">
      <div class="avatar">
        <img :src="commit.icon" alt="">
        <span class="name">{{commit.name}}</span>
        <span class="time">{{commit.time}}</span>
        <span class="star">{{commit.star}}</span>
      </div>
      <p class="intro">{{commit.commit}}</p>
      <img :class="{image2:commit.image.length>=2,image3:commit.image.length>=3}" class="image" :src="image" v-for="(image,key) in commit.image" :key="key" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      grade: {},
      commits: []
    }
  },

  components: {},

  computed: {},

  mounted() {
    axios.get('/mock/detail').then(response => {
      this.grade = response.data.info.grade
      this.commits = response.data.info.commits
    })
  },

  methods: {}
}

</script>
<style scoped>
.productGrade {
  padding: 10px 0;
}
.total {
  font-size: 26px;
  margin: 20px 0;
}
.orange {
  color: peru;
  margin-right: 10px;
}
.level {
  margin-bottom: 30px;
}
.box {
  border-top: 1px solid #ccc;
  padding: 20px;
  text-align: left;
  overflow: hidden;
}
.avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.name {
  position: relative;
  top: -10px;
  left: 5px;
}
.star {
  float: right;
  position: relative;
  top: 5px;
  right: 20px;
}
.time {
  position: relative;
  top: -10px;
  left: 20px;
  color: #ccc;
}
.intro {
  margin-top: 5px;
  font-size: 24px;
  color: #999;
}
.image {
  max-height: 400px;
  overflow: hidden;
  padding: 10px 0;
}
.image2 {
  width: 45%;
  margin-right: 5%;
}
.image3 {
  width: 30%;
  margin-right: 3%;
}
</style>
