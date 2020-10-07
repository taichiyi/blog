# JavaScript 拆箱

``` JavaScript
function OrdinaryToPrimitive(O, hint) {
  let methodNames
  if (hint === 'string') {
    methodNames = ['toString', 'valueOf']
  } else {
    methodNames = ['valueOf', 'toString']
  }
  for (let i = 0; i < methodNames.length; i++) {
    if (typeof O[methodNames[i]] === 'function') {
      const result = O[methodNames[i]]()
      if (typeof result !== 'object') return result
    }
  }
  throw new TypeError('Cannot convert object to primitive value')
}

/*
 * 当尝试把一个值（包括对象）转换为原始值时，将调用 ToPrimitive 方法。
 * ToPrimitive 接受两个参数，第一个参数为 input 表示待转换的值，第二个可选参数为 PreferredType 表示优先转换为什么类型。
 */
function ToPrimitive(input, PreferredType) {
  if (typeof input !== 'object' || input === null) return input
  let hint
  if (PreferredType === undefined) {
    hint = 'default'
  } else if (PreferredType === 'string') {
    hint = 'string'
  } else {
    hint = 'number'
  }

  if (input[Symbol.toPrimitive] !== undefined) {
    const result = input[Symbol.toPrimitive].call(input, hint)
    if (typeof result !== 'object') {
      return result
    }
    throw new TypeError('Cannot convert object to primitive value')
  }
  if (hint === 'default') hint = 'number'
  return OrdinaryToPrimitive(input, hint)
}

const object1 = {
  [Symbol.toPrimitive]: (hint) => {
    switch (hint) {
      case 'number': console.log('number'); return {}
      case 'string': console.log('string'); return {}
      default: console.log('default'); return ''
    }
  },
}
const object2 = {
  valueOf: () => { console.log("valueOf"); return [] },
  toString: () => { console.log("toString"); return [] }
}
const inputs = [{}, object1, object2, new Date()]

// 以下两两等价
console.log(String(inputs[0])); // [object Object]
console.log(ToPrimitive(inputs[0],'string')); // [object Object]

console.log(String(inputs[3])); // Wed Oct 07 2020 00:00:00 GMT+0800 (China Standard Time)
console.log(ToPrimitive(inputs[3],'string')); // Wed Oct 07 2020 00:00:00 GMT+0800 (China Standard Time)

console.log(Number(inputs[3])); // 1602036100000
console.log(ToPrimitive(inputs[3],'number')); // 1602036100000

console.log(String(inputs[1]));
console.log(ToPrimitive(inputs[1],'string'));

console.log(String(inputs[2]));
console.log(ToPrimitive(inputs[2],'string'));
```
