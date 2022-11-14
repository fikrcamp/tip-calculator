// Good Luck! You got this 💪🏾
// Write your code here.


   let bill = 400;
   let tip = 0;
    let final = bill + (tip * bill);

     if (bill >= 50 && bill <= 300){
        tip = 15/100;
       final = bill + (tip * bill);
        
     }
     else {
        tip = 20/100;
        final = bill + (tip * bill)
       
     }

console.log(`The bill was ${bill} the tip was ${tip} and the total value is`,final);


