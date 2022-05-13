const name = prompt('What animal is the superhero most similar to?')
let regex1 = /^[a-z]{1,20}$/i;


if (!regex1.test(name)){
    alert("ERROR")
}console.log(name);


let gender = prompt('Is the superhero male or female?Leave blank if unknown or other')
let regex2 = /^(male|female|\s+)?$/i
if (!regex2.test(gender)){
    alert("ERROR")
}console.log(gender);


let age = prompt('How old are super hero?')
let regex3 = /^[1-9][0-9]{0,5}$/
if (!regex3.test(age)){
    alert("ERROR")
}console.log(age);
 
let regularSpace = /\s/g

if(gender === 'male' && age<=18){
    alert(`The superhero name is: ${name}-boy`)
}else if(gender === 'male' && age>=18){
 alert(`The superhero name is: ${name}-man`)
}else if(gender === 'female' && age<=18){
    alert(`The superhero name is: ${name}-girl`)
}else if(gender === 'female' && age>=18){
    alert(`The superhero name is: ${name}-woman`)
}else if(regularSpace.test(gender) && age<=18){
    alert(`The superhero name is: ${name}-kid`)
}else {
    alert(`The superhero name is: ${name}-hero`)
}





