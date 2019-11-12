<template>
  <span
    @click="painallus"
    class="nappi">
    X
  </span>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    painallus () {
      this.$router.push({ name: 'IndexView' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nappi {
position: fixed;
border: 1px solid red;
border-radius: 35px;
width: 70px;
height: 70px;
background-color: red;
text-align: center;
line-height: 70px;
font-size: 34px;
color: #FFF;
font-weight: bold;
margin: 15px;
}
</style>
