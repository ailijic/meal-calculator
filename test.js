function print (obj) {
  console.log(obj)
}

let Person = (function () {
  const private = new WeakMap()
  function Person (name) {
    const privateProperties = {
      name: name
    }
    private.set(this, privateProperties)
  }

  Person.prototype.compareTo = function (other) {
    const thisName = private.get(this).name
    const otherName = private.get(other).name
    return thisName.localeCompare(otherName)
  }

  Person.prototype.toString = function () {
    return private.get(this).name
  }

  return Person
}) ();

const people = [
  new Person('Homer'),
  new Person('Lenny'),
  new Person('Carl')
]

people.sort((first, second) => {
  return first.compareTo(second)
})

print('Sorted people: ' + people.join(', '))

let timmy = new Person('Timmy')
function getAllMethods (obj) {
  return Object.getOwnPropertyNames(obj)
} 
console.log(Object.getOwnPropertyNames(Person))