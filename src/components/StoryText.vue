<template>
  <div class="divi">
    <p
      v-for="t in texts"
      :key="t">
      {{ t }}
    </p>
  </div>
</template>

<script>
import {
  speak
} from '@/utils/pepper'

export default {
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      texts: []
    }
  },
  created () {
    // console.log(this.text)
    // console.dir(this.text.split('\n'))
    this.texts = []
    for (let t of this.text.split('\n')) {
      if (t !== '') {
        this.texts.push(t)
      }
    }
    // console.log(this.texts)
    this.puhuTekstit()
  },
  methods: {
    puhuTekstit () {
      speak(this.text)
      // console.log('in puhuTekstit')
      // for (let t of this.texts) {
      //   speak(t)
      // }
    }
  },
  watch: {
    text: function (newWord, oldWord) {
      this.texts = []
      // console.log('teksti vaihtu')
      for (let t of this.text.split('\n')) {
        if (t !== '') {
          this.texts.push(t)
        }
      }
      this.puhuTekstit()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 21px;
  margin-bottom: 10px;
}
.divi {
  border: 3px solid #DB1919;
  height: 100%;
  padding: 1rem;
}
</style>
