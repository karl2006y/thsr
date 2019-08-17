<script>
export default {
  name: "buttonMain",
  props: {
    name: String,
    pic: String,
    size: {
      type: String,
      default: "1rem"
    },
    ph: {
      type: String,
      default: "40px"
    }
  }
};
</script>

<template src="./template.html"></template>
<style lang="css" src="./style.css" scoped></style>
