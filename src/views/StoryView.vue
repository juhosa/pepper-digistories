<template>
  <div class="setti">
    <close-button />
    <story-component :story="story"/>
  </div>
</template>

<script>
import {
  // speak,
  loadKnownPeoples
} from '@/utils/pepper'
import StoryComponent from '@/components/StoryComponent'
import CloseButton from '@/components/CloseButton'
// import marjaterttu from '../../static/stories/marja-terttu.js'

export default {
  components: {
    StoryComponent,
    CloseButton
  },
  data () {
    return {
      activeId: 0
    }
  },
  created () {
    loadKnownPeoples(this)
    // this.story = marjaterttu.marjaterttu
    this.story = this.$store.getters.getSelectedStory
    // console.dir(this.story)

    // speak('hiano homma')
  },
  methods: {
  },
  computed: {
    deWord () {
      return this.$store.getters.getDetectedWord
    }
  },
  watch: {
    deWord: function (newWord, oldWord) {
      // console.log(newWord.word, newWord.confidence)
      this.wordActions(newWord)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .setti {
  height: 100%;
  }
</style>
