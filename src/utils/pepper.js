const speak = text => {
  console.log('speaking: ', text)
  window.RobotUtils.onServices((ALTextToSpeech) => {
    ALTextToSpeech.say(text)
  })
}

const loadKnownPeoples = thissi => {
  window.RobotUtils.onServices((ALFaceDetection) => {
    ALFaceDetection.getLearnedFacesList().then((list) => {
      // console.dir(list)
      // thissi.$store.commit('SET_PEOPLE', list)
    })
  })
}

const logUserOut = that => {
  let txt = 'Moi moi, ' + that.$store.getters.getUser + '. Nähdään myöhemmin.'
  that.$store.commit('EMPTY_DETECTED_USER')
  that.$store.commit('EMPTY_USER')
  speak(txt)
}

const logUserOutSilent = that => {
  that.$store.commit('EMPTY_DETECTED_USER')
  that.$store.commit('EMPTY_USER')
  that.$store.commit('SET_LATESTROUTECHANGETIME', null)
}

const registerFaceDetectedEvent = thissi => {
  window.RobotUtils.subscribeToALMemoryEvent('FaceDetected', (value) => {
    // console.log('face detected')
    // console.dir(value)
    const name = getNameOfDetectedFace(value)
    // Because of supercool data structures, name can sometimes be an integer. Because why not.
    if (name !== null && isNaN(parseInt(name))) {
      // console.log(name)
      thissi.$store.commit('SET_DETECTED_USER', name)
      if (thissi.$store.getters.getUser === null) {
        thissi.$store.commit('SET_USERMODALACTIVE', true)
      }
    }
  })
}

const registerWordRecognizedEvent = that => {
  this.memorySubObj = window.RobotUtils.subscribeToALMemoryEvent('WordRecognized', (value) => {
    const word = value[0]
    const confidence = value[1]

    console.log(word, confidence)

    that.$store.commit('SET_DETECTED_WORD', {'word': word, 'confidence': confidence})
  })
}

const getNameOfDetectedFace = value => {
  if (value.length > 1) {
    if (value[1].length > 1) {
      if (value[1][1].length > 1) {
        if (value[1][1][1].length > 0) {
          return value[1][1][1][0]
        }
      }
    }
  }
  return null
}

const shoutRandomStuffs = that => {
  const phrases = [
    'En juuri nyt näe ikkunasta ulos. Millainen ilma siellä on?',
    'Onko sinulla ollut hyvä päivä?',
    'Huh, kylläpäs haluaisinkin ottaa päiväunet',
    'Minun tekee mieli herkkuja. Esimerkiksi lisää sähköä.',
    'Mitä söit aamupalaksi?',
    'Onko sinulla ollut lemmikkejä?'
  ]
  const thePhrase = phrases[Math.floor(Math.random() * phrases.length)]
  speak(thePhrase)
}

export {
  speak,
  loadKnownPeoples,
  registerFaceDetectedEvent,
  registerWordRecognizedEvent,
  logUserOut,
  logUserOutSilent,
  shoutRandomStuffs
}
