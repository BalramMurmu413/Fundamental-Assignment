let btnDeposit = document.getElementById('btnDeposit')
let userDeposit = document.getElementById('userDeposit')
// deposit section 
let btnWithdraw = document.getElementById('btnWithdraw')
let userWithdraw = document.getElementById('userWithdraw')
// withdrawal section
let accountBalance = document.getElementById('accountBalance')
// account Balance 
// let inputs = document.getElementById('inputs')
// inputs 

// defaul variables
let withdrawals = [];
let deposits = [];
let totalBalance = 10;
// [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]
// formatter
const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
});



// addEventListener 
btnDeposit.addEventListener('click', ()=>{
    if(userDeposit.value < 1 || userDeposit.value > 10000){
alert("Deposit allowed only Amount Between 1 to 10,000")
return userDeposit.value = '';
    }

    // push deposits in an array 
    else{
        deposits.push(Number(userDeposit.value))
        // calculate total balance 
        totalBalance += (Number(userDeposit.value))
        
        let totalBalanceFormatter = formatter.format(totalBalance)
        accountBalance.innerHTML = totalBalanceFormatter
console.log("र" + userDeposit.value);
        return userDeposit.value = '';
    }
})
// withdrwal function ends here

// deposit fucntion  starts  here 

btnWithdraw.addEventListener('click',()=>{

    if(userWithdraw.value > totalBalance ){
        alert("Withdraw amount must be less than your total balance ")
return userWithdraw.value = '';

    }
    else{
        // push withdrawals in an array 
        withdrawals.push(Number(userWithdraw.value))
        // calculate total Balance 
        totalBalance -=(Number(userWithdraw.value))
       let totalBalanceFormatter =  formatter.format(totalBalance)
        accountBalance.innerHTML = totalBalanceFormatter     

        console.log("$"+ userWithdraw.value);
        return userWithdraw.value = ''
        
    }
})

let totalBalanceFormatter =  formatter.format(totalBalance)
accountBalance.innerHTML = totalBalanceFormatter  


        


        