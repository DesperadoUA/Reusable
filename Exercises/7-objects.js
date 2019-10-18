'use strict';
const fn = () => {
  const obj1 = { name: 'Константин' };
  let obj2 = { name: 'Константин' };
  obj1.name = 'New name';
  obj2.name = 'New name';
  const otherObj = { name: 'New Name' };
  obj2 = otherObj;

};

module.exports = { fn };
