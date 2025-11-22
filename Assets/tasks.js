var tasks = [
    {
        id: 0,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: true,
        description: "Say, 'Guess what?' to a player. If they say 'What?' then say, 'You got got!'"
    },
    {
        id: 1,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to say 'sugar'"
    },
    {
        id: 2,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to complement your hair"
    },
    {
        id: 3,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to correct you on the time of day"
    },
    {
        id: 4,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to high five you twice in one day"
    },
    {
        id: 5,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to correct your spelling"
    },
    {
        id: 6,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to cut a label off clothes you're wearing"
    },
    {
        id: 7,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to burp"
    },
    {
        id: 8,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to read out a sentence of a book"
    },
    {
        id: 9,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to try and cure your hiccups"
    },
    {
        id: 10,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Throw something and get a player to pick it up for you"
    },
    {
        id: 11,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to say something in a different language'"
    },
    {
        id: 12,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to do an impression of you"
    },
    {
        id: 13,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to whistle"
    },
    {
        id: 14,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Convince a player to remove an item of clothing"
    },
    {
        id: 15,
        taskLength: "long", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Mention a song. Later, have that song play in the background. If a player comments on the coincidence, they got got"
    },
    {
        id: 16,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Adopt a wide legged stance, have another player immitate you. Ask if they feel powerful. Then tell them they got got"
    },
    {
        id: 17,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Make a promise to another player and get them to comment when you break that promise"
    },
    {
        id: 18,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Chant the words 'you got got' in response to someone getting got. If anyone joins in, they got got"
    },
    {
        id: 19,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to hit you"
    },
    {
        id: 20,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper, then hide this card on another player without getting caught"
    },
    {
        id: 21,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to ask if you're crying"
    },
    {
        id: 22,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to say 'you're not ugly'"
    },
    {
        id: 23,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to commit to a crime"
    },
    {
        id: 24,
        taskLength: "long", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to tie a knot in a balloon"
    },
    {
        id: 25,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to correct you on the name of the song or artist that's playing"
    },
    {
        id: 26,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to tell you a knock knock or how did the chicken cross the road joke"
    },
    {
        id: 27,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Tell a player something is voice activated and get them to try it"
    },
    {
        id: 28,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to yawn"
    },
    {
        id: 29,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper. Hide it in a jar and get someone to open the jar"
    },
    {
        id: 30,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Pick an object and tell a player it smells really weird, get them to smell it"
    },
    {
        id: 31,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to show you how the heimlich maneuver works"
    },
    {
        id: 32,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player's birthday wrong and get them to correct you'"
    },
    {
        id: 33,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write you got got on a piece of paper and throw it at someone. If they read the message, you got them"
    },
    {
        id: 34,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to make a fart sound"
    },
    {
        id: 35,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Call a player and pretend to be selling them something. Have them hang up without realising its you"
    },
    {
        id: 36,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a movie quote wrong and get someone to correct you"
    },
    {
        id: 37,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Create a stack of objects and knock it over"
    },
    {
        id: 38,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Pretend to have something in your eye and have someone look to see what it is"
    },
    {
        id: 39,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper and hide it under a hat. Get a player to try the hat on, then get them to look inside"
    },
    {
        id: 40,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper and hide it between a phone and its case and get a player to open the case and find it"
    },
    {
        id: 41,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper and use it as a bookmark. Get a player to read what it says on the bookmark"
    },
    {
        id: 42,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to say 'game over'"
    },
    {
        id: 43,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Ask a player to message you something later to remind you to do something. If they message reply with a screenshot of this task"
    },
    {
        id: 44,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get another player to make an animal noise"
    },
    {
        id: 45,
        taskLength: "long", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to throw food to catch in your mouth (or the other way round). If you (or them) catch the food in your (their) mouth, show them this card"
    },
    {
        id: 46,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to do a dance"
    },
    {
        id: 47,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to repeat themselves three times"
    },
    {
        id: 48,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Perform a magic trick, get a player to ask them how you did it"
    },
    {
        id: 49,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to take a sip of your drink"
    },
    {
        id: 50,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Tap a player on the back and get them to blame someone else"
    },
    {
        id: 51,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to play rock paper scissors with you until you win"
    },
    {
        id: 52,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: true,
        description: "Get a player to play rock paper scissors with you"
    },
    {
        id: 53,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Start singing and get someone to join in"
    },
    {
        id: 54,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to delete a photo from their phone"
    },
    {
        id: 55,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to challenge you to a thumb war"
    },
    {
        id: 56,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Suggest a song and get someone to play it"
    },
    {
        id: 57,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Quote something and get someone to continue the quote (can be a song, from a movie, ect.)"
    },
    {
        id: 58,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Pretend to be on the phone and get someone to write down something for you"
    },
    {
        id: 59,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to argue which way north is"
    },
    {
        id: 60,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write this task on a piece of paper and put it in a bag of snacks. If a player reaches in and touches it, they got got"
    },
    {
        id: 61,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Pretend to be hurt somewhere, get someone to ask if you're alright"
    },
    {
        id: 62,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to walk around a table twice"
    },
    {
        id: 63,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to bring you a drink"
    },
    {
        id: 64,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Convince someone you were part of a circus as a child"
    },
    {
        id: 65,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Make up a word and get someone to ask you what it means"
    },
    {
        id: 66,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Say the word 'horseraddish' five times without anyone commenting on it"
    },
    {
        id: 67,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to compare you to god"
    },
    {
        id: 68,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to offer you food without you asking"
    },
    {
        id: 69,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Start a round of applause and get another player to join in"
    },
    {
        id: 70,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Do a funny face and get another player to do one back"
    },
    {
        id: 71,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get another player to show you a picture of their pet"
    },
    {
        id: 72,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write something on your hand and get someone to ask what it says unprompted"
    },
    {
        id: 73,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to ask what you're drinking"
    },
    {
        id: 74,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Send a message to someone and get them to ask if it was meant for someone else"
    },
    {
        id: 75,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Tell a player they're got food on their face and get them to try to get it off"
    },
    {
        id: 76,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to ask where you're looking at"
    },
    {
        id: 77,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write or send a message to someone using the wrong your/you're and get them to correct you"
    },
    {
        id: 78,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Write or send a message to someone using the wrong there/their/they're and get them to correct you"
    },
    {
        id: 79,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Draw a spot on your face and get a player to comment on it unprompted"
    },
    {
        id: 80,
        taskLength: "medium", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Make up a new idiom and get someone to ask you what it means"
    },
    {
        id: 81,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Get a player to correct you on what day of the week it is"
    },
    {
        id: 82,
        taskLength: "short", // short <1 day, medium ~1 week, long > week
        isGlobal: false,
        description: "Keep pronouncing a word wrong until someone corrects you on it"
    },
]
