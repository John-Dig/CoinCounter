
function sayHi(prefix) {
  return function(yourName) {
    return `${prefix} ${yourName} how the hell are you?`
  }
}

const heyThere = sayHi("Doctor");

console.log(heyThere("Diggins"));