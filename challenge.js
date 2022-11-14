// Good Luck! You got this 💪🏾
// Write your code here.



function tipCalc(bill){

     if (bill >= 50 && bill <= 300){
     let  tip = 15/100;
       final = bill + (tip * bill);
        return console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${final}`);
;
     }
     else {
        tip = 20/100;
        final = bill + (tip * bill);
          return console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${final}`);
;
       
     }
    }
tipCalc(400);
tipCalc(300);



