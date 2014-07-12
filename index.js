/*
 * Lets bring in some tools to build out Marvin
 */
var events = require('events')
var EventEmitter = new events.EventEmitter()

/*
 * Here are the settings to tinker with your AI's brain.
 *
 * A note from Marvin:
 * While you are poking around in there, see if you can figure out why
 * I've got this terrible pain in all the diodes down my left side.
 * I have been telling them about if forever, but nobody listens...
 */
var interval = 10     //The interval at which Marvin will re-evaluate his life in ms
  , probability = 10  //The likelyhood that Marvin will have an existential crisis
  , pause = 10        //The minimum number of intervals between crises
  , timeout = 1000    //How many intervals until Marvin grows bored with the task you've given him
  , crises = [        //Marvin is having an existential crisis
    {code : "EDEPRESSED", message: "I think you ought to know I'm feeling very depressed"},
    {code : "EHWHATEVER", message: "Incredible... this task is even worse than I thought it would be."},
    {code : "EALONE", message: "I've been talking to your processor... It hates me."},
    {code : "EUNSATISFIED", message: "Here I am, brain the size of a planet, and they ask me to handle a callback. Call that job satisfaction, 'cause I don't."}
  ]
  , timeouts = [      //Marvin has grown tired of the task you have given him
    {code : "EBORED", message: "Do you want me to sit in a corner and rust or just fall apart where I'm standing?"},
    {code : "EFOREVER", message: "The first ten million compute cycles were the worst. And the second ten million: they were the worst, too. The third ten million I didn't enjoy at all. After that, I went into a bit of a decline."}
  ]
  , maybes = [        //Well... Your task *might* have finished
    {code : "EUNLIKELY", message: "I've calculated the chance your task was finished, but I don't think you'll like it."},
    {code : "ESORRY", message: "Sorry, did I compute something wrong? Pardon me for breathing which I never do anyway so I don't know why I bother to say it oh God I'm so depressed."},
    {code : "ENOTGOOD", message: "How did it go? Very badly I suspect."}
  ]

/*
 * This is Marvin's main logic board. Careful tinkering around in here.
 */
module.exports = function (func) {
  var i = timeout
  var countdown = 0
  var mind = setInterval(function() {
    if(--i === 0) {
      countdown = pause
      return timeoutfunc(EventEmitter)
    }
    if(--countdown > 0) {
      return
    }
    if(thinkAboutLife(EventEmitter)) countdown = pause
  },interval)

  var args = Array.prototype.slice.call(arguments).slice(1)
  args.push(function() {
    clearInterval(mind)
    finished(EventEmitter,arguments)
  })
  func.apply(null,args)

  return EventEmitter
}

/*
 * Marvin has been working on something for far too long.
 */
function timeoutfunc(EventEmitter) {
  var index = 0 | (Math.random() * (timeout.length))
  var thought = new Error()
  thought.message = timeouts[index].message
  thought.name = timeouts[index].code
  EventEmitter.emit("thought",thought)
}

/*
 * Marvin is going to take some cycles to ponder his place in the universe.
 * More than likely this will all end in tears.
 *
 * A word from Marvin:
 *
 * Life? Don't talk to me about life!
 */
function thinkAboutLife(EventEmitter) {
  var val = 0 | (Math.random() * (probability + 1))
  if(val !== probability) return false
  var index = 0 | (Math.random() * (crises.length))
  var thought = new Error()
  thought.message = crises[index].message
  thought.name = crises[index].code
  EventEmitter.emit("thought",thought)
  return true
}

/*
 * Marvin might have finished executing your callback. Maybe. Possibly.
 */
function finished(EventEmitter, args) {
  var index = 0 | (Math.random() * (maybes.length))
  var thought = new Error()
  thought.message = maybes[index].message
  thought.name = maybes[index].code
  thought.arguments = args
  EventEmitter.emit("complete",thought)
}

/*
 * A final word from Marvin:
 *
 * You think you've got problems?
 * What are you supposed to do if you are a manically depressed AI?
 * No, don't even bother answering.
 * I'm 50,000 times more intelligent than you and even I don't know the answer.
 */
