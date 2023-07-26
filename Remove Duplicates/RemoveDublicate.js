let shoppingCart = ["mouse", "lens","moniter","keyboard", "mouse","iphone","lens", "mouse pad","sampoo","sampoo"]       
function removeDublicate(product){
    return product.filter((index, element)=>product.indexOf(index)===element);

}
console.log(removeDublicate(shoppingCart));