# Rename Props Deep

Rename js object fields and return a deep copy.

## Installation

```
npm i -S rename-props-deep
```

## Usage

```
const rename = require('rename-props-deep')

const obj = {friend: {name: 'Bob', age: 20}}

const newObj = rename({'friend.name': 'enemy.nickname'})(obj)
// newObj is {friend: {age: 20}, enemy: {nickname: 'bob'}}
```

## License

MIT