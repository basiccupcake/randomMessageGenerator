let astro = ["The day you are born does not affect your personality.", "Your star sign cannot predict how your day will go.", "What even is a rising moon?"]
let jokes = ["Don't interrupt someone working intently on a puzzle. Chances are, you'll hear some crosswords.", "The machine at the coin factory just suddenly stopped working, with no explanation. It doesn't make any cents!", "I was going to make myself a belt made out of watches, but then I realized it would be a waist of time."]
let inspiration = ["I can't change the direction of the wind, but I can adjust my sails to alway reach my destination", "Don't judge each day by the harvest you reap but by the seeds that you plant", "We must let go of the life we have planned, so as to accept the one that is waiting for us"]

let messages = [astro, jokes, inspiration]

const rmg = () => {
    let typeOfMessage = Math.floor(Math.random() * 3)
    let messageNumber = Math.floor(Math.random() * 3)
    let message = messages[typeOfMessage][messageNumber]
    console.log(typeOfMessage)
    console.log(messageNumber)
    console.log(message)
}

rmg()