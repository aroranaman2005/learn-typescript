interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;

    // startTrial: ()=> string
    startTrial() : string; // means that startTrial is a method that should return a string
    getCoupon(couponname: string, value: number): number

}



// ----------->

// reopening of the interface ie. adding more values to the previously made interface
interface User {
    githubToken: string
} 

const naman: User = {dbId: 421, email: "naman@gmail.com", userId: 4343, startTrial: () => {return ""}, getCoupon: (name: "", off: 89) => { return 42 }, githubToken: ""}



interface Admin extends User{
    role: "admin" | "learner" | "ta"
}

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

export {}