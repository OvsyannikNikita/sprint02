// let Man = function(name){
//     this.name = name
//     this.canSpeak = true
//     this.age = '18';
//     this.sayHello = function(){
//         return 'Hello!My name is ' + this.name + this.age
//     }
// }

// let vanya = new Man('Vanya')
// let petr = new Man('Petro' )
// console.log(vanya.name);
// console.log(vanya.canSpeak);
// console.log(vanya);
// console.log(petr.sayHello());
// console.log(vanya.sayHello());

let Calculator = function () {
  this.init = function (num) {
    this.result = num;
    return this;
  };
  this.add = function (num) {
    this.result += num;
    return this;
  };
  this.mul = function (num) {
    this.result *= num;
    return this;
  };
  this.div = function (num) {
    this.result /= num;
    return this;
  };
  this.sub = function (num) {
    this.result -= num;
    return this;
  };

  this.alert = function () {
    setTimeout(function () {
      alert(calc.result);
    }, 5000);
  };
};

const calc = new Calculator();

console.log(calc.init(2).add(2).mul(3).div(4).sub(2).result);
calc.alert();
