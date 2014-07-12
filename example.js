var marvin = require('./index.js')

marvin(function(cb) {
  setTimeout(function() {
    cb("complete!")
  },1000)
})
.on("thought",function(thought) {
  console.log(thought.name+": "+thought.message)
})
.on("complete",function(thought) {
  console.log(thought.name+": "+thought.message+"\nPayload: "+JSON.stringify(thought.arguments))
})
