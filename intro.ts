
// the command - tsc intro.ts is used to convert ts file to js file
// the command - node intro.js is used to run the js file

// types in ts
// Number , String , Boolean , null , undefined , void ,  Object, Array, Tuples, 
// any, Never, 



// various datatypes in ts

let greetings: string = "Hello World"
// greetings = 42 // error
console.log(greetings)


let userId:number = 134.2

let isLoggedIn: boolean = false


// use of any datatype
let hero: any;
function getHero(){
    return "hackerr";
}
hero = getHero();


export {}