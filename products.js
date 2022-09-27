const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

for (const parameter of searchParameters) {
  console.log(parameter);
}


const newFirstName = searchParameters.get('firstName');
const newLastName = searchParameters.get('lastName');

console.log(newFirstName, newLastName);