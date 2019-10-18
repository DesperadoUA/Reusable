'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Sergey': '+380445554400',
  'Sasha': '+380445554409',
  'Pavel': '+3804455544434',
  'Dasha': '+380445554466',
  'Masha': '+380445554477',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
