## primitive types

### undefined

- 정의가 되지 않음

```javascript
let hello;
// undefined

console.log(hello === undefined);
// true

console.log(hello === null);
// false
```

### null

- 존재하지 않음

```javascript
let hello = null;
// undefined

console.log(hello === undefined);
// false

console.log(hello === null);
// true
```

### NaN

- Not A Number

```javascript
Math.pow(5, "hello");
// NaN
```
