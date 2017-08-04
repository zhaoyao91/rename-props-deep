const rename = require('.')

describe('shallow rename', () => {
  test('basic usage', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename({name: 'nickname'})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual({
      nickname: 'bob',
      age: 20
    })
  })

  test('undefined changes', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename()(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual(obj)
  })

  test('empty changes', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename({})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual(obj)
  })
})

describe('deep rename', () => {
  test('basic usage', () => {
    const obj = {friend: {name: 'bob', age: 20}, name: 'alice'}
    const newObj = rename({'friend.name': 'enemy.nickname', 'who': 'whom'})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual({
      name: 'alice',
      friend: {age: 20},
      enemy: {nickname: 'bob'}
    })
  })
})