let result = prompt('Enter your first and last name')

let regexDigits = /[\d]/g
let regexSpace =/^\w+\s\w+\b/gi
if(regexDigits.test(result) || !regexSpace.test(result) ){
    alert('Wrond input!')
    console.log('Wrong input!')
}else{
    let userName = result.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    console.log(`Hello, dear ${userName}!`);
    alert(`Hello, dear ${userName}!`)
}







