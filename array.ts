const superHeros = [];  // by default, the type is inferred as any


// Method 1;
const superHeros2: string[] = [];  // array of strings
const heroPower: number[] = [];  // array of numbers

// Method 2;
const superHeros3: Array<string> = [];


type User = {
    name: string;
    isActive: boolean;
}
const superHeros4: Array<User> = [];
superHeros4.push({
    name: "Naman",
    isActive: false
})


// creating 2d array
const MLModels : number[][] = [
    [24,324,342],
    [32,432,52],
    [765,63,632],
]