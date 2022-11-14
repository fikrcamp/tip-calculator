let bill = 200;
let tip;

if(bill > 50 <=  300){
  tip = bill * 0.15;
}else {
  tip = bill * 0.20;
}

let total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${total}`);