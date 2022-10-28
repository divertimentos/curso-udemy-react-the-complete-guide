 React: The Complete Guide

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

## Updating State That Depends On The Previous State

- Sometimes, when you update a huge amount of data at the same time, like in a form for example, you can see yourself relying on a copy of your previous state that is already outdated. To solve this, you should use this syntax instead:

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
    ...prevState,
    enteredDate: value,
  };
});
```

This method assures that you're using the last state snapshot instead of the last object created as a copy of the last updated state.

## Child-to-Parent Communication (Bottom-up)

If you declare a function in the parent, pass it as a prop to the child and make the child call it, it you can receive data generated in the child as a parameter, and then use it in the parent. I really didn't know that pattern.

![lifting state up](https://github.com/divertimentos/curso-udemy-react-the-complete-guide/blob/main/media/lifting.png)

The process is rather simple: it's passing data from a component to its sibling by finding their first common parent, which will receive the data and pass it down to its other child (the target one).

# 

# Section 5: Rendering Lists & Conditional Content

## Outputting Conditional Content

A different way to render conditional content: you can put all the rendering logic of mapped list into a let variable with a default value that can be updated it a certain condition is met. Then you render **the** variable that stores the HTML and its logic instead of calculating everything in the return of the function. Like this:

```javascript
  let expensesContent = (
    <div>
      <p1>No Expenses Found</p1>
    </div>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expensesContent}
    </Card>
  );
```

# Section 6: Styling React Components

## Styled Components & Dynamic Props

É possível passar *props* para dentro dos components criados com o *styled* simplesmente passando elas como num componente normal.

```javascript
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "salmon" : "transparent")}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
```

# Debugging React Apps

## Working with Breakpoints

Just breakpoints 101 here, even though even this knowledge is brand new to me. You can use open Debugging tab, navigate through Sources until you find the problematic file, and line, and then add a breakpoint to start pausing on every function call. Very helpful. 

<img src="media/debugging-01.png" title="" alt="" data-align="center">
