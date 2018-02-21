function division(a,b){
     if(b!=0) return a/b;
     else {
       //  alert("Деление на 0 не возможно");
         return null;
     }
 }
 function multiply(a,b){
     return a*b;
 }
 function division_with_remainder(a,b){
     if(b!=0) return a%b;
     else {
         //alert("Деление на 0 не возможно");
         return null;
     }
 }
 function sum(a,b){
     return a+b;
 }
 function subtraction(a,b){
     return a-b;
 }

function is_operand (oper){
    switch (oper){
         case "/":
         case "*":
         case "%":
         case "+":
         case "-": {
             return oper;
         };
             break;
         default:
         {
            // alert("Вы ввели неверный знак операции");
             return null;
         };
     }
 }

function is_number(x)
 {
     return(x^0)===x;
 }

function calculator (a,b,sign) {
    var res=undefined;
    console.log (a,b,sign);

    if(!is_number(a)||!is_number(b)){
        return null;
    }
    if (!is_operand (sign)){
       return null;
    }
     switch (sign) {
         case "/": {
             res=division(a,b);
             return res;
        };
             break;
         case "*": {
             res=multiply(a,b);
             return res;
         };
             break;
         case "%": {
             res=division_with_remainder(a,b);
             return res;
         };
             break;
         case "+": {
             res=sum(a,b);
             return res;
         };
             break;
         case "-": {
             res=subtraction(a,b);
             return res;
        };
             break;
     }     
 }
