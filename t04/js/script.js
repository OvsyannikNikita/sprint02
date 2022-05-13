let beginRange = prompt('Tell me start number!',1)
let endRange = prompt('Tell me end number!',100)




function checkDivision(beginRange,endRange){
    let result = ''
    for (let i = beginRange;i <= endRange;i++){
        
        if(i % 2 == 0 && i % 3 == 0 && i % 10 == 0){
            result += `${i} is even, a multiply of 3, a multiply of 10\n`
        }else if(i % 2 == 0 && i % 3 == 0){
           result += `${i} is even , a multiply of 3\n`;
        }else if(i % 2 == 0 &&  i % 10 == 0){
    result += `${i} is even , a multiply of 10\n`;
        }else if(i % 2 === 0){
          result += `${i} is even\n` 
    }else if (i % 3 === 0){
        result += `${i} is multiply of 3\n`;
     } else
     result += `${i} -\n` 
       }
    return result
}

console.log(checkDivision(beginRange,endRange))

