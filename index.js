const cloneDeep = require('lodash.clonedeep')
const has = require('lodash.has')
const get = require('lodash.get')
const set = require('lodash.set')
const unset = require('lodash.unset')

module.exports = function (changes = {}) {
  return function (obj) {
    const newObj = cloneDeep(obj)
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        if (has(obj, key)) {
          const value = get(obj, key)
          unset(newObj, key)
          set(newObj, changes[key], value)
        }
      }
    }
    return newObj
  }
}