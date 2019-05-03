## practice1.js

```javascript
function three() {
  console.log("i love js");
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
}
zero();
```

### call stack

\#1  
zero <-  

\#2  
one <-  
zero  

\#3  
two <-  
one  
zero  

\#4  
three <-  
two  
one  
zero  

\#5  
two <-  
one  
zero  

\#6  
one <-  
zero  

\#7  
zero <-  

\#8  

## practice2.js

```javascript
function three() {
  console.log("i love js");
  throw Error("error");
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
}
zero();
```

### call stack

\#1  
zero <-  

\#2  
one <-  
zero  

\#3  
two <-  
one  
zero  

\#4  
three <-  
two  
one  
zero  

\#5 

\#error  
error  
at three  
at two  
at one  
at zero  
