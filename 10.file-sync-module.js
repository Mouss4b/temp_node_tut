const {readFileSync,writeFileSync} = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
writeFileSync(
  './content/third.txt',
  `\nfirst: ${first},second:${second}`,
  {flag:'a'}
)
// {flag:'a'} = append the text to the file
console.log('done with this task');
console.log('starting the next one');
