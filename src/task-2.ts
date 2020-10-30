interface IUser {
  name: string;
  age: number;
  hobby: string;
  premium: boolean;
}
const user: IUser = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
const userKeys = Object.entries(user);
for (const [key, value] of userKeys) {
  console.log(`${key}:${value}`);
}

////

interface IEmployee {
  [key: string]: number;
}
interface IParams {
  [key: string]: number;
}
type FnParams = (employees: IParams) => string;

const findBestEmployee: FnParams = function (employees) {
  const entriesArray = Object.entries(employees);
  let bestEmployee: string = '';
  let prevResult: number = 0;
  for (const [string, number] of entriesArray) {
    if (prevResult < number) {
      bestEmployee = string;
      prevResult = number;
    }
  }
  return bestEmployee;
};
const employee1: IEmployee = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(employee1)); // lorence
const employee2: IEmployee = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(employee2)); // mango
const employee3: IEmployee = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(employee3)); // lux

/////

interface IObj {
  name: string;
  price: number;
  quantity: number;
}

const products: IObj[] = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

type FnGetAllPV = (
  arr: IObj[],
  prop: keyof IObj,
) => string[] | number[] | object[];

const getAllPropValues: FnGetAllPV = function (arr, prop) {
  const result = arr.filter(el => (el[prop] ? true : false));

  return result;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

export {};
