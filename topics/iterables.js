import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'

log(header('Iterables'));
log(subheader(`To undertand concept of iterables, let's make one by ourself`))

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++
      }
    } else {
      return {
        done: true
      }
    }
  }
}

log(diff('Before: '), range)
log(diff('After: '))
for (let num of range) {
  log(num)
}

dashed();

log(subheader('String is iterable'))
let str = 'test'
log(diff('Before: '), str)
log(diff('After: '))

for (let char of str) {
  log(char)
}

dashed();

log(subheader('Calling an iterator explicitly'))
str = 'Hello';
let itr = str[Symbol.iterator]();

while (true) {
  let res = itr.next();
  if (res.done) break;
  log(res.value);
}
