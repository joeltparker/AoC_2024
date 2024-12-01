import fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
console.log(input)

let rows = input.map(line => line.replaceAll(/\s+/g, ',').split(','));
let [column1, column2] = [rows.map(row => parseInt(row[0])), rows.map(row => parseInt(row[1]))];

//console.log('column1: ' + column1)
//console.log('column2: ' + column2)

column1 = column1.sort((a, b) => a - b);
column2 = column2.sort((a, b) => a - b);

let diff = column1.map((value, index) => 
                        {
                        return Math.abs(value - column2[index]);
                       })
let sum = diff.reduce((total, value) => {
    return total + value
})

//console.log('column1: ' + column1)
//console.log('column2: ' + column2)
//console.log('diff: ' + diff)
console.log('sum: ' + sum)

