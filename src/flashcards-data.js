const FLASHCARDS_DATA = [
  {
    id: 1,
    topic: "JSX syntax",
    question: "How do you write a React element in JSX syntax?",
    answer: "JSX allows you to write React elements using HTML-like syntax. For example: <div>Hello World</div>.",
    category: "Syntax"
  },
  {
    id: 2,
    topic: "JSX syntax",
    question: "When should you use JSX over JavaScript in a React application?",
    answer: "JSX should be used when you need a simpler, more readable way to create React elements, especially for larger components or nested structures.",
    category: "Use Case"
  },
  {
    id: 3,
    topic: "JSX syntax",
    question: "What is JSX in the context of React?",
    answer: "JSX stands for JavaScript XML and is a syntax extension that allows developers to write HTML-like code inside JavaScript files.",
    category: "Definition"
  },
  {
    id: 4,
    topic: "JSX syntax",
    question: "Can you provide an example of a React element written in JSX?",
    answer: "Yes, an example would be <h1 className='title'>Hello, World!</h1>. This is how you write a React element using JSX.",
    category: "Examples"
  },
  {
    id: 5,
    topic: "JSX syntax",
    question: "What is a common mistake developers make when using JSX?",
    answer: "A common mistake is forgetting to wrap JSX in a single parent element when returning multiple elements from a component.",
    category: "Common Errors"
  },
  {
    id: 6,
    topic: "JSX syntax",
    question: "How does JSX impact performance in a React application?",
    answer: "JSX is transpiled into JavaScript using React.createElement, which can slightly impact performance, but it is optimized for readability and maintainability.",
    category: "Performance Considerations"
  },
  {
    id: 7,
    topic: "JSX syntax",
    question: "Why was JSX introduced in React?",
    answer: "JSX was introduced to make writing React elements simpler and more intuitive by allowing developers to use an HTML-like syntax instead of writing cumbersome JavaScript React.createElement calls.",
    category: "Historical Context"
  },
  {
    id: 8,
    topic: "Using createRoot in React",
    question: "What is the purpose of the createRoot method in React?",
    answer: "The createRoot method is used to create a root for rendering a React element. It replaces the old render method starting from React 18.",
    category: "Definition"
  },
  {
    id: 9,
    topic: "Using createRoot in React",
    question: "How do you use createRoot in a React application?",
    answer: "To use createRoot, import it from 'react-dom/client' and pass a DOM element as an argument. Then, use the root's render method to display the React element.",
    category: "Syntax"
  },
  {
    id: 10,
    topic: "Using createRoot in React",
    question: "When should you use createRoot instead of the traditional render method?",
    answer: "Starting from React 18, createRoot is the standard for managing React DOM roots, improving the way React handles concurrent rendering.",
    category: "Use Case"
  },
  {
    id: 11,
    topic: "Using createRoot in React",
    question: "Can you provide an example of using createRoot in a React app?",
    answer: "Yes, an example would be: \n```javascript\nimport { createRoot } from 'react-dom/client';\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);\n```",
    category: "Examples"
  },
  {
    id: 12,
    topic: "Using createRoot in React",
    question: "What are some common mistakes when using createRoot in React?",
    answer: "A common mistake is forgetting to call render() on the root object or passing an incorrect DOM element to createRoot.",
    category: "Common Errors"
  },
  {
    id: 13,
    topic: "Using createRoot in React",
    question: "How does createRoot impact performance in React applications?",
    answer: "createRoot supports concurrent rendering, which allows React to interrupt rendering tasks and prioritize more important updates, improving performance in complex apps.",
    category: "Performance Considerations"
  },
  {
    id: 14,
    topic: "Using createRoot in React",
    question: "Why was createRoot introduced in React 18?",
    answer: "createRoot was introduced to improve React's ability to handle concurrent rendering and to better manage updates, making applications more efficient in rendering.",
    category: "Historical Context"
  },
  {
    id: 15,
    topic: "Differences between transpiling and compiling JSX",
    question: "What is the difference between transpiling and compiling JSX?",
    answer: "Transpiling refers to converting code from one high-level language (JSX) to another (JavaScript), whereas compiling often refers to converting high-level code into machine-readable code.",
    category: "Definition"
  },
  {
    id: 16,
    topic: "Differences between transpiling and compiling JSX",
    question: "How is JSX transpiled into JavaScript?",
    answer: "JSX is transpiled into JavaScript by tools like Babel, which converts JSX syntax into React.createElement calls.",
    category: "Syntax"
  },
  {
    id: 17,
    topic: "Differences between transpiling and compiling JSX",
    question: "When should you care about the difference between transpiling and compiling JSX?",
    answer: "Understanding the difference helps when setting up build processes and optimizing for performance, but most developers can treat them as similar in everyday use.",
    category: "Use Case"
  },
  {
    id: 18,
    topic: "Differences between transpiling and compiling JSX",
    question: "Can you provide an example of how JSX is transpiled into JavaScript?",
    answer: "Yes, the JSX `<div>Hello World</div>` is transpiled into `React.createElement('div', null, 'Hello World')` in JavaScript.",
    category: "Examples"
  },
  {
    id: 19,
    topic: "Differences between transpiling and compiling JSX",
    question: "What are some common errors developers encounter when transpiling JSX?",
    answer: "Common errors include missing transpilation steps or not configuring Babel properly, resulting in JSX not being converted and causing browser errors.",
    category: "Common Errors"
  },
  {
    id: 20,
    topic: "Differences between transpiling and compiling JSX",
    question: "How does the process of transpiling JSX affect performance in a React application?",
    answer: "Transpiling adds a build step to the development process, but once JSX is converted into JavaScript, it runs as efficiently as other JavaScript code. However, the transpile step itself can add time to deployment.",
    category: "Performance Considerations"
  },
  {
    id: 21,
    topic: "Differences between transpiling and compiling JSX",
    question: "Why is the term 'transpiling' used for JSX instead of 'compiling'?",
    answer: "The term 'transpiling' is used because JSX is converted to another high-level language (JavaScript), but in practice, many developers use 'compiling' interchangeably to describe the process.",
    category: "Historical Context"
  },
  {
    id: 22,
    topic: "Comments in JSX",
    question: "How do you write comments in JSX?",
    answer: "To write comments in JSX, you need to wrap the comment in curly braces and use the multi-line comment syntax: `{/* comment */}`.",
    category: "Syntax"
  },
  {
    id: 23,
    topic: "Comments in JSX",
    question: "When should you use comments in JSX code?",
    answer: "You should use comments in JSX to provide clarity or explain complex logic within your JSX structure, especially in larger components.",
    category: "Use Case"
  },
  {
    id: 24,
    topic: "Comments in JSX",
    question: "What is the syntax for comments in JSX?",
    answer: "In JSX, comments must be placed inside curly braces and use the multi-line comment syntax: `{/* This is a comment */}`.",
    category: "Definition"
  },
  {
    id: 25,
    topic: "Comments in JSX",
    question: "Can you provide an example of a valid JSX comment?",
    answer: "Yes, an example of a JSX comment is:\n```jsx\n<div>\n  {/* This is a comment inside JSX */}\n</div>\n```",
    category: "Examples"
  },
  {
    id: 26,
    topic: "Comments in JSX",
    question: "What is a common mistake developers make when writing comments in JSX?",
    answer: "A common mistake is using the single-line comment syntax `//`, which causes a syntax error because JSX treats it as part of the JavaScript expression.",
    category: "Common Errors"
  },
  {
    id: 27,
    topic: "Comments in JSX",
    question: "Does adding comments in JSX affect the performance of a React application?",
    answer: "No, comments in JSX are ignored during the transpilation process and do not affect performance as they are removed from the final JavaScript output.",
    category: "Performance Considerations"
  },
  {
    id: 28,
    topic: "Comments in JSX",
    question: "Why do JSX comments require curly braces and the multi-line syntax?",
    answer: "JSX comments require curly braces because JSX is an extension of JavaScript, and everything inside the curly braces is treated as a JavaScript expression. The multi-line syntax is used to avoid syntax errors within JSX expressions.",
    category: "Historical Context"
  },
  {
    id: 29,
    topic: "Expression slots in JSX",
    question: "What is an expression slot in JSX?",
    answer: "An expression slot in JSX allows JavaScript expressions to be embedded inside curly braces `{}` within JSX elements.",
    category: "Definition"
  },
  {
    id: 30,
    topic: "Expression slots in JSX",
    question: "How do you use expression slots in JSX?",
    answer: "To use an expression slot, wrap a JavaScript expression inside curly braces `{}` within JSX, like this: `<p>{variableName}</p>`.",
    category: "Syntax"
  },
  {
    id: 31,
    topic: "Expression slots in JSX",
    question: "When should you use expression slots in JSX?",
    answer: "You should use expression slots when you need to dynamically inject JavaScript values, like variables or function results, into JSX elements.",
    category: "Use Case"
  },
  {
    id: 32,
    topic: "Expression slots in JSX",
    question: "Can you provide an example of using an expression slot in JSX?",
    answer: "Yes, an example would be:\n```jsx\nconst name = 'John';\n<p>Hello, {name}!</p>\n``` This outputs: `Hello, John!`.",
    category: "Examples"
  },
  {
    id: 33,
    topic: "Expression slots in JSX",
    question: "What is a common error when using expression slots in JSX?",
    answer: "A common error is placing a statement, such as an `if` condition, inside the expression slot, which leads to a syntax error because only expressions are allowed, not statements.",
    category: "Common Errors"
  },
  {
    id: 34,
    topic: "Expression slots in JSX",
    question: "How do expression slots impact performance in a React application?",
    answer: "Expression slots are compiled into `React.createElement` calls, which efficiently handle the dynamic content. They don't significantly impact performance unless overused in complex components.",
    category: "Performance Considerations"
  },
  {
    id: 35,
    topic: "Expression slots in JSX",
    question: "Why are curly braces used for expression slots in JSX?",
    answer: "Curly braces are used in JSX because they signify JavaScript expressions inside JSX. This convention was introduced to maintain the separation of static content (HTML-like syntax) and dynamic content (JavaScript).",
    category: "Historical Context"
  },
  {
    id: 36,
    topic: "Dynamic attributes in JSX",
    question: "What are dynamic attributes in JSX?",
    answer: "Dynamic attributes in JSX allow you to assign values to attributes using JavaScript expressions, making them responsive to changes in data.",
    category: "Definition"
  },
  {
    id: 37,
    topic: "Dynamic attributes in JSX",
    question: "How do you assign a dynamic attribute to an element in JSX?",
    answer: "To assign a dynamic attribute, use curly braces `{}` to wrap the JavaScript expression. For example, `<img src={imageUrl} />` sets the `src` attribute dynamically.",
    category: "Syntax"
  },
  {
    id: 38,
    topic: "Dynamic attributes in JSX",
    question: "When should you use dynamic attributes in JSX?",
    answer: "Dynamic attributes are useful when the attribute values are not static, such as when pulling data from a state or props, or when the value is computed at runtime.",
    category: "Use Case"
  },
  {
    id: 39,
    topic: "Dynamic attributes in JSX",
    question: "Can you provide an example of using dynamic attributes in JSX?",
    answer: "Yes, an example would be:\n```jsx\nconst isActive = true;\n<button className={isActive ? 'active' : 'inactive'}>Click Me</button>\n``` This sets the button class dynamically based on the value of `isActive`.",
    category: "Examples"
  },
  {
    id: 40,
    topic: "Dynamic attributes in JSX",
    question: "What is a common mistake developers make when using dynamic attributes in JSX?",
    answer: "A common mistake is forgetting to use curly braces around the JavaScript expression, which results in the value being treated as a string instead of an expression.",
    category: "Common Errors"
  },
  {
    id: 41,
    topic: "Dynamic attributes in JSX",
    question: "How do dynamic attributes affect performance in a React application?",
    answer: "Dynamic attributes in JSX are efficiently managed by React’s virtual DOM, though excessive re-rendering caused by changing attributes can affect performance in complex applications.",
    category: "Performance Considerations"
  },
  {
    id: 42,
    topic: "Dynamic attributes in JSX",
    question: "Why were dynamic attributes introduced in JSX?",
    answer: "Dynamic attributes were introduced to allow developers to bind JavaScript values directly to HTML attributes, enabling dynamic updates to the DOM based on state or props changes.",
    category: "Historical Context"
  },
  {
    id: 43,
    topic: "JSX trasnformer (React 17)",
    question: "What is the JSX transformer introduced in React 17?",
    answer: "The JSX transformer in React 17 automatically imports the necessary JSX functions, like `React.createElement`, so developers no longer need to manually import React in every file that uses JSX.",
    category: "Definition"
  },
  {
    id: 44,
    topic: "JSX trasnformer (React 17)",
    question: "How does the JSX transformer change how JSX is written in React 17?",
    answer: "With the new JSX transformer, you no longer need to import React in files where JSX is used. The compiler takes care of injecting the required imports automatically.",
    category: "Syntax"
  },
  {
    id: 45,
    topic: "JSX trasnformer (React 17)",
    question: "When should you rely on the JSX transformer in React 17?",
    answer: "You should rely on the JSX transformer in React 17 whenever you are using JSX. It simplifies code and reduces errors caused by missing imports for React.",
    category: "Use Case"
  },
  {
    id: 46,
    topic: "JSX trasnformer (React 17)",
    question: "Can you provide an example of JSX with and without the transformer in React 17?",
    answer: "Yes. Before React 17:\n```javascript\nimport React from 'react';\nconst element = <div>Hello</div>;\n```\nWith React 17 and the JSX transformer, the `import React` statement is no longer required.",
    category: "Examples"
  },
  {
    id: 47,
    topic: "JSX trasnformer (React 17)",
    question: "What is a common mistake when upgrading to React 17's JSX transformer?",
    answer: "A common mistake is assuming that all React imports can be removed. While the transformer handles JSX, other React features, like hooks, still need to be explicitly imported.",
    category: "Common Errors"
  },
  {
    id: 48,
    topic: "JSX trasnformer (React 17)",
    question: "How does the JSX transformer in React 17 impact performance?",
    answer: "The JSX transformer does not directly affect runtime performance. However, it simplifies the build process by automatically injecting JSX-related imports, reducing potential overhead during development.",
    category: "Performance Considerations"
  },
  {
    id: 49,
    topic: "JSX trasnformer (React 17)",
    question: "Why was the JSX transformer introduced in React 17?",
    answer: "The JSX transformer was introduced to simplify React development by removing the need for manual imports of React when using JSX, addressing a common source of errors for beginners.",
    category: "Historical Context"
  },
  {
    id: 50,
    topic: "Boolean Attributes in JSX",
    question: "What are boolean attributes in JSX?",
    answer: "Boolean attributes in JSX are attributes that can be set to true or false. If present, they indicate a true value, and if absent, they indicate false.",
    category: "Definition"
  },
  {
    id: 51,
    topic: "Boolean Attributes in JSX",
    question: "How do you use boolean attributes in JSX?",
    answer: "You can use boolean attributes in JSX by simply adding the attribute name without a value, like `<input required />`, or by setting it explicitly, like `<input required={true} />`.",
    category: "Syntax"
  },
  {
    id: 52,
    topic: "Boolean Attributes in JSX",
    question: "When should you use boolean attributes in JSX?",
    answer: "You should use boolean attributes when an attribute's presence indicates a true state, such as `disabled`, `checked`, or `required` in form elements.",
    category: "Use Case"
  },
  {
    id: 53,
    topic: "Boolean Attributes in JSX",
    question: "Can you provide an example of a boolean attribute in JSX?",
    answer: "Yes, an example of a boolean attribute would be:\n```jsx\n<input type='checkbox' checked={isChecked} />\n``` This checks the checkbox if `isChecked` is true.",
    category: "Examples"
  },
  {
    id: 54,
    topic: "Boolean Attributes in JSX",
    question: "What is a common mistake when using boolean attributes in JSX?",
    answer: "A common mistake is using a string value instead of a boolean, like `<input required='true' />`, which sets the attribute to a string instead of a boolean value.",
    category: "Common Errors"
  },
  {
    id: 55,
    topic: "Boolean Attributes in JSX",
    question: "How do boolean attributes affect performance in a React application?",
    answer: "Boolean attributes are handled efficiently by React, as they are translated to proper HTML attributes. Their use does not significantly affect performance unless mismanaged in complex components.",
    category: "Performance Considerations"
  },
  {
    id: 56,
    topic: "Boolean Attributes in JSX",
    question: "Why were boolean attributes included in JSX?",
    answer: "Boolean attributes were included in JSX to provide a more intuitive way to manage state in UI elements, allowing developers to easily control their behavior based on component logic.",
    category: "Historical Context"
  }
];

export default FLASHCARDS_DATA;