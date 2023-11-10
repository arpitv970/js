import chalk from 'chalk';

const log = console.log;

log(chalk.blueBright('Hi, this project is simply to understand JS...'));
log('\n')
log(chalk.yellow(`So far we have covered following topics:`))

const topics = [
  {
    topic: `Array's Methods`,
    script: 'array'
  },
  {
    topic: `Iterables`,
    script: 'iterables'
  },
]

topics.map((item, key) => (
  log(chalk.redBright(`#${key + 1} ${item.topic}`), chalk.italic.redBright(`bun run ${item.script}`))
))

