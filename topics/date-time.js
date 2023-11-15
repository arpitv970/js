import { log, header, subheader, diff, highlight, dashed, months, days } from '../lib/utils'

log(header('Date && Time'))
log(subheader('Creation'))

log(highlight('new Date()'))
let now = new Date()
log(now)

log('\n')

log(highlight('new Date(millisecond)'))
let Jan01_1970 = new Date(0)
log(Jan01_1970, diff('--> timestamp'))
let Jan02_1970 = new Date(24 * 3600 * 1000)
log(Jan02_1970)
let Dec31_1968 = new Date(-24 * 3600 * 1000)
log(Dec31_1968)

log('\n')

log(highlight('new Date(datestring)'))
let date = new Date('2017-01-06')
log(date)

log('\n')

log(highlight('new Date(year, month, date, hours, minutes, seconds, ms)'))
date = new Date(2011, 0, 1, 2, 3, 4, 567)
log(date)

dashed();

log(subheader('Access date components'))

log(highlight('getFullYear()'))
log(date.getFullYear())

log('\n')

log(highlight('getMonth()'))
log(date.getMonth(), diff(`--> ${months[date.getMonth()]}`))

log('\n')

log(highlight('getDate()'))
log(date.getDate())

log('\n')

log(highlight('getDay()'))
log(date.getDay(), diff(`--> ${days[date.getDay()]}`))

// similarly getHours(), getMinutes(), getSeconds(), getMillisecond()

dashed()

log(subheader('Setting date components'))

log(highlight('setHours()'))
let today = new Date();
today.setHours(0);
log(today)

log('\n')

log(subheader('Adding in dates'))
date = new Date(2016, 1, 28)
log(diff('Before:'))
log(date)
log(diff('After:'))
date.setDate(date.getDate() + 2)
log(date)

dashed()

log(subheader('Benchmarking'))
