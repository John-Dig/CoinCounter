function speaker(animal) {
  return function(sound) {
    return `${animal} makes the following sound ${sound}`;
  };
}

const lionSound = speaker('lion');
const chickenSound = speaker('chicken');
const dogSound = speaker('dog');

lionSound('roar');
dogSound('bark');
chickenSound('bock');

