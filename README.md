https://www.youtube.com/playlist?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM

React -

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React only changes what needs to be changed!

Current version of React.JS is V17.0.2 (August 2021).
Current version of create-react-app is v4.0.3 (August 2021).

---

React-dom
npx - With NPX, you can run and execute packages without having to install them locally or globally , execute npm package binaries

1.npx create-react-app executes create-react-app binary,
2.create-react-app uses yarn to create your project (if yarn is installed)

---

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

---

ReactDOM.render().-

React renders HTML to the web page by using a function called ReactDOM.render().

---

Create a Class component called Car

class Car extends React.Component {
render() {
return <h2>Hi, I am a Car!</h2>;
}
}

---

Create a Function component called Car

function Car() {
return <h2>Hi, I am a Car!</h2>;
}

---

Props
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.

function Car(props) {
return <h2>I am a {props.color} Car!</h2>;
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

---

Component Constructor

If there is a constructor() function in your component, this function will be called when the component gets initiated.

---

Passing Arguments
To pass an argument to an event handler, use an arrow function.

function Football() {
const shoot = (a) => {
alert(a);
}

return (
<button onClick={() => shoot("Goal!")}>Take the shot!</button>
);
}

ReactDOM.render(<Football />, document.getElementById('root'));

redux archtecture

## view -> action -> reducer -> store

view - html/view/ui
action - collection data from form or api
reducer - get data from action ,filter on it ,send to store
store - save data on itself

=====================

useState
 const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

 const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }



-----------------------------------------

The useEffect - fetching data, directly updating the DOM, and timers.
useEffect(<function>, <dependency>)

useEffect runs on every render. 

 useEffect(() => {
    //Runs only on the first render
  }, []);























REACT TOPICS-
Basics

POV in how is react different from other similar libraries.
JSX
JSX transpilation to ES5/6
Props
VDom
React's Diffing Algorithim, Reconciliation and how DOM is updated.
Handling Events
Lifecycle methods and Hooks Different lifecycle methods and POV on Hooks
How useEffect is different from lifecycle methods ?
Hooks like useEffect, useState, useReducer, useMemo, useRef etc.
Composing and Organising Components  Different component organisation techniques
Higher Order Components
Render Prop Pattern
Compound Component Pattern
Custom Hooks
State Initialisers
POV on how custom hooks can help in better component organisation, composition and reusability.
Isolation of component responsibilities
State Management  Flow of data in react
POV on use cases of local state, context and reducer patterns
Redux - Refer Redux and related sections below
Working with Remote Data in React Different techniques to handle and manage remote data in react.
GraphQL and React
Apollo Client, graphql-hooks etc
Using react-query, useSwr etc
Routing POV on SPA and MPA
React Router, Next Router
SSR and SSG POV on SSR and what is typical catches when working with react on the server.
SSR without using any library
Next JS - Setup, Code Organisation,Routing,  Dynamic Routes, Pre-rendering etc
Static Site Generation using Next JS, Gatsby etc
Organising and managing component styles How different style organisation techniques like CSS Modules, Inline CSS, Styled components etc work with React
Testing Unit and Integration testing
Tooling Linting &  code formatting (Prettier, eslint etc)
Testing (Jest, react-testing-lib, enzyme etc)
Build tools (Webpack, Rollup, Parcel etc)
Error Handling Error Boundries
Code Splitting React Suspense and Lazy
Type Checking and handling props Proptypes, Flow, TS
Default Props
React Component Performance Monitoring and avoiding re-renders
Perf debugging using react and chrome developer tools
Production Code best practices Using React's Prod Build
Splitting Vendor files
Babel and its role
State management libraries and their ecosystem POV on different state management libraries and their decreasing need.

REDUX
How redux works ?
Actions, reducers and Store
Need of middlewares in redux
Handling Side effects - Saga, Thunk
Component / Container Patterns
Re-select library

===================
2nd round

Below is the topics for 2nd round

HTML | Templating
Request lifecycle, DOM and CSSOM
Sementic HTML and accessibility guidelines
Forms and Validations
Media - Responsive Images, Audio and Video
Browser Side Storage, Workers, and Caching- Local, Session, Cookies, IndexDb, WebSQL
Service Workers, Web Workers
SEO basics

CSS / processors & Responsive
Rules, Selectors and Property values, Cascading, Inheritance, Specificity,
Responsive Design (Mobile and Desktop first), Media Queries
Layout - [float, flex, grid], display, postitioning
Animations and transalations- Basics, SVG
Processors / Preprocessors, Frameworks, CSS-in-JS

OOJS / Functional JS
OOJS / Functional JS
Variables, Scope, Data Types, operators, loops, if statements, error handling and functions. Execution Context (this). [Call, Apply, Bind]
Differentiating factors in ES5 and ES6
Events and Event Handling, DOM manupilation
Object Prototype, Prototypal Inheritance, Closure
Async Programming - Event Loop and how it works, Macro and Micro tasks,
Callbacks and setTimeOut, Promises, chaining promises, [Promise.all, Promise.race ], error handling, async / await
Testing: POV on different type of tests, Different libraries (TL, Jest, Enzyme, Karma, Jasmine),
Patterns, Module Systems & Principles -
Singleton, Factory functions, Module, Prototype, PubSub, Observable
Common JS, UMD, AMD
12-factor app, SOLID, DRY principles
Pure Functions / Side Effects / Purifying closures, Point-free style, Composition / Compound functions, Immutability, Map / Reduce / Filter, Higher-order functions, Currying / Composing
PWA - App Manifest, Caching & Service Workers, Background Sync, Push Notifications, Workbox
Tooling:
Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Tree Shaking, Fedration, Loaders and plugins
Transpilation using tools like Babel
Understands GIT hooks and can use them.
Code bundling/minification/production ready assets using Webpack
ESLint, Husky and other static code analysis tools

NFR's
Performance
PERFORMANCE
Compression, Caching / CDN / Expirations, HTTP Headers, JS Profiling (CPU/MEM), HTTP2, Universal View State, Perf Analysis / Log monitoring tools

FUNCTIONAL PROGRAMMING:
Pure Functions / Side Effects / Purifying closures, Point-free style, Composition / Compound functions, Immutability, Map / Reduce / Filter, Higher-order functions, Currying / Composing
Security PERFORMANCE
Compression, Caching / CDN / Expirations, HTTP Headers, JS Profiling (CPU/MEM), HTTP2, Universal View State, Perf Analysis / Log monitoring tools

SECURITY:
SSL/TLS, CORS, XSS, CSRF, Access / Refresh Tokens / Encryptions, Validations / Encoding, HTTP Cookies / Sec. Headers, Sessions / Authentication / Authorization / protect user data, RBAC, ABAC

Accessibility
Understands A/ AA / AAA accessibility guidelines and write code adhering to meet the accessibility benchmarks, , Has a fair understanding to make dynamic content accessible with ARIA, Uses enhanced techniques to meet accessibility standards viz: skip navigation, no js etc. Creating accesible forms, content and best practices

DevOps
Gulp/Grunt - create tasks / custom scripts, Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Loaders and plugins, Understands GIT hooks and can use them. - Code bundling/minification/production ready assets using Webpack etc, Test Case runners. Docker, Vagrant and the differences.

- integrate plugins like sitespeed.io to ensure performance related checks on the pages
  Logging Standards: Can customize logging framework to extend to create own formats with additional data like session id, hostname for log statements.

Additonal Info
Estimation / Planning
Check understanding of top-down / bottom-up approaches and how estimations are refined over t…


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