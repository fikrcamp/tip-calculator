// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most.

const calcTip = (bill,tip) =>{
    console.log(`Your bill is ${bill}, the tip is ${bill*tip} and the total value $${bill+bill*tip}`)
}
calcTip(370,0.20)