const os = require("os");
//user information
const user = os.userInfo();
console.log(user);

//system uptime
console.log(`uptime of system is ${os.uptime()} seconds`);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  platform: os.platform(),
};
console.log(currentOs);
