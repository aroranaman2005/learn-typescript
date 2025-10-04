const User = {
    name: "naman",
    email: "naman@google.com",
    isActive: true
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
createUser({name: "naman", isPaid: false});



// function returning the object
function createCourse(): {name:string, price:number} {
    return {name:"reactjs", price:399}
}


//  what if i pass more information than the parameters of function
function func({name, courseName}: {name:string, courseName:string}){
    return "Status 200"
}

// func({name:"naman", courseName:"TS", isPaid: true})  ---- gives error

// let user = {name:"naman", courseName:"TS", isPaid: true}
// func(user)  -- although user has much more information than required, it doesnt give error


// ------------------------------------------------------------------------------------------------------


// TYPE ALIASES -- used for user defined types
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function signIn(user: User): User{ 
    return {name:"", email: "", isActive: false}
}
signIn({name:"naman", email: "", isActive: true})

export {}


// ---------------------------------------------------------------------------------------------------------


// readonly keyword  -- makes the property immutable
// optional property  -- property which may or may not be present using ? after property name
type Guest = {
    readonly _id: string;  // _id cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number  // optional property
}

type cardNumber = {
    cardNo: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myGuest: Guest = {
    _id: "123",
    name: "naman",
    email: "naman@google.com",
    isActive: false
}

// myGuest._id = "456"  // gives error