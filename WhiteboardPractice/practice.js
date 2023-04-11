//some refactoring of functions React wk1-28
const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};
// more general to take in soil, water, or light
const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}

//can call above function like this
> let plant = { soil: 0, light: 0, water: 0 }
> changePlantState(plant, "soil")
{soil: 1, light: 0, water: 0}


const changeState = (state, prop) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + 1
  }
}

const changeState = (state, prop, value) => ({
  ...state,
  [prop] : (state[prop] || 0) + value
})

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// examples of how to run
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");