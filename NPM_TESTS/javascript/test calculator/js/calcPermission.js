"use strict";

var isNumber=function (x)
{
    return(x^0)===x;
}

var is_operand=function  (oper){
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
            return null;
        };
    }
}
var getPurchasePermission = function () {

     var digit1 = Number(document.getElementById('first').value);
     if(!isNumber(digit1)||document.getElementById('first').value==''){
         document.getElementById('err_v1').innerHTML = 'No correct value. Number is required';
         document.getElementById('result').innerHTML="";
           return;
       }else {
           if(document.getElementById('err_v1').textContent.length > 0){
               document.getElementById('err_v1').innerHTML = '';
           }
       }

    var sign = document.getElementById('sign').value;
    if (!is_operand(sign)) {
        document.getElementById('err_v2').innerHTML = 'No correct value. SIGN is required';
        document.getElementById('result').innerHTML="";
        return;
    }
    else {
        if (document.getElementById('err_v2').textContent.length > 0) {
            document.getElementById('err_v2').innerHTML = '';
        }
    }

     var digit2 = Number(document.getElementById('second').value);
     if(!isNumber(digit2)||document.getElementById('second').value=='') {
         document.getElementById('err_v3').innerHTML = 'No correct value. Number is required';
         document.getElementById('result').innerHTML="";
         return;
     }else {
         if(document.getElementById('err_v3').textContent.length > 0){
             document.getElementById('err_v3').innerHTML = '';
         }
     }



        document.getElementById('result').removeAttribute('hidden');
        document.getElementById('result').setAttribute('class', 'col-md-3 center alert alert-success');

        document.getElementById('result').innerHTML = digit1+" "+sign+" "+digit2+" = "+calculate(digit1,digit2,sign);
}

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

var calculate = function (a,b,sign) {
    var res=undefined;

    if(!isNumber(a)||!isNumber(b)){
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


var clearInput = function () {
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

module.exports = calculate;


