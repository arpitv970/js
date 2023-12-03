import { log, header, subheader, diff, highlight, dashed } from '../lib/utils'
log('Property Flags and Descriptors')
log(subheader('Property Flag'))
log(highlight('Object.getOwnPropertyDescriptor'))
{
  let user = {
    name: 'Arpit'
  }

  let desc = Object.getOwnPropertyDescriptor(user, 'name')

  log(desc)
}
log('\n')
log(highlight('Object.defineProperties'))
{
  let user = {}

  Object.defineProperty(user, 'name', {
    value: 'Arpit'
  })

  let desc = Object.getOwnPropertyDescriptor(user, 'name')

  log(desc)
}
log('\n')
log(highlight('Non-writeable'))
{
  let user = {}

  Object.defineProperty(user, 'name', {
    value: 'Arpit',
    enumerable: true,
    configurable: true
  })

  let desc = Object.getOwnPropertyDescriptor(user, 'name')
  log(desc)
  // user.name = 'Kakashi' // --> this would be read-only
}

log('\n')
log(highlight('Non-enumerable'))
{
  let user = {
    name: 'Arpit',
    toString() {
      return this.name
    }
  }

  Object.defineProperty(user, 'toString', {
    enumerable: false
  })

  for (let key in user) log(key)
}
log('\n')
log(highlight('Non-configurable'))
{
  let user = {
    name: 'Arpit'
  }
  Object.defineProperty(user, 'name', {
    configurable: false
  })

  user.name = 'Kakashi'
  let desc = Object.getOwnPropertyDescriptor(user, 'name')
  log(desc)
  delete user.name // --> This thows an error
}


