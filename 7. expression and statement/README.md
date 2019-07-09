```javascript
function add(a, b) {
  return a + b;
}

const how = add(5, 6);

console.log(how); // 11
```

```javascript
function add(a, b) {
  a + b;
}

const how = add(5, 6);

console.log(how); // undefined
```

- expression ?

expression is 1 + 1  
expression returns a value

```javascript
const thing = if(true) {

}
// (x)

console.log(if(true){}); //(x) expression 을 기대함
```

- statement ?

if, else, while, ...  
no return  
command or instruction

```javascript
const awesome = add(1, 2);

function add(a, b) {
  return a + b;
}

console.log(awesome); // 3 : hoisting
```

```javascript
const awesome = add(1, 2);

const add = (a, b) => a + b;

console.log(awesome); // error
```

function declaration vs fuction expression
