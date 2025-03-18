### **1️⃣ List of Level 1 AST Node Types in JavaScript**
| **Node Type** | **Description** | **Example** |
|--------------|----------------|-------------|
| **FunctionDeclaration** | Declares a named function | `function add(a, b) { return a + b; }` |
| **VariableDeclaration** | Declares a variable (`let`, `const`, `var`) | `let x = 10;` |
| **ClassDeclaration** | Declares a class | `class Animal {}` |
| **ExpressionStatement** | Executes an expression | `console.log("Hello");` |
| **IfStatement** | Conditional statement (`if-else`) | `if (x > 5) { console.log("Big"); }` |
| **ForStatement** | `for` loop | `for (let i = 0; i < 10; i++) {}` |
| **WhileStatement** | `while` loop | `while (x < 5) { x++; }` |
| **DoWhileStatement** | `do-while` loop | `do { x++; } while (x < 5);` |
| **SwitchStatement** | `switch` case control flow | `switch (x) { case 1: break; }` |
| **TryStatement** | `try-catch` block | `try { risky(); } catch (e) {}` |
| **ThrowStatement** | Throws an error | `throw new Error("Oops!");` |
| **ReturnStatement** | Returns from a function | `return x + y;` |
| **BreakStatement** | Exits a loop | `break;` |
| **ContinueStatement** | Skips to next loop iteration | `continue;` |
| **ImportDeclaration** | Imports from an ES6 module | `import { add } from "./math.js";` |
| **ExportDeclaration** | Exports functions/variables | `export function greet() {}` |
| **DebuggerStatement** | `debugger;` keyword for debugging | `debugger;` |

---

### **4️⃣ Summary of All Level 1 AST Nodes**
| **Category** | **Node Type** | **Example** |
|-------------|--------------|-------------|
| **Functions** | `FunctionDeclaration` | `function greet() {}` |
| **Variables** | `VariableDeclaration` | `let x = 42;` |
| **Classes** | `ClassDeclaration` | `class Person {}` |
| **Control Flow** | `IfStatement`, `ForStatement`, `WhileStatement`, `SwitchStatement` | `if (x > 10) {}` |
| **Loops** | `ForStatement`, `WhileStatement`, `DoWhileStatement` | `for (let i=0; i<10; i++) {}` |
| **Exception Handling** | `TryStatement`, `ThrowStatement` | `try { risky(); } catch (e) {}` |
| **ES6 Modules** | `ImportDeclaration`, `ExportDeclaration` | `import { foo } from "./mod.js";` |
| **Other** | `DebuggerStatement`, `BreakStatement`, `ContinueStatement` | `debugger;` |
