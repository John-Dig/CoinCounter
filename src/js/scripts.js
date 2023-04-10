let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;


const coinCounter = (amt) => {
  if (amt < 25) {
    if (amt < 10) {
      if (amt < 5) {
        if (amt === 0) {
          console.log("quarters = " + quarters);
          console.log("dimes = " + dimes);
          console.log("nickels = " + nickels);
          console.log("pennies = " + pennies);

        }
        else {
          pennies++
          return coinCounter(amt -1)
        }
      }
      else {
        nickels++
        return coinCounter(amt -5)
      }
    }
    else {
      dimes++
      return coinCounter(amt -10);
    }

  }
  else {
    quarters ++
    return coinCounter(amt - 25);
  }
}



const coinCounter = (amt, coinCounts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) => {
  if (amt < 1) {
    console.log("quarters = " + coinCounts.quarters);
    console.log("dimes = " + coinCounts.dimes);
    console.log("nickels = " + coinCounts.nickels);
    console.log("pennies = " + coinCounts.pennies);
    return;
  }

  if (amt >= 25) {
    coinCounts.quarters++;
    coinCounter(amt - 25, coinCounts);
  } else if (amt >= 10) {
    coinCounts.dimes++;
    coinCounter(amt - 10, coinCounts);
  } else if (amt >= 5) {
    coinCounts.nickels++;
    coinCounter(amt - 5, coinCounts);
  } else {
    coinCounts.pennies++;
    coinCounter(amt - 1, coinCounts);
  }
};


const prefixSir = addPrefix("Sir");




