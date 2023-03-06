const util = require('util');
const cryptolib = require('crypto');

export const randomBytes = util.promisify(cryptolib.randomBytes);

cryptolib.randomBytes(32, (err, num) => {
  console.log(num);
});

randomBytes(32)
  .then(num => console.log(num))
  .catch(err => {
    console.log('err: ', err)
  });