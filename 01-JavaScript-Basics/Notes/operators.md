# JavaScript Operators – Complete Guide

Operators are symbols that perform operations on values and variables.

## 1. Arithmetic Operators
| Operator | Description           | Example     | Result  |
|---------|-----------------------|-------------|---------|
| `+`     | Addition              | `10 + 5`    | `15`    |
| `-`     | Subtraction           | `10 - 5`    | `5`     |
| `*`     | Multiplication        | `10 * 5`    | `50`    |
| `/`     | Division              | `10 / 5`    | `2`     |
| `%`     | Modulus (Remainder)   | `10 % 3`    | `1`     |
| `**`    | Exponentiation        | `2 ** 4`    | `16`    |
| `++`    | Increment             | `let x=5; x++` → `6` |
| `--`    | Decrement             | `let x=5; x--` → `4` |

## 2. Assignment Operators
| Operator | Equivalent            | Example       |
|---------|-----------------------|---------------|
| `=`     | x = 5                 | x = 5         |
| `+=`    | x = x + 3             | x += 3        |
| `-=`    | x = x - 3             | x -= 3        |
| `*=`    | x = x * 3             | x *= 3        |
| `/=`    | x = x / 3             | x /= 3        |
| `%=`    | x = x % 3             | x %= 3        |
| `**=`   | x = x ** 2            | x **= 2       |

## 3. Comparison Operators
| Operator | Name                        | Example           | Result  |
|---------|-----------------------------|-------------------|---------|
| `==`    | Loose Equality              | `5 == "5"`        | `true`  |
| `===`   | Strict Equality             | `5 === "5"`       | `false` |
| `!=`    | Loose Inequality            | `5 != "5"`        | `false` |
| `!==`   | Strict Inequality           | `5 !== "5"`       | `true`  |
| `>`     | Greater than                | `10 > 5`          | `true`  |
| `<`     | Less than                   | `10 < 5`          | `false` |
| `>=`    | Greater than or equal       | `10 >= 10`        | `true`  |
| `<=`    | Less than or equal          | `5 <= 10`         | `true`  |

## 4. Logical Operators
| Operator | Name          | Example               | Result  |
|---------|---------------|-----------------------|---------|
| `&&`    | AND           | `true && false`       | `false` |
| `||`    | OR            | `true || false`       | `true`  |
| `!`     | NOT           | `!true`               | `false` |

## 5. String Operator
- `+` → Concatenates strings  
  ```js
  let name = "Ali" + " " + "Khan"; // "Ali Khan"