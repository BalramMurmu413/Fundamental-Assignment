function rentalCost(days,  carType){
    let economy = 4000
    let luxury = 20000
    let midsize = 10000
    switch (carType) {
    case "luxury":
        console.log(days * luxury)
        break;
        case "midsize":
        console.log(days * midsize)
        break;
        case "economy":
            console.log(days * economy)
            break;
        default:
        console.log("Please choose valid car or days")
        break;
}}


console.log(rentalCost(2,"midsize"))
console.log(rentalCost(2,"luxury"))
console.log(rentalCost(3,"economy"))

    
  
