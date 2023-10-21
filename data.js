// export const ganttData = [
//   ['Bread', 'Bread Counter', null, null, 15, 100, null],
//   ['Toppings', 'Toppings Counter', null, null, 35, 100, 'Bread'],
//   ['Toasting', 'Toasting', null, null, 45, 100, 'Toppings'],
//   ['VeggieSauce', 'Veggie and Sauce Counter', null, null, 30, 100, 'Toasting'],
//   ['Wrapping', 'Wrapping and Payment', null, null, 10, 100, 'VeggieSauce']
// ];
export const ganttData = [
  ['Bread', 'Bread Counter', new Date(2023, 0, 1), new Date(2023, 0, 1, 0, 0, 15), null, 100, null],
  ['Toppings', 'Toppings Counter', new Date(2023, 0, 1, 0, 0, 15), new Date(2023, 0, 1, 0, 0, 50), null, 100, 'Bread'],
  ['Toasting', 'Toasting', new Date(2023, 0, 1, 0, 0, 50), new Date(2023, 0, 1, 0, 1, 35), null, 100, 'Toppings'],
  ['VeggieSauce', 'Veggie and Sauce Counter', new Date(2023, 0, 1, 0, 1, 35), new Date(2023, 0, 1, 0, 2, 5), null, 100, 'Toasting'],
  ['Wrapping', 'Wrapping and Payment', new Date(2023, 0, 1, 0, 2, 5), new Date(2023, 0, 1, 0, 2, 15), null, 100, 'VeggieSauce']
];
