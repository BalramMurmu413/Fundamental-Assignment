const num1 = 5
const num2 = 3
let result = "+"
switch(result){
  case "+":
    console.log(num1,"+", num2, "=", `${num1+num2}`);
    break ;

    case "-":
    console.log(num1,"-", num2, "=", `${num1-num2}`);
    break ;
    
    case "*":
    console.log(num1,"*", num2, "=", `${num1*num2}`);
    break ;

    case "/":
        console.log(num1,"/", num2, "=", `${num1/num2}`)

    default:
    result = "Invalid Value";
    break;
    
} ;
