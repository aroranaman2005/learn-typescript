function addTwo(num: number): number {
    return num + 2;
}
addTwo(4);
// or using arrow function
// let addTwo = (num: Number): Number => {  
//      return num + 2;
// }


function getUpper(val: string): string {
    return val.toUpperCase();}
getUpper("hello");


function signUpUser(name:string, email:string, isPaid:boolean): boolean{
    return true;
}
signUpUser("Naman", "naman@gmail.com", true);


// passing optional parameters
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}
loginUser("arora", "a@gmail.com")


// using 'union' to handle multiple return types
function func(val: number): string|boolean{
    if(val>5) return true;
    else return "Value smaller than 5"
} 

const sayHello = (s: string): string => {
    return "Hello World"
}


// using maps
const heros = ["thor", "spiderman", "ironman"]
heros.map((hero: string) : string =>{
    return `hero is ${hero}`
})


// using never type  means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}
export {}