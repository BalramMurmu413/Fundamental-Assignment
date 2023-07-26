function vowelCounter(counter){
    let vowelNo = 0    
    let string = counter.toString() // turn the input into a string
    //loop though the string
    for (i = 0; i < string.length - 1; i ++){
        if(string.charAt(i) == "a" || string.charAt(i)== "e" || string.charAt(i)== "i"|| string.charAt(i)== "o"|| string.charAt(i)== "u" ){
            vowelNo +=1

        }
    }
    return vowelNo
  }

console.log(vowelCounter(myName))