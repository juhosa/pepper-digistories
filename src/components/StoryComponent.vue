<template>
  <div class="story">
    <div class="columns yla-cols">
      <div class="column">
        <story-pic :picSrc="story.stories[activeId].picSrc" />
      </div>
      <div class="column">
        <story-text :text="story.stories[activeId].text" />
      </div>
    </div>
    <div class="columns ala-cols">
      <div class="column">
        <name-box :name="story.name" />
      </div>
      <div class="column">

        <div class="columns">
          <div class="column">
            <previous-button v-on:edellinen="pienennaActiveId" />
          </div>
          <div
            v-if="tarinoitJaljel"
            class="column">
            <next-button v-on:seuraava="kasvataActiveId"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import StoryPic from '@/components/StoryPic'
import StoryText from '@/components/StoryText'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import PreviousButton from '@/components/PreviousButton'
import NameBox from '@/components/NameBox'

export default {
  props: {
    story: {
      type: Object
    }
  },
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
      activeId: 0
    }
  },
  created () {
    this.$store.commit('EMPTY_DETECTED_USER')
    this.$store.commit('EMPTY_USER')
    // console.dir(this.story)

    // speak('hiano homma')
  },
  methods: {
    kasvataActiveId () {
      let count = this.story.stories.length
      if (this.activeId + 1 === count) {
        return
      }
      this.activeId++
    },

    pienennaActiveId () {
      if (this.activeId - 1 < 0) {
        return
      }
      this.activeId--
    }
  },
  computed: {
    tarinoitJaljel () {
      return this.activeId < (this.story.stories.length - 1)
    },

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
.yla-cols {
  height: 34rem;
    /* height: 70%; */
}
.ala-cols {
}
.story {
    margin-left: 10%;
    margin-right: 10%;
}
</style>
