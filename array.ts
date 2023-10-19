import chalk from 'chalk';

const log = console.log;
const header = chalk.italic.redBright.underline;
const subheader = chalk.magentaBright;
const diff = chalk.blueBright;
const dashStyle = chalk.yellow;
const highlight = chalk.italic.underline.grey;

const terminalWidth = process.stdout.columns;

const dashed = (w = terminalWidth) => {
  let dash = '';
  for (let i = 0; i < w; i++) {
    dash += '-';
  }
  log('\n' + dashStyle(dash) + '\n');
}

// Array methods
// splice: arr.splice(start[, deleteCount, elem1, ..., elemN])

log(header('Array Method: Splice'));
let arr = ['I', 'love', 'JS', 'TS', 'Next.js'];

log(diff('Before: '), arr);
let removed = arr.splice(1, 1, 'hate');
log(diff('After: '), arr, '\n');
log(subheader('Removed element(s):'), removed);

dashed();

// slice
log(header('Array Method: Slice'));
arr = ['I', 'love', 'JS', 'TS', 'Next.js'];

log(diff('Before: '), arr);
removed = arr.slice(1, 3);
log(diff('After:'), arr, '\n');
log(subheader('Removed element(s): '), removed);

dashed();

// concat: arr.concat(arg1, arg2...)
log(header('Array Method: Concat'))
log(diff('Before: '), arr)
let concatArr = arr.concat(['MongoDB', 'Express.js'], 'Postgres', ['Docker', 'Kubernetes']);
log(diff('After: '), arr, '\n')
log(subheader('Concatanation: '), concatArr)

dashed();
// forEach: arr.forEach(function(item, index, array) {})
log(header('Iteration in Array: ForEach'))
log(diff('Before: '), arr);
log(diff('After: '));

arr.forEach((item, index, array) => {
  log(`${highlight(item)} is present at index ${highlight(index)} in ${highlight(array)}`)
})

dashed();

// Searching in Array
/*
 * indexOf: arr.indexOf(item, from) -> returns index
 * includes: arr.includes(item, from) -> returns boolean
 * lastIndexOf: same as indexOf, but looks for from right to left
*/
log(header('Searching in Array:'))
log(diff('Before: '), arr)

log(subheader('indexOf:'), arr.indexOf('JS'));
log(subheader('includes:'), arr.includes('JS'));
log(subheader('lastIndexOf:'), arr.lastIndexOf('JS'));

dashed();
