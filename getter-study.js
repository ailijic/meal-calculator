'use strict'
/*
let a = {
    value: 2,
    get doubleVal () { return this.value * 2 }
}
console.log(a.doubleVal)

function b (value = 2) {
    this.value = value
    this.__defineGetter__('doubleVal', () => { return this.value * 2 })
}
let obj = new b()
console.log(obj.doubleVal)
*/
function getterPropOptions (func) {
    //! When using Object.definePropery to set getter,
    //    call this function as the third argument,
    //    pass in your getter function. 
    let retObj = {
      configurable: true,
      enumerable: true
    }
    retObj.get = func
    return retObj
  }
const getterFunc = () => {return this.value * 2}

let c = (function () {
  function c (value = 2) {
    this.value = value
    Object.defineProperties(this, 'doubleVal', getterPropOptions(getterFunc))
  }

  Object.defineProperty(c.prototype, 'doubleVal', getterPropOptions(getterFunc))
  
  return c
}) ();
let Obj = new c(5)
console.log(obj.doubleVal)