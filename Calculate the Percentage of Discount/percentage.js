
const disco = (itemPrice, discountPercentageOnItem) =>{
    let greetingMessage = "Thank You, Visit Again!"
    let total= itemPrice * discountPercentageOnItem / 100
    console.log( `you can save ${total} Rs. for this item`);
    return greetingMessage
    }
    console.log(disco(500,9))