const client = require('scp2');
const componentName = require('../package.json').name;
const { pwd, host } = require('./secret');
const prompt = require('password-prompt');

const copy = (p) => client.scp(
  './demo/dist',
  `omatviiv:${ p }@${ host }:${ componentName }`,
  e => console.error(e),
);

if (pwd) {
  copy(pwd);
} else {
  prompt('password: ', { method: 'hide' })
  .then(copy)
  .catch(e => console.error(e));
};
