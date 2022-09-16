# React: The Complete Guide

This is the course "**React - The Complete Guide**" by Maximilian Schwarzmüller, and this is: **Things that I didn't know before enrolling this course**

# Section 2: JavaScript Refresher

## Destructuring

### Array Destructuring

```javascript
[a, b] = ["Hello", "Max"];

console.log(a); // Hello
console.log(b); // Max
```

### Object Destructuring

```javascript
{ name } = { name: "Max", age: 28 };

console.log(name); // Max
console.log(age); // undefined
```

# Section 3: React Basics & Working With Components

## Introducing JSX

- Thing that I already knew but have forgotten: "JSX" stands for "JavaScript XML"
- Thing that I didn't know: it's because HTML in the end **is** XML. Mind blowing!

### A Closer Look At JSX

- According to Maximilian, importing React fro 'react' is an archaic practice.
- Every React element, under the hood, is actually a `React.createElement()` function/method. It takes 3 arguments:
  - a string with the name of the object
  - an object containing attributes to configure the element
  - an infinite that represents elements inside the div tag

```javascript
return (
  <div>
    <h2>Let's get started</h2>
    <Expenses items={expenses} />
  </div>
);

return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Let's get started"),
  React.createElement(Expenses, { items: expenses })
);
```

# Section 4: React State & Working with Events

