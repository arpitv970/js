import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'
log(header('JSON methods, toJSON'))
log(subheader('JSON.stringify'))
let student = {
  name: 'Arpit',
  age: '21',
}

// NOTE: JSON-encoded or serialized or marshal object
let json = JSON.stringify(student)
log(json)

dashed()

log(subheader('Replacer & Space'))
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

json = JSON.stringify(meetup, (key, value) => {
  log(highlight(`${key}: ${value}`))
  return (key === 'occupiedBy') ? undefined : value
}, 2)

log(json)

dashed()

log(subheader('JSON.parse'))
let num = "[0, 1, 2, 3, 4]"
log(diff('Before Parsing:'))
log(num, typeof (num))

log('\n')

log(diff('After Parsing:'))
num = JSON.parse(num)
log(num, typeof (num))

dashed()

log(subheader('revive function in JSON.parse()'))
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'
meetup = JSON.parse(str, (key, value) => {
  if (key === 'date') return new Date(value)
  return value
})
log(diff('string: '), str)
log('\n')
log(diff('date: '), meetup.date.getDate())
