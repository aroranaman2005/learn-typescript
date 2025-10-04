//  used to deal with situation where we are not sure of a particular type 
let score: number|string = 33
score = "33"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number
}

let naman : User | Admin = {name: "Naman", id: 43}
naman  = {username: "Naman", id: 43}



//function with union
function getDbId(id: number|string){
    if(typeof id === "string") id.toLowerCase();

}

// array with union
let arr: (number | string)[] = [87, "hjgjh"]
let arr2: number | string[] = ["hjgjh"]  // either a number or an array of string type
let arr3 : number[] | string[] = [3432,43242] // either an array of number or an array of string

let seatAllotment : "aisle" | "middle" | "window"
// seatAllotment can now be alloted any of the three values