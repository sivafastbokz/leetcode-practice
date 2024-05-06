//check if object is instance of class
var checkIfInstanceOf = function(obj, classFunction) {
   return Object.getPrototypeOf(obj) === classFunction.prototype

};

class Car {
   constructor (brand,model) {
        this.brand = brand,
        this.model = model 
   }
}

class Student {
    constructor (name,age) {
     this.name = name,
     this.age = age
    }
}

const newStudent = new Student('siva',22)
console.log(newStudent)

const myCar = new Car('frod','figo')
console.log(myCar)

console.log(checkIfInstanceOf(myCar,Car))

// array prototype last
function findLastNum(arr){
    arr.lastIndexOf()
}

const num = [1,2,3,4,5]
const ntg = []
function findLastNum(arr){
    if(arr.length === 0){
        return -1
    }else{
        return arr[arr.length-1]
    }
}

console.log(findLastNum(num))
console.log(findLastNum(ntg))

//counter in closure
function createCounter(n){
       let count = n
     function counter(){
      return count++
    }
     return counter
}

const numberAdd = createCounter(10)
console.log(numberAdd())
console.log(numberAdd())

//Filter Elements from Array
const filterArray = [1,20,35,68,90]
const answer = []

function greaterNum(arr){
     for(let i = 0;i < arr.length;i++){
        if(arr[i]> 10){
            answer.push(arr[i])
        }
     }
}

greaterNum(filterArray)
console.log(answer)

//function composition

const add = (x) => x + 5
const multiply = (x) => x * 3
const subtract = (x) => x - 10

// const compose = (...funs) => x => funs.reduceRight((acc,fn)=> fn(acc),x )
const compose = (...funs)=>{
  return (x)=>{
     return funs.reduceRight((acc,fn)=>{
        // console.log(acc)
        // console.log(fn)
       return fn(acc)
     },x)
  }
}

const composedFunction = compose(subtract,multiply,add)
const result = composedFunction(7)
console.log(result)

const array = filterArray.reduceRight((prev,currentv)=>{
    // console.log(prev,'prev')
    // console.log(currentv,'currentv')
    return prev+currentv
},0)
console.log(array)

//check if object or array is empty

const obj = {
    name:'siva',
    age:22
}

function isEmptyobj(obj){
   if(Object.keys(obj).length === 0){
      return true
   }else {
    return false
   }
}

console.log(isEmptyobj(obj))

//class calculator

// class Calculator {
//     constructor (add,subtract) {
//        this.add = add,
//        this.subtract = subtract
//     }
//     getResult = (value) =>{
//           return this.add
//     }
// }