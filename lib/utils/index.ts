import chalk from 'chalk';

export const log = console.log;
export const header = chalk.italic.redBright.underline;
export const subheader = chalk.magentaBright;
export const diff = chalk.blueBright;
export const dashStyle = chalk.yellow;
export const highlight = chalk.italic.underline.grey;

export const terminalWidth = process.stdout.columns;

export const dashed = (w = terminalWidth) => {
  let dash = '';
  for (let i = 0; i < w; i++) {
    dash += '-';
  }
  log('\n' + dashStyle(dash) + '\n');
}

export const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

export const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thrus',
  'Fri',
  'Sat',
]
