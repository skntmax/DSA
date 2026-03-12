# JavaScript Variables: var, let, const

## var
- Scope: **Global / Function**
- Can be **re-declared**
- Can be **re-assigned**
- Accessible before declaration (no error)

Example:
```js
var x = 10;
var x = 20; // allowed
x = 30;     // allowed




let y = 10;
// let y = 20; // error
y = 30;       // allowed




const z = 10;
// z = 20;     // error
// const z;    // error


