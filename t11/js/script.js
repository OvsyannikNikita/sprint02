function concat(string1,string2){
    
    if(string2){
        return `${string1}  ${string2}`
       } else {
       
         function foo(){
             foo.count++
        return `${string1} ${prompt('Enter words')}`
        
      } 
      foo.count = 0 
      return foo
           
    }
          
}
  


let phrase1 = concat('Hulk', 'smash!')
let output = phrase1;
console.log(output)

let phrase2 = concat('Leave')
output = phrase2()

console.log(output)
console.log(phrase2.count)

output = phrase2()

console.log(output)

output = phrase2()

console.log(output)
console.log(phrase2.count);

let phrase3 = concat('Go')
output = phrase3()

console.log(output)
console.log(phrase3.count)
console.log(phrase2.count)

