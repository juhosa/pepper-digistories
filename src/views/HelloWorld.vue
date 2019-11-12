<template>
  <div>
    <div class="columns">
      <div class="column">
        <story-pic :picSrc="story.stories[activeId].picSrc" />
      </div>
      <div class="column">
        <story-text :text="story.stories[activeId].text" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <name-box :name="story.name" />
      </div>
      <div class="column">

        <div class="columns">
          <div class="column">
            <previous-button />
          </div>
          <div
            class="column"
            @seuraava="kasvataActiveId">
            <next-button />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {
  // speak,
  loadKnownPeoples
} from '@/utils/pepper'
import StoryPic from '@/components/StoryPic'
import StoryText from '@/components/StoryText'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import PreviousButton from '@/components/PreviousButton'
import NameBox from '@/components/NameBox'
import marjaterttu from '../../static/stories/marja-terttu.js'

export default {
  components: {
    StoryPic,
    StoryText,
    BackButton,
    NextButton,
    PreviousButton,
    NameBox
  },
  data () {
    return {
      story: null,
      activeId: 0
    }
  },
  created () {
    loadKnownPeoples(this)
    this.story = marjaterttu.marjaterttu
    // console.dir(this.story)

    // speak('hiano homma')
  },
  methods: {
    kasvataActiveId () {
      console.log('asd')
    }
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
</style>
