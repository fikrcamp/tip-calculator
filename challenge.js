// Good Luck! You got this 💪🏾
// Write your code here.


const calcTip = (bill) => {
    totalValue = bill * 0.15 + bill
    totalValue2 = bill * 0.20 + bill
    if (bill >= 50 && bill <= 300) {
        console.log("the bill was " + bill + ", the tip was " + bill * 0.15 + " and the total value is " + totalValue)
    } else {
        console.log("the bill was " + bill + ", the tip was " + bill * 0.20 + " and the total value is " + totalValue2)
    }
    return bill
}

calcTip(275)