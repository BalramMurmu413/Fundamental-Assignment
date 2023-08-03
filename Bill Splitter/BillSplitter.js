function billSplitter(total, numOfPeople) {
    const amountPerPerson = total / numOfPeople
    console.log(`Each person should pay $ ${amountPerPerson}`)
  }
  
  const totalBill = prompt("Enter the Total Bill : ")
  const numOfPeople = prompt("Enter the Number Of People")
  console.log(billSplitter(totalBill,numOfPeople ))