<template>
  <div class="divi">
    <img :src="picSrc" alt="tarinan kuva" />
  </div>
</template>

<script>
export default {
  props: {
    picSrc: {
      type: String
    }
  },
  data () {
    return {
      imgSrc: '../../static/images/marja-terttu_1.JPG'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divi {
  height: 100%;
}
</style>
