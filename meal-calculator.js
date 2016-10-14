start()
function start () {
  'use strict'
  // Define Classes
  const locale = {
    new_jersey: {taxRate: 7.0/100},
    unknown: {taxRate: 0.00/100}
  }
  let Diner = function Diner (Name, options) {
    patron: '',
    state: '',
    tipRate: 17/100,  // I got this number from Google
    itemsOrdered: [],
    get taxRate () {
      delete this.taxRate
      return this.taxRate = locale[this.state]
    },
    get subTotal () {
      let retAmount = 0.0
      for (let i in this.itemsOrdered) {
        retAmount += this.itemsOrdered[i].price
      }
      return retAmount
    },
    get tip () {
      return this.subTotal * this.tipRate
    },
    get tax () {
      return this.subTotal * this.taxRate
    }
  }
  main()
}
function main () {
  var myLocale = new Locale
}