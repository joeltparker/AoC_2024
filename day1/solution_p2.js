import fs from 'fs'

//const input = fs.readFileSync('./test.txt', 'utf-8').trim().split('\n');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
let rows = input.map(line => line.replaceAll(/\s+/g, ',').split(','));

let [column1, column2] = [rows.map(row => parseInt(row[0])), rows.map(row => parseInt(row[1]))];

let dict = {};

for (const value of column2)
{
  if (dict[value])
  {
    dict[value]++;
  }
  else
  {
    dict[value] = 1;
  }
};

let sim = column1.map(value => {
  let tmp = 0;
  if (value in dict){
    tmp = dict[value]
    return tmp * value;
  }
  else{
    return tmp;
  }
})

let total = sim.reduce((tot, value) => {
  return tot + value
})

console.log('total: ' + total)

