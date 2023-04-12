const storeState = () => {
  let currentState = {}
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState)
    currentState = { ...newState }
    return newState
  }
}

const stateControl = storeState();
