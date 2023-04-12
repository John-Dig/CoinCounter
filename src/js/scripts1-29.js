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
(stateChangeFunction) => {
  const newState = stateChangeFunction(currentState);
  currentState = {...newState};
  return newState;
}

//pass in a feeding function without invoking
const fedPlant = stateControl(blueFood);
{ soil: 5 }
//now const newState = blueFood(currentState);

//when blueFood(currentState) is called, it invokes:
(state) => ({
  ...state,
['soil']: (state['soil'] || 0) + 5
})
