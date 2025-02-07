# JavaScript Implicit Type Coercion Bug

This repository demonstrates a common JavaScript error resulting from the language's loose typing system.  The `foo` function intends to add two numbers, but due to implicit type coercion, it concatenates them as strings when a number and a string are provided as arguments. 

**Bug:**  The `foo` function unexpectedly concatenates the inputs if one of them is a string, instead of performing numerical addition. 

**Solution:** Explicit type checking or conversion is necessary to ensure correct arithmetic.  The solution file provides a corrected version. 

This example highlights the importance of rigorous type handling or using TypeScript for improved code reliability in JavaScript applications.