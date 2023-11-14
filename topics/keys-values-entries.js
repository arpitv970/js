import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'

log(header('Objects.keys, values, entries...'))

let obj = {
  name: 'Arpit Verma',
  role: 'Full Stack Developer'
}

log(subheader('Object.keys()'))
let keys = Object.keys(obj);
log(keys)

log('\n')

log(subheader('Object.values()'))
let values = Object.values(obj);
log(values)

log('\n')

log(subheader('Object.entries()'))
let entries = Object.entries(obj);
log(entries)

dashed()
