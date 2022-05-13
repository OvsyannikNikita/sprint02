

function addWords(obj,wrds){
   let obj1 = obj.words.split(' ')
   let foo = wrds.split(' ')
   obj1.push(foo[0])
   obj1.splice(1,1)
    obj.words = obj1.join(' ')
   return obj
}

function removeWords(obj, wrds){
    // let obj1 = obj.words.split(' ')
    let foo = wrds.split(' ')
    let firstWord = foo.splice(0,1).join('')
    let lastWord = foo.splice(1,1).join('')
    let final = obj.words.replace(firstWord,'').replace(lastWord,'')
    obj.words = final.trim()

}

function changeWords(obj,oldWrds,newWrds){
    let obj1 = obj.words.split(' ')
    let foo = newWrds.split(' ')
    obj1.splice(0,4)
    obj1.push(foo[0],foo[1])
    obj.words = obj1.join(' ')
        
}


const obj = {
    words : 'newspapers newspapers books magazines'
}
console.log(obj);



addWords(obj,'radio newspapers   ')
console.log(obj);

removeWords(obj, 'newspapers  radio');
console.log(obj);

changeWords(obj,'books radio  magazines', 'tv internet');
console.log(obj);

 





// let test = 'newspapers newspapers books magazines';
// let view = 'radio newspapers   ';

// let foo = view.split(' ')
// console.log(foo[0]);
// let test1 = test.split(' ')
//  test1.push(foo[0])



// console.log(test1.join(' '));


let a = '3.14'
let b = a - 0
console.log(b)
