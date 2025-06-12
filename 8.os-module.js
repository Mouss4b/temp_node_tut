const os = require('os');

// info about current user
/* 
const user = os.userInfo()
console.log(user)
  */


// methode returns the system uptime in seconds:

/* 
const sysemUptime = os.uptime()
console.log(os)
 */

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMemmory:os.totalmem(),
  freeMemmory:os.freemem(),
}
console.log(currentOS);