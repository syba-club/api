/**
 * Lecture.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    when: {
      type: 'datetime',
      required: 'true'
    },

    faculty: {
      type: 'string',
      required: true
    },

    poster: {
      model: 'faculty',
      required: true
    }

  }

};