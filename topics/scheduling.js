import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'

log(header('Scheduling:'))
log(subheader('setTimeout'))

const sayHi = (phrase, who) => {
  log(`${phrase}, ${who}: setTimeout`)
}

let timerId = setTimeout(sayHi, 1000, 'Hello', 'Arpit');
log(timerId)

clearTimeout(timerId)
log(timerId)

dashed()

log(subheader('setInterval'))
// timerId = setInterval(() => log('tick'), 2000)
// setTimeout(() => {
//   clearInterval(timerId)
//   log('stop')
// }, 5000)
const tick = () => {
  log('tick: nested setTimeout')
  let timerId = setTimeout(tick, 2000)
}

timerId = setTimeout(tick, 2000)
