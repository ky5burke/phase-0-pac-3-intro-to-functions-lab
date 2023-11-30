function shout(string) {
    return string.toUpperCase();
}
console.log(shout("hello"))

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("HELLO"))

function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("hello")

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("HELLO")

// function sayHiToHeadphonedRoommate(par) {
//     return string(par).toLowerCase() === 'I can\'t hear you!';
// }

function sayHiToHeadphonedRoommate(string) {
//     if (par === 'string`.toLowerCase()) {
//         greeting = console.log("I can't hear you!");
// }       else if (par === `string`.toUpperCase()) {
//         greeting = console.log("YES INDEED");
// }       else if (par === "Let's have dinner together!") {
//         greeting = console.log("I would love to!");
//     return greeting
    if (string.toLowerCase() == string) {
        return "I can't hear you!"
    }

    if (string.toUpperCase() == string) {
        return "YES INDEED!"
    }
    if (string == "Let's have dinner together!"){
        return "I would love to!"
    }
}

//function sayHiToHeadphonedRoommate(string) {
    //if (string.toLowerCase() = string)
       // return "I can't hear you!"
   // console.log("I can't hear you!")
//}

console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))

//function sayHiToHeadphonedRoommate(string) {
    //if (string.toUpperCase() === string); {
        //return 'YES INDEED!';
//}}

//function sayHiToHeadphonedRoommate(string) {    
    //if (string === 'Let\'s have dinner together!'); {
        //return 'I would love to!';}
//}


//console.log(sayHiToHeadphonedRoommate("what doing"));
//sayHiToHeadphonedRoommate("ITS HOT IN HERE!");
//sayHiToHeadphonedRoommate("Let's have dinner together!");