function foo(a, b) {
  // Explicit type checking or conversion
  a = Number(a);
  b = Number(b);
  
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid Input: Numbers expected';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('a', 2)); // Output: Invalid Input: Numbers expected