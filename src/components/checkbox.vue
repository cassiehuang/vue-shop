<template>
  <input type="checkbox" />
</template>
<style scoped>
input[type='checkbox'] {
  clip: rect(0, 0, 0, 0);
}
input[type='checkbox']::before {
  content: '\a0';
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px #ccc solid;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-weight: 900;
}
input[type='checkbox']:checked::before {
  background-color: red;
  content: '\2713';
}
</style>
