<template>
  <div class="nappi has-text-centered">
    <span class="spanni">Takaisin</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nappi {
  background-color: #5CBFEA;
  height: 100%;
  font-size: 3rem;
  position: relative;
  border-radius: 5px;
}
.spanni {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
