let temp = 55

// Logical and Operator - true if both sides are true. false otherwise
// Logical Or Operator - true if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh, do what you want')
}


// challenge area 

let isGuestOneVegan = true
let isGuestTwoVegan = true

// are both vegan? Only offer up vegan dishe. 
// at least one vegan? Make sure to offer up some vegan option
// Else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu')
}