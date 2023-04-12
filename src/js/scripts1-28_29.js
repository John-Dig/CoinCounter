
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
  [prop]: (state[prop] || 0) + value
})

//now we curry the function
const c3State = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

//tree object
const tree = { soil: 0, water: 0, light: 0 };

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

//****************** lesson 29*************************************
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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
// PASS IN: const fedPlant = stateControl(blueFood); GET OUT: { soil: 5 }

//now const newState = blueFood(currentState);

//when blueFood(currentState) is called, it invokes:
// (state) => ({
//   ...state,
// ['soil']: (state['soil'] || 0) + 5
// })

// Awesome function being able to pass in initialState
const storeState2 = (initialState) => {
  let currentState = initialState; // (instead of starting with empty object)
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// A note worth mentioning again: it is very important that we pass in a variable holding a function into stateControl and not the invoked function. This would not work:

// const blueFood = changeState("soil")(5);

// const fedPlant = stateControl(blueFood());

//error handling could be added to functions to account for this possibility

//returns the current state with this change to the third line that handles if stateChangeFunction is undefined:
const storeState3 = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//*****REFER TO FunctionalApplicationComplete.js to see and use a simplified version of above */