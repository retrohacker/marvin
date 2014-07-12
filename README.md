Marvin
===

![Marvin](http://i.imgur.com/Bw1aQ1R.jpg)


Marvin is an advanced AI that handles your javascript callbacks for you. It has been programmed by the Sirius Cybernetics Corporation with a Genuine People Personality (GPP).

# Usage

You simply give Marvin a function you want to execute, and he takes care of it for you!

```js
var marvin = require('marvin-ai')

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
```

The way in which Marvin handles your function is non-deterministic, but here is an example output of the above code:

```text
EALONE: I've been talking to your processor... It hates me.
EUNSATISFIED: Here I am, brain the size of a planet, and they ask me to handle a callback. Call that job satisfaction, 'cause I don't.
EDEPRESSED: I think you ought to know I'm feeling very depressed
ESORRY: Sorry, did I compute something wrong? Pardon me for breathing which I never do anyway so I don't know why I bother to say it oh God I'm so depressed.
Payload: {"0":"complete!"}
```

You may have noticed, Marvin is in the middle of an existential crises.

# Features

* Self Aware: Marvin is concious, and often contemplates the meaning of life.
* Well commented: Check out Marvin's brain in index.js
* Motivated: Not really.
* Non-deterministic: Who knows if your callback was actually executed?

# Future releases / Roadmap

* Preprogrammed with the recipie for Pan Galactic Gargle Blaster
* Ability to produce towels on the spot
* Direct link to the Hitchhiker's Guide to the Galaxy database
