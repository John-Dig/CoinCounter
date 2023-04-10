//Professor Johnny III

function threeName(realName) {
  return function(first) {
    return function(thirdName) {
      return `Hey ${realName}, I'm going to call you ${first} ${realName} ${thirdName}.`;
    };
  };
}

threeName("Prof", "Johnny", "III");


const callEsquire = threeName()()("Esquire");
const nameIs = threeName()("John")();
const callPrefix = threeName("Mister")()();

