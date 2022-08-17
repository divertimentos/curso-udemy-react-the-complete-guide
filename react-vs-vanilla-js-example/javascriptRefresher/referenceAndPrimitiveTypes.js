const number = 1;
const num2 = number;

const person = {
  name: 'Max',
}

const secondPerson = {
  ...person
} 

person.name = 'Manu'

console.log(secondPerson)

