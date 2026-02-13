# Frontend Learning Plan

This repository contains materials used during frontend mentoring sessions.
It focuses on building a solid foundation in HTML, CSS, and JavaScript
as preparation for working with Angular.

The repository primarily serves as a workspace with practical examples.
Theory, explanations, and references are provided separately during sessions
and via shared links.

---

## Goal

- Build a strong understanding of how the web works at a fundamental level
- Establish a solid base for working with Angular and modern frontend frameworks

---

## Learning Scope

### HTML
- HTML document structure (`DOCTYPE`, `head`, `body`)
- Semantic tags (`header`, `main`, `section`, `article`, `nav`)
- Interactive elements (`button`, `a`, `input`, `form`, `label`)
- Difference between semantic elements and `div` / `span`
- Basic accessibility principles (a11y)

### CSS

#### Core Concepts
- CSS basics
- Connecting CSS to HTML
- Cascade and inheritance
- Specificity
- Style overriding

#### Box Model
- `margin`, `padding`, `border`
- `box-sizing`

#### Layout
- Flexbox: core properties and patterns
- Grid: basic grid system, columns and rows
- When to use flexbox vs grid
- Typical layout tasks in web applications

#### Positioning
- `static`, `relative`, `absolute`, `fixed`, `sticky`
- Positioning context

### JavaScript

#### Language Basics
- `let`, `const`
- Data types
- `undefined` vs `null`
- Scope

#### Functions
- Function declaration vs function expression
- Arrow functions
- Return values
- Passing functions as arguments

#### Working with Data
- Arrays:
  - `map`, `filter`, `reduce`
  - searching and transforming data
- Objects:
  - property access
  - copying and updating
  - immutability and its role in frontend development

#### Context and Behavior
- `this`
- Closures (at a practical level)

### Asynchronous Code and Execution
- What asynchronous code is
- `Promise`, `then` / `catch`
- `async` / `await`
- Error handling

#### Event Loop
- Call stack
- Web APIs
- Task queue / Microtask queue
- Order of asynchronous code execution

### JavaScript in the Browser
- DevTools: console, sources, network
- Errors and stack trace
- Debugging application behavior
- Practical bug investigation

### Angular

#### Architecture
- Angular application structure
- Modules and standalone components
- Component-based architecture

#### Components
- Templates
- Inputs / Outputs
- Lifecycle hooks
- Connection between template and logic

#### Services and Dependency Injection
- Why services are needed
- Dependency Injection
- Providers
- Service scopes

#### Change Detection
- How Angular updates the UI
- When and why change detection runs
- Common performance issues

#### Asynchronous Code in Angular and RxJS
- Observables as a concept
- Subscriptions and lifecycle
- Core operators
- Managing data streams
- Common RxJS pitfalls

### General Engineering Concepts

#### Object-Oriented Programming (OOP)
- Encapsulation
- Inheritance
- Polymorphism
- Applying OOP in frontend development

#### SOLID Principles
- Purpose of the principles
- Where they are practically useful
- When not to apply them dogmatically

#### Design Patterns
- Separation of Concerns
- Singleton
- Dependency Injection
- Observer
- Examples from Angular code

---

## Notes

- Lessons are organized using Git branches rather than folders
- Each branch represents the state of the code at a specific learning stage
- Materials are added incrementally as topics are covered

---

## Status

This repository is actively evolving and updated as learning progresses.