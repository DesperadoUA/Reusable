'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Sergey', phone: '+380445554400' },
  { name: 'Sasha', phone: '+380445554409' },
  { name: 'Pavel', phone: '+3804455544434' },
  { name: 'Dasha', phone: '+380445554466' },
  { name: 'Masha', phone: '+380445554477' }
];
let i = 0;
const findPhoneByName = name => {
  for (const j of phonebook) {
    if (j.name === name) return i;
    i++;
  }
};
module.exports = { phonebook, findPhoneByName };
