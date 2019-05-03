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
