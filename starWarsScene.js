function spotEachRebel(rebels) {
  var spottedRebelCalls = []

// KMC: Modified code here ... 
  if (rebels) {
    spottedRebelCalls.push('Look! Rebel scum!')
  }

  return spottedRebelCalls
}

function seeRebelsEscape(rebels) {
  var escapedRebelCalls = []
  var i = 0

  do {
    escapedRebelCalls.push("Oh no! They're getting away!")
    i++
  } while (rebels[i] && rebels[i]['plotArmor'])

  return escapedRebelCalls
}

function shootAtNothing(shots) {
  var shotsAtNothing = []

  for (var i = 1; i < shots; i++) {
    shotsAtNothing.push('pew')
  }

  return shotsAtNothing
}

module.exports.deliverStormTroopersEscapeScene = function (rebels) {
  var sceneSequence = []

  var spottedRebelCalls = spotEachRebel(rebels)
  sceneSequence = sceneSequence.concat(spottedRebelCalls)

  var escapedRebelCalls = seeRebelsEscape(rebels)
  sceneSequence = sceneSequence.concat(escapedRebelCalls)

  var shotsAtNothing = shootAtNothing(4)
  sceneSequence = sceneSequence.concat(shotsAtNothing)

  return sceneSequence
}
