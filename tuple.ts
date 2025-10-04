// used when we want an array with elements in a particular order like {boolean, string, number}

const tUser : [string, number, boolean] = ["", 0, false];

let rgb : [number, number, number] = [255,245,234]


type User = [number, string]
const newUser: User = [90, "naman@gmail.com"];
newUser[0] = 89

// CONTROVERTIAL THING
newUser.push(90)  // this should give error as this is not following the structure of User