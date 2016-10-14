// Prototypes
/*
MDN:
  All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype, although they may be overridden (except an Object with a null prototype, i.e. Object.create(null)). For example, other constructors' prototypes override the constructor property and provide their own toString() methods.
*/
let a
typeof(a)
// > undefined
a.prototype.name = 'letter'
// > TypeError: Cannot read property 'prototype' of undefined
// Okay, that makes sense

let b = {}
typeof(b)
// > object
a.prototype.name = 'letter'
// > TypeError: Cannot set property 'name' of undefined
// Wait, Oh; "except an Object with a null prototype, i.e. Object.create(null)"
//// Object.create(null) === {}
// Okay, I disagree but at least it is in the manual

let c = function () {}
typeof(c)
// > function
c.prototype.name = 'letter'
// > TypeError: Cannot set property 'name' of undefined
//// What! 
//// ??? Why does this not work ???

let d = function d () {}
typeof(d)
// > function
d.prototype.name = 'letter'
// > letter
d.name
// > letter
//// Huh?
//// ??? Why is there a difference between named and anon functions ???
//// Is it because of lazy evaluation?

