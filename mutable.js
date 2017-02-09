
// mutable

const person = {
  name: 'John',
  age: 28
}
const newPerson = person
newPerson.age = 30
console.log(newPerson === person) // true
console.log(person) // { name: 'John', age: 30 }

//-- immutable 





const person = {
  name: 'John',
  age: 28
}
const newPerson = Object.assign({}, person, {
  age: 30
})
console.log(newPerson === person) // false
console.log(person) // { name: 'John', age: 28 }
console.log(newPerson) // { name: 'John', age: 30 }
