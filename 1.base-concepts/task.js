"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr = [x1 , x2]
  }
  else if (d == 0) {
    let x1 = -b/(2*a);
    arr = [x1]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let pay = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
  let finalPay = pay * countMonths;
  return +finalPay.toFixed(2);
}