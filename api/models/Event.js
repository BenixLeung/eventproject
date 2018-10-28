/**
 * Myserver.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    shortdesp: { type: 'string', required: true },
    fulldesp: { type: 'string', required: true },
    url: { type: 'string', required: true },
    dept: { type: 'string', required: true },
    date: { type: 'string', required: true },
    time: { type: 'string', required: true },
    venue: { type: 'string', required: true },
    quota: { type: 'string', required: true },
    highlight: { type: 'string' }
  },

};

