<template>
  <div class="juttu">
    <h2 class="title is-2">Seuraavista henkilöistä minulla on tarina:</h2>
    <div class="notification is-primary" v-for="p in storyPeeps"
         :key="p.id"
         @click="pressed(p)">
      <h3 class="title is-3">{{ p.name }}</h3>
    </div>

    <b-modal
      :active="$store.getters.getUserModalActive">
      <div class="card">
        <div class="card-content">
          <h1 class="title is-1">
            Moi! Tunnistinko oikein, onko siinä {{ $store.getters.getDetectedUser }}?
          </h1>
          <h2 class="title is-2">Kuunnellaanko sinun tarinasi?</h2>
          <button @click="buttonYes" class="button is-primary is-large isonappi">Kyllä</button>
          <button @click="buttonNo" class="button is-danger is-large isonappi">Ei</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import * as stories from '@/utils/stories/'
import {
  speak
} from '@/utils/pepper'

export default {
  data () {
    return {
      storyPeeps: []
    }
  },

  created () {
    this.$store.commit('SET_USERMODALACTIVE', false)
    this.$store.commit('EMPTY_DETECTED_USER')
    this.$store.commit('EMPTY_USER')
    // registerFaceDetectedEvent(this)
    // registerWordRecognizedEvent(this)
    // speak('morjest')
    for (let s of stories.tyypit) {
      // console.log(s)
      this.storyPeeps.push(s)
    }
  },

  methods: {
    buttonYes () {
      console.log('Oikea henkilö tunnistettu')
      const user = this.$store.getters.getDetectedUser

      this.$store.commit('SET_USER', user)
      this.$store.commit('EMPTY_DETECTED_USER')
      this.$store.commit('SET_USERMODALACTIVE', false)

      let found = false

      for (let sp of this.storyPeeps) {
        if (sp.name.toLowerCase() === user.toLowerCase()) {
          found = true
          this.pressed(sp)
          return
        }
      }

      if (!found) {
        console.log('ei ole tarinaa sinusta')
        speak('pahoittelut, minulla ei olekaan tarinaa sinusta.')
      }
      // speak(text)
    },

    buttonNo () {
      console.log('Väärä henkilö tunnistettu')
      this.$store.commit('SET_USERMODALACTIVE', false)
      this.$store.commit('EMPTY_DETECTED_USER')
    },

    pressed (p) {
      // console.dir(p)
      this.$store.commit('SET_SELECTEDSTORY', p)
      this.$router.push({name: 'StoryView'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .juttu {
    margin: 15px;
  }
</style>
