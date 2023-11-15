import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'
log(header('Destructuring in Array'))
let arr = ['Arpit', 'Verma']
let [firstName, secondName] = arr

log(highlight('#1'))
log('first name: ', firstName)
log('second name: ', secondName)

log('\n')

let [fName, sName] = 'Kurosaki Ichigo'.split(' ')
log(highlight('#2'))
log('first name: ', fName)
log('second name: ', sName)

log('\n')

let [fName1, sName1] = [sName, fName]
log(highlight('#3'))
log('first name: ', fName1)
log('second name: ', sName1)

dashed()

log(header('Destructuring in Object'))
let options = {
  title: "Menu",
  width: 100,
  height: 200
}

let { title, width, height } = options
log(highlight('#1'))
log('title: ', title)
log('width: ', width)
log('height: ', height)

log('\n')

log(highlight('#2'))
let { title1, ...rest } = options
log('title: ', title)
log('width: ', rest.width)
log('height: ', rest.height)

log('\n')

log(highlight('#3'))

