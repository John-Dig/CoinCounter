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




