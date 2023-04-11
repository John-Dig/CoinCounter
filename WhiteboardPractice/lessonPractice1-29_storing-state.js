// function for storing state (TEMPLATE)
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// stores function in a constant
const stateControl = storeState();

// this is the value of -stateControl-
(stateChangeFunction) => {
  const newState = stateChangeFunction(currentState);
  currentState = { ...newState };
  return newState;
}

// passing in feeding function from last lesson. Note: it does not INVOKE blueFood() yet!
const fedPlant = stateControl(blueFood);
{ soil: 5 }

// when blueFood() is called, it invokes the following function
(state) => ({
  ...state,
  ['soil']: (state['soil'] || 0) + 5
})

//passing in greenFood
const plantFedAgain = stateControl(greenFood);
{ soil: 15}


// an optional way to initialize the plant with all three properties
const storeState = () => {
  let currentState = { soil: 0, light: 0, water: 0 }; //small change made to function here.
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);                                 
    currentState = {...newState};
    return newState;
  }
}

// a more reusable way for potentially adding all options
const storeState = (initialState) => {
  let currentState = initialState; // We could pass in a n initial state to the object instead of starting with an empty object as well.
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//this will NOT WORK. blueFood expects to be given an object as an argument. Could do error handling to prevent this in an app.
// const blueFood = changeState('soil')(5);
// const fedPlant = stateControl(blueFood());
// ERROR: Uncaught TypeError: Cannot read property 'soil' of undefined


// less relevant ---------------------------------------------------paused about 2/3 way down, where bookmark is-

// storeState function literal again: 
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}