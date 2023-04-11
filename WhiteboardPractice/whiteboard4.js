function addMultiply(add) {
  return function(mult) {
    return function(value) {
      return ((value + add) * mult);
    }
  }
}

const addOneMultFour = addMultiply(1)(4);
const addTwoMultThree = addMultiply(2)(3);


