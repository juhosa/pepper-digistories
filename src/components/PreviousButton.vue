<template>
<div
  class="has-text-centered"
  @click="clicki">
    <!-- <span class="spanni">Edellinen</span> -->
    <a class="button is-info is-large">Edellinen</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    clicki () {
      this.$emit('edellinen')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nappi {
  background-color: #5CBFEA;
  height: 100%;
  font-size: 2rem;
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
