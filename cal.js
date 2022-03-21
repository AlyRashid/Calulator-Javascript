// function addDigit(digit){
//     let exist_value = document.getElementById('screen').value;
//     document.getElementById('screen').value =  exist_value + digit;
// }

// function calculate(){
//     let exist_value = document.getElementById('screen').value;
//     let result = eval(exist_value);
//     document.getElementById('screen').value = result;
// }
// function clear_screen(){
//     document.getElementById('screen').value = '';
// }



var a,b , result;
var operator;
 
function get_number(num){
  document.getElementById('screen').value += num;
}

function clear_screen(){
        document.getElementById('screen').value = '';
    }
    
function store_value(ali){
      operator=ali;
     a =parseInt(document.getElementById('screen').value);
     document.getElementById('screen').value=" ";
}
 function result(){
     b =parseInt(document.getElementById('screen').value);

     

     if(operator == "+") {
     document.getElementById('screen').value=a+b;
     }else if(operator == "-"){
         document.getElementById('screen').value=a-b;
     }else if(operator == "*"){
        document.getElementById('screen').value=a*b;
    }else if(operator == "/"){
        document.getElementById('screen').value=a/b;
    }else if(operator == "%"){
        document.getElementById('screen').value=a%b;
    }
 }
// 