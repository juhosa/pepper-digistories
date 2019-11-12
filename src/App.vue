<template>
  <div>
    <div id="app">
      <div class="">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {
  registerFaceDetectedEvent
// registerWordRecognizedEvent
} from '@/utils/pepper'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  created () {
    registerFaceDetectedEvent(this)
    // registerWordRecognizedEvent(this)
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  margin-top: 10px;
}
</style>
