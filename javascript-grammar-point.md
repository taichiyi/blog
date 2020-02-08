# javascript-grammar-point(知识点)

## ES5

## ES6

- let和const
- 变量的解构赋值

## 面向对象的程序设计

### 创建Object实例的方式

创建Object实例的方式有两种: new 操作符后跟Object构造函数 和 对象字面量表示法。

- new Object();

- { ... };

### 创建对象

#### `直接`创建对象

``` javascript
const ins = {
    name: 'tcy',
    age: 28,
    job: 'engineer',
    sayName: function() {
        return this.name
    },
};
```

``` javascript
const ins = new Object();
ins.name = 'tcy';
ins.age = 28;
ins.job = 'engineer';
ins.sayName = function() {
    return this.name
};
```

#### `工厂模式`创建对象

``` javascript
function createPerson(name, age, job) {
    return {
        name,
        age,
        job,
        sayName: function() {
            return this.name
        },
    };
}
const ins = createPerson('tcy', 28, 'engineer');
```

``` javascript
function createPerson(name, age, job) {
    const o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        return this.name;
    };
    return o;
}
const ins = createPerson('tcy', 28, 'engineer');
```

#### `构造函数模式`创建对象

``` javascript
function CreatePerson(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        return this.name;
    };
}
const ins = new CreatePerson('tcy', 30, 'engineer');
```

#### `原型模式`创建对象

``` javascript
function CreatePerson() {}
CreatePerson.prototype.name = 'tcy';
CreatePerson.prototype.age = 31;
CreatePerson.prototype.job = 'engineer';
CreatePerson.prototype.sayName = function() {
    return this.name;
};

const ins = new CreatePerson();
```

#### `继承模式`创建对象

``` javascript
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subProperty;
}

const ins = new SubType();

```
