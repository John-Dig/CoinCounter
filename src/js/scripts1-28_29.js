

//coin counter-----------------
// let quarters = 0;
// let dimes = 0;
// let nickels = 0;
// let pennies = 0;


// const coinCounter = (amt) => {
//   if (amt < 25) {
//     if (amt < 10) {
//       if (amt < 5) {
//         if (amt === 0) {
//           console.log("quarters = " + quarters);
//           console.log("dimes = " + dimes);
//           console.log("nickels = " + nickels);
//           console.log("pennies = " + pennies);

//         }
//         else {
//           pennies++
//           return coinCounter(amt -1)
//         }
//       }
//       else {
//         nickels++
//         return coinCounter(amt -5)
//       }
//     }
//     else {
//       dimes++
//       return coinCounter(amt -10);
//     }

//   }
//   else {
//     quarters ++
//     return coinCounter(amt - 25);
//   }
// }



// const coinCounter = (amt, coinCounts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) => {
//   if (amt < 1) {
//     console.log("quarters = " + coinCounts.quarters);
//     console.log("dimes = " + coinCounts.dimes);
//     console.log("nickels = " + coinCounts.nickels);
//     console.log("pennies = " + coinCounts.pennies);
//     return;
//   }

//   if (amt >= 25) {
//     coinCounts.quarters++;
//     coinCounter(amt - 25, coinCounts);
//   } else if (amt >= 10) {
//     coinCounts.dimes++;
//     coinCounter(amt - 10, coinCounts);
//   } else if (amt >= 5) {
//     coinCounts.nickels++;
//     coinCounter(amt - 5, coinCounts);
//   } else {
//     coinCounts.pennies++;
//     coinCounter(amt - 1, coinCounts);
//   }
// };


// const prefixSir = addPrefix("Sir");




//tuesday project


// OBJECT ORIENTED WAY
// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }

//   hydrate() {
//     this.water ++
//   }
  
//   feed() {
//     this.soil ++
//   }

//   giveLight() {
//     this.light ++
//   }
// }


const hydrate1 = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

const changePlantState = (plant, property) => {
  return {
    ...plant, 
    [property]: (plant[property] || 0) + 1
  }
}

//more abstract
const c1State = (state, prop) => {
  return {
    ...state,
  [prop]: (state[prop] || 0) + 1
  }
}

//now accepts value. Note: implicit RETURN here with the arrow function parens.
const c2State = (state, prop, value) => ({
  ...state,
[prop]: (state[prop]|| 0) + value
})

//now we curry the function
const c3State = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
    [prop]:(state[prop] || 0) + value 
    })
  }
}

//tree object
const tree = {soil: 0, water: 0, light: 0};

//possible ways to use the function
const hydrate = c3State("water");
const feed = c3State("soil");
const giveLight = c3State("light");

//now we can use the functions like this as well
const blueFood = c3State("soil")(5)
const greenFood = c3State("soil")(10)
const yuckyFood = c3State("soil")(-5)

//notes about last function above: 
// Our function is pure, does not mutate state, and has no side effects;
// Our function is unary and takes only one argument;
// Our function uses currying, which allows us to reuse it as a function factory;
// Our function takes advantage of closures (because we wouldn't be able to curry without it);
// Our function is sufficiently abstracted that it could be used with other types of objects that could be incremented or decremented as well.

//****************** lesson 29

//the awesomeness function
const storeState = () => {
  let currentState = {}
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState)
    currentState = { ...newState }
    return newState
  }
}
// storing the function, closing -currentState-, all in a constant that invokes it
const stateControl = storeState();


//what's technically inside stateControl
// (stateChangeFunction) => {
  //   const newState = stateChangeFunction(currentState);
  //   currentState = {...newState};
  //   return newState;
  // }
  

  //pass in a feeding function without invoking
const fedPlant = stateControl(blueFood);
//{ soil: 5 }
//now const newState = blueFood(currentState);

//when blueFood(currentState) is called, it invokes:
// (state) => ({
//   ...state,
// ['soil']: (state['soil'] || 0) + 5
// })

