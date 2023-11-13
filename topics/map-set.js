import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'

log(header('Maps'))
log(subheader('Map methods'))

let mp = new Map();
mp.set('1', 'test 1')
  .set(1, 'test 2')
  .set(true, 'test 3')
let myObj = {
  name: 'Arpit'
}
mp.set(myObj, 'test 4')

log(diff('inside map after setting key-value pairs: '))
log(mp)

log('\n')

log(subheader('Iteration over Map'))
log(diff('There are 3 types of iteration on map over: keys, values, entries'))
log('\n')
log(highlight('Keys'))
for (let key of mp.keys()) {
  log(key)
}
log('\n')
log(highlight('Values'))
for (let val of mp.values()) {
  log(val)
}

log('\n')

log(highlight('Entries'))
for (let entry of mp.entries()) {
  log(entry)
}

log('\n')

log(diff('There also exist built-in forEach loop for map'))
log(highlight('forEach'))
mp.forEach((val, key, map) => {
  console.log(`${key}: ${val}`)
})

log('\n')

log(subheader('Map from Object'))
log(highlight('Object.entries'))

let entryObj = {
  // this can be any iterable such as array, objects, etc.
  name: 'Arpit Verma',
  role: 'Full-Stack'
}
mp = new Map(Object.entries(entryObj))
log(mp)

log('\n')

log(subheader('Object from Map'))
log(highlight('Object.fromEntries'))

entryObj = [
  ['name', 'Arpit Verma'],
  ['role', 'Full-Stack']
]

let mpObj = Object.fromEntries(entryObj);
log(mpObj)

dashed();

log(header('Sets'))
