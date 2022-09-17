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

- When using a `handleClick` inside an `onClick={}` prop, the reason why you should point to the function (e.g. `handleClick`) instead of calling it (e.g. `handleClick()`) is because its nature of being called only when there's a click, not in runtime. If you call the function, React will run it whenever the components is rendered.
- React is all about functions. Its rendering procedure is to call `<App />`, that calls its children, that call their children, and so on, until everything is rendered all at once. It's a stateless way of displaying HTML.
- By using state, React offers us a way to re-render something whenever some data changes. States makes React aware of changes dynamically. That's what it means to be **declarative** instead of just **imperative**.
- When you use the function provided by `setState()`s destructured array, it will trigger a re-render in the component where you set the data update.

## Updating State That Depends On The Previus State

- Sometimes, when you update a huge amount of data in the same time, like in a form for example, you can see yourself relying on a copy of your previous state that is already outdated. To solve this, you should use this syntax instead:

```javascript
// Old one:
setUserInput({
  ...userInput,
  enteredDate: value,
});
```

```javascript
// New one:
setUserInput((prevState) => {
  return {
    ...userInput,
    enteredDate: value,
  };
});
```

This method assures that you're using the last state snapshot instead of the last object created as a copy of the last updated state.
