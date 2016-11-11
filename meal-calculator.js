'use strict';
class Dish {
  constructor (name, price) {
    this.name = name || 'MISC';
    this.price = price || 0.00;
  }
}
class Diner {
  constructor (name) {
    this.name = name || "";
    this.dishList = [];
    this.taxPercent = 8.875 / 100.0;
    this.tipPercent = 20.00 / 100.0;
  }
  get dishTotal () {
    let ret = 0.00;
    this.dishList.forEach((dish) => {
      ret += dish.price;
    });
    return ret;
  }
  get tax () {
    return this.taxPercent * this.dishTotal;
  }
  get tip () {
    return this.tipPercent * this.dishTotal;
  }
  addDish (dish) {
    this.dishList.push(dish);
  }
}
class Bill {
  constructor (party) {
    this.dinerList = party || [];
  }
  printSubtotal () {
    let printVal = 0.00;
    this.dinerList.forEach((diner) => {
      printVal += diner.dishTotal;
      printVal += diner.tax;
    });
    const valString = moneyFormat(printVal);
    console.log("Total: " + valString);
  }
  printTipTotal () {
    let printVal = 0.00;
    this.dinerList.forEach((diner) => {
      printVal += diner.tip;
    });
    const valString = moneyFormat(printVal);
    console.log("Tip: " + valString);
  }
  printBillSplit () {
    console.log('Breakdown:');
    this.dinerList.forEach((diner) => {
      const subTotal = moneyFormat(diner.dishTotal);
      const taxAmt = moneyFormat(diner.tax);
      const tipAmt = moneyFormat(diner.tip);
      const grandTotalNum = diner.dishTotal 
        + diner.tax + diner.tip;
      const grandTotal = moneyFormat(grandTotalNum);
      console.log(diner.name + ':');
      console.log('  Subtotal: ' + subTotal);
      console.log('  Tax: ' + taxAmt);
      console.log('  Tip: ' + tipAmt);
      console.log('  ---------------------------');
      console.log('  Grand Total: ' + grandTotal);
    });
  }
}
function moneyFormat(price, signSym) {
  const sign = signSym || '$';
  const pieces = parseFloat(price).toFixed(2).split('');
  let ii = pieces.length - 3;
  while ((ii-=3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  return sign + pieces.join('');
}
// Main
//appetizers
const app1 = new Dish('app1', 9.99);
const app2 = new Dish('app2', 8.88);
const app3 = new Dish('app3', 7.77);
const apps = [app1, app2, app3];
//entrees
const chicken = new Dish('chicken', 23.45);
const fish = new Dish('fish', 22.22);
const beef = new Dish('beef', 33.33);
const entrees = [chicken, fish, beef];
//Diners 
let peter = new Diner('Peter');
let paul = new Diner('Paul');
let mary = new Diner('Mary');
const party = [peter, paul, mary];
// Add dishes to Diners
party.forEach((diner, index) => {
  diner.addDish(apps[index]);
  diner.addDish(entrees[index]);
});
// Print Bill
const table1 = new Bill(party);
table1.printSubtotal();
table1.printTipTotal();
table1.printBillSplit();
