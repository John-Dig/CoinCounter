
//before
const canEat = function(creature) {
  const obj = {
    eat: function(food) {
      return `The ${creature} eats the ${food}.`
    }
  }
  return obj;
}

const canSleep = function(creature) {
  const obj = {
    sleep: function() {
      return `The ${creature} sleeps.`
    }
  }
  return obj;
}

//after (adds .name)
const canEat = function(creature) {
  const obj = {
    eat: function(food) {
      return `The ${creature.name} eats the ${food}.` // Small update
    }
  }
  return obj;
}

const canSleep = function(creature) {
  const obj = {
    sleep: function() {
      return `The ${creature.name} sleeps.` // Small update
    }
  }
  return obj;
}

//arrow function version note: IMPLICIT RETURN!
const canEat = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

const canSleep = (creature) => ({
  sleep: () => {
    return `The ${creature.name} sleeps.`
  }
});

const sleepingEatingCreature = (name) => {
  let creature = {
    name
  }

  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};