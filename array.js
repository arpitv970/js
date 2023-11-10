import { log, header, subheader, diff, highlight, dashed } from './lib/utils'

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
 *  find: arr.find((item, index, array) => {})
 *  findIndex / findLastIndex:
*/
log(header('Searching in Array:'))
log(diff('Before: '), arr)

log(subheader('indexOf:'), arr.indexOf('JS'));
log(subheader('includes:'), arr.includes('JS'));
log(subheader('lastIndexOf:'), arr.lastIndexOf('JS'));


let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

log(diff('Before: '), users)
let user = users.find(item => item.id === 1)
log(subheader('find: '), user)
log(subheader('findIndex: '), users.findIndex(user => user.name === 'John'))
log(subheader('findLastIndex: '), users.findLastIndex(user => user.name === 'John'))

users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
]
log(diff('Before: '), users)
log(subheader('filter: '), users.filter(item => item.id < 3))

dashed();

// Transformations
/*
  * map: arr.map((item, index, array) => {...})
  * sort(fn):
  * reverse:
  * split / join:
  * reduce / reduceRight:
*/
log(header('Transform an Array:'))
log(subheader('map:'))
arr = ['Bankai', 'Getsugo Tenshau', 'Domain Expansion', 'Multi Shadow Clone Jutsu'];
log(diff('Before: '))
log(diff('After: '), arr.map(item => item.length))

log('\n')

log(subheader('sort(fn):'))
let num = [1, 2, 15]
log(diff('Before: '), num)
log(diff('After: '), num.sort())

log('\n')

log(subheader('reverse:'))
num = [1, 2, 3, 4, 5]
log(diff('Before: '), num)
log(diff('After: '), num.reverse())

log('\n')

log(subheader('split:'))
let names = 'Joker, Benihime, Kira, Light'
log(diff('Before: '), names)
arr = names.split(', ')
log(diff('After: '), arr)

log('\n')


log(subheader('join:'))
log(diff('Before: '), arr)
log(diff('After: '), arr.join(', '))

log('\n')


log(subheader('reduce / reduceRight:'))
num = [1, 2, 3, 4, 5]
let res = num.reduce((sum, curr) => sum + curr, 0)
log(diff('Before: '), num)
log(diff('After: '), res)

dashed();

log(header('Array.isArray'))
log(diff('Using typeof:'))
log('for {}: ', typeof {})
log('for []: ', typeof [])

log(diff('Using isArray:'))
log('for {}: ', Array.isArray({}))
log('for []: ', Array.isArray([]))

dashed();

log(header('thisArg'))
log(subheader('checkout this: https://javascript.info/array-methods#most-methods-support-thisarg'))
