/*Task # 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

*/

function buildCar(manufacturer: string, model: string, ...options: any[]): {} {
  const car = { manufacturer, model};
  for (const option of options) {
    const [key, value] = option;
    car[key] = value;
  }
  return car;
}

const myCar = buildCar("Tesla", "Model S", ["color", "red"], ["feature", "autopilot"]);

console.log(myCar);