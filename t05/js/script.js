function total(addCount, addPrice, currentTotal = 0){
    
  return (addCount * addPrice) + currentTotal
}

 
let sum = total(1, 0.1)
sum = total(1, 0.2, sum)
sum = total(1, 0.78, sum)
console.log(sum);




