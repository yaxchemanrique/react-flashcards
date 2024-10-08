const flashcards =
  [
    {
      id: 1,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside JavaScript code.",
      topic: {
        id: "jsx-basics",
        label: "JSX Basics",
      },
      category: "definition"
    },
    {
      id: 2,
      question: "How does JSX get transformed into browser-readable code?",
      answer: "JSX gets compiled into calls to `React.createElement()` which outputs plain JavaScript objects representing the DOM structure.",
      topic: {
        id: "jsx-compilation",
        label: "JSX Compilation",
      },
      category: "definition"
    },
    {
      id: 3,
      question: "What is the purpose of the parentheses when writing multi-line JSX?",
      answer: "The parentheses around multi-line JSX are used to improve readability by allowing the JSX to be pushed onto the next line. They are optional but considered a best practice.",
      topic: {
        id: "jsx-syntax",
        label: "JSX Syntax",
      },
      category: "syntax"
    },
    {
      id: 4,
      question: "Does forgetting to import the React module when using JSX cause an error in modern versions of React?",
      answer: "No, modern versions of React with the new JSX transformer will automatically import the necessary modules during the compilation process even if you forget the import statement.",
      topic: {
        id: "jsx-compilation",
        label: "JSX Compilation",
      },
      category: "syntax"
    },
    {
      id: 5,
      question: "How do you write a comment inside JSX?",
      answer: "To write a comment in JSX, use the JavaScript multi-line comment syntax wrapped in curly braces. For example: ```{/* This is a comment in JSX */}```",
      topic: {
        id: "jsx-syntax",
        label: "JSX Syntax",
      },
      category: "syntax"
    },
    {
      id: 6,
      question: "What is an expression slot in JSX?",
      answer: "An expression slot in JSX is a slot where you can put any valid JavaScript expression by wrapping it in curly braces `{}`. It allows embedding dynamic content.",
      topic: {
        id: "jsx-expression-slots",
        label: "JSX Expression Slots",
      },
      category: "definition"
    },
    // {
    //   id: 7,
    //   question: "Can if statements or other statements like for loops be used inside JSX expression slots?",
    //   answer: "No, JSX expression slots only accept expressions, not statements. This is because JSX gets compiled into function calls and object construction where statements are not allowed.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 8,
    //   question: "How can attribute values be made dynamic in JSX?",
    //   answer: "To make attribute values dynamic in JSX, use an expression slot by putting the JavaScript expression inside curly braces right in the attribute value spot.",
    //   topic: {
    //     id: "jsx-attributes",
    //     label: "JSX Attributes",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 9,
    //   question: "Are some HTML attributes like `class` and `for` written differently in JSX?",
    //   answer: "Yes, because `class` and `for` are reserved keywords in JavaScript, in JSX they are written as `className` and `htmlFor` respectively.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 10,
    //   question: "Are self-closing tags required for elements with no children in JSX?",
    //   answer: "Yes, any JSX tag must be explicitly closed, so elements with no children must end with a self-closing forward slash, e.g. `<img />`.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 11,
    //   question: "How are inline styles written in JSX?",
    //   answer: "Inline styles in JSX are written as JavaScript objects inside an expression slot in the style attribute. Property names are camelCased and values are usually strings. For example: ```style={{ color: 'red', fontSize: '12px' }}```",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 12,
    //   question: "What is a common pitfall with formatting and whitespace in JSX?",
    //   answer: "By default, whitespace between JSX tags is removed, so explicit spaces need to be added with `{' '}` to avoid text running together in the output.",
    //   topic: {
    //     id: "jsx-whitespace",
    //     label: "JSX Whitespace",
    //   },
    //   category: "common errors"
    // },
    // {
    //   id: 13,
    //   question: "What is the key distinction between JSX and template languages?",
    //   answer: "JSX is compiled into JavaScript calls that construct objects, while template languages directly output HTML strings with their own custom syntax. JSX lets you use the full power of JavaScript.",
    //   topic: "JSX vs Templates",
    //   topic: {
    //     id: "jsx-vs-templates",
    //     label: "JSX vs Templates",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 14,
    //   question: "Is JSX an entirely separate language from JavaScript?",
    //   answer: "No, JSX is a thin layer of abstraction over JavaScript, not a completely separate template language. It allows using JavaScript expressions and logic directly.",
    //   topic: "JSX vs Templates",
    //   topic: {
    //     id: "jsx-vs-templates",
    //     label: "JSX vs Templates",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 15,
    //   question: "What code does the JSX compiler produce when compiling a JSX expression?",
    //   answer: "The JSX compiler turns JSX expressions into calls to `React.createElement()`, passing the tag name, props, and children as arguments.",
    //   topic: { 
    //     id: 'jsx-compilation', 
    //     label: 'JSX Compilation' 
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 16,
    //   question: "Do browsers understand JSX natively?",
    //   answer: "No, browsers cannot interpret JSX directly. JSX code must first be compiled into regular JavaScript by a build tool like Babel before running in the browser.",
    //   topic: { 
    //     id: 'jsx-compilation', 
    //     label: 'JSX Compilation' 
    //   },
    //   category: "compatibility"
    // },
    // {
    //   id: 17,
    //   question: "Should component names be capitalized in JSX?",
    //   answer: "Yes, component names in JSX should be capitalized (e.g. `<MyComponent />`) to differentiate them from lowercase HTML tags.",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "best practices"
    // },
    // {
    //   id: 18,
    //   question: "Can JavaScript expressions be embedded in JSX?",
    //   answer: "Yes, JavaScript expressions can be embedded in JSX using curly braces `{}`, including variables, functions, and calculations.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 19,
    //   question: "How are inline styles defined in JSX?",
    //   answer: "In JSX, inline styles are not specified as a string. Instead they are defined using an object whose key is the camelCased version of the style name, and whose value is the style's value, usually a string.",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 20,
    //   question: "What is wrong with this JSX code: ```<h1 class='title'>Hello!</h1>```?",
    //   answer: "The JSX code uses `class` instead of `className`. Since JSX is JavaScript, and `class` is a reserved word in JavaScript, JSX uses `className` instead.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "common errors"
    // },
    // {
    //   id: 21,
    //   question: "How do you write a comment in JSX?",
    //   answer: "To write a comment in JSX, you use the JavaScript syntax wrapped in curly braces: ```{/* comment goes here */}```",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 22,
    //   question: "What does JSX stand for?",
    //   answer: "JSX stands for JavaScript XML. It allows us to write HTML in React and converts HTML tags into React elements.",
    //   topic: {
    //     id: "jsx-basics",
    //     label: "JSX Basics",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 23,
    //   question: "Is it mandatory to use JSX in React?",
    //   answer: "No, using JSX is not mandatory in React. Every JSX element is just syntactic sugar for calling `React.createElement()`. However, JSX makes your React code simpler and elegant.",
    //   topic: {
    //     id: "jsx-basics",
    //     label: "JSX Basics",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 24,
    //   question: "What is the difference between an element and a component in React?",
    //   answer: "An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. A component is a function or a class which optionally accepts inputs and returns a React element.",
    //   topic: {
    //     id: "react-elements.vs-components",
    //     label: "React Elements vs Components",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 25,
    //   question: "What is the difference between expressions and statements in JSX?",
    //   answer: "Expressions are units of code that evaluate to a value. Statements perform an action. JSX only supports expressions, not statements. This means you can't use if, for, while etc. directly inside JSX but you can use ternary expressions for conditional rendering.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 26,
    //   question: "How do you pass a string literal in JSX?",
    //   answer: "You can pass a string literal as a prop by surrounding it with single or double quotes: ```<MyComponent message='hello world' />```",
    //   topic: {
    //     id: "jsx-attributes",
    //     label: "JSX Attributes",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 27,
    //   question: "How do you pass a numeric literal in JSX?",
    //   answer: "You can pass a numeric literal directly as a prop without quotes: ```<MyComponent value={42} />```",
    //   topic: {
    //     id: "jsx-attributes",
    //     label: "JSX Attributes",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 28,
    //   question: "What happens if you forget to close a JSX tag?",
    //   answer: "If you forget to close a JSX tag, you will get a syntax error during compilation. JSX requires all tags to be properly closed.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "common errors"
    // },
    // {
    //   id: 29,
    //   question: "What is the naming convention for attributes in JSX?",
    //   answer: "In JSX, attributes follow the camelCase naming convention instead of the HTML attribute names. For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "best practices"
    // },
    // {
    //   id: 30,
    //   question: "How do you write multi-line JSX?",
    //   answer: "To write multi-line JSX, wrap the JSX in parentheses. This tells the JavaScript parser that everything inside is one expression",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 31,
    //   question: "What is the significance of capitalization in JSX tags?",
    //   answer: "In JSX, lowercase tag names are considered to be HTML tags. However, capitalized tags indicate that it is a component and will be compiled to a direct reference to the named variable.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 32,
    //   question: "Can JSX be mixed with JavaScript?",
    //   answer: "Yes, you can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`. This includes variables, functions, and even objects.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 33,
    //   question: "What is the purpose of using curly braces `{}` in JSX?",
    //   answer: "In JSX, curly braces `{}` are used to embed JavaScript expressions. Anything inside the curly braces will be evaluated as JavaScript.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 34,
    //   question: "How do you conditionally render elements in JSX?",
    //   answer: "You can't use if/else statements inside JSX. Instead, you can use ternary expressions or logical `&&` operator for conditional rendering.",
    //   topic: "Conditional Rendering",
    //   topic: {
    //     id: "conditional-rendering",
    //     label:"Conditional Rendering",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 35,
    //   question: "How do you render a list of elements in JSX?",
    //   answer: "You can render a list of elements in JSX by using the JavaScript `map()` function inside curly braces `{}`. Remember to provide a unique key prop for each list item.",
    //   topic: "Rendering Lists",
    //   category: "use case"
    // },
    // {
    //   id: 36,
    //   question: "What is the purpose of the key prop when rendering lists in JSX?",
    //   answer: "The key prop is a special string attribute you need to include when creating lists of elements in JSX. Keys help React identify which items have changed, are added, or are removed, which is crucial for performance.",
    //   topic: "Rendering Lists",
    //   category: "definition"
    // },
    // {
    //   id: 37,
    //   question: "Can an expression slot in JSX hold a statement?",
    //   answer: "No, an expression slot in JSX cannot hold a statement because JSX is compiled into JavaScript function calls and object construction where statements are not allowed, only expressions.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 38,
    //   question: "What is 'transpilation' in the context of JSX?",
    //   answer: "Transpilation is the process of converting JSX syntax into regular JavaScript code that browsers can understand. This is usually done by build tools like Babel.",
    //   topic:
    //     { id: 'jsx-compilation', label: 'JSX Compilation' },
    //   category: "definition"
    // },
    // {
    //   id: 39,
    //   question: "What is the difference between compile-time and run-time in the context of JSX?",
    //   answer: "Compile-time refers to the phase where JSX is converted into JavaScript code, while run-time is when the resulting JavaScript code is actually executed in the browser.",
    //   topic:
    //     { id: 'jsx-compilation', label: 'JSX Compilation' },
    //   category: "definition"
    // },
    // {
    //   id: 40,
    //   question: "Does React automatically add `px` to inline style values?",
    //   answer: "Yes, React will automatically append `px` to certain numeric inline style properties. However, unitless numbers are assumed for certain CSS properties like `zoom`, `order`, `flex`, etc.",
    //   topic: "Inline Styles",
    //   category: "syntax"
    // },
    // {
    //   id: 41,
    //   question: "What is wrong with this JSX code: ```<input maxlength='10' />```?",
    //   answer: "The JSX code uses `maxlength` instead of `maxLength`. In JSX, all attributes are camelCased, so the correct code would be ```<input maxLength='10' />```",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "common errors"
    // },
    // {
    //   id: 42,
    //   question: "What is wrong with this JSX code: ```<MyComponent style='color: red;' />```?",
    //   answer: "In JSX, inline styles are not specified as a string. They are passed as an object with camelCased properties, like this: ```<MyComponent style={{ color: 'red' }} />```",
    //   topic: "Inline Styles",
    //   category: "common errors"
    // },
    // {
    //   id: 43,
    //   question: "What is the purpose of a JSX Fragment?",
    //   answer: "JSX Fragments allow you to group a list of children without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component.",
    //   topic: "JSX Fragments",
    //   category: "definition"
    // },
    // {
    //   id: 44,
    //   question: "How do you declare a JSX Fragment?",
    //   answer: "You can declare a JSX Fragment either by wrapping elements in empty tags like this: ```<> </>```, or by using the explicit Fragment syntax: ```<React.Fragment> </React.Fragment>.```",
    //   topic: "JSX Fragments",
    //   category: "syntax"
    // },
    // {
    //   id: 45,
    //   question: "What are the benefits of using JSX?",
    //   answer: "JSX allows you to write HTML-like code in your JavaScript, making your code more readable and intuitive. It also provides a visual aid when working with the UI and allows React to show more useful error and warning messages.",
    //   topic: {
    //     id: "jsx-basics",
    //     label: "JSX Basics",
    //   },
    //   category: "best practices"
    // },
    // {
    //   id: 46,
    //   question: "How do you pass a boolean value to a JSX attribute?",
    //   answer: "To pass a boolean value to a JSX attribute, you can use a JavaScript expression with curly braces. For example: ```<MyTextBox autocomplete={true} />```",
    //   topic: {
    //     id: "jsx-attributes",
    //     label: "JSX Attributes",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 47,
    //   question: "What is the significance of the `htmlFor` attribute in JSX?",
    //   answer: "In HTML, you use the `for` attribute on a `<label>` element to associate it with an `<input>` element. However, `for` is a reserved keyword in JavaScript. Therefore, in JSX, you use `htmlFor` instead.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 48,
    //   question: "What happens if you try to render an object as a children in JSX?",
    //   answer: "If you try to render an object as a child in JSX, you will get an error. Children in JSX must be a string, a JSX element, or an array of those things. Objects are not valid React child elements.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "common errors"
    // },
    // {
    //   id: 49,
    //   question: "How do you render HTML entities in JSX?",
    //   answer: "You can render HTML entities in JSX using their Unicode character code or named reference wrapped in curly braces. For example, to render a copyright symbol, you can use `{'\u00A9'}` or `&copy;`",
    //   topic: "Rendering HTML Entities",
    //   category: "syntax"
    // },
    // {
    //   id: 50,
    //   question: "What is the purpose of the `data-*` and `aria-*` attributes in JSX?",
    //   answer: "The `data-*` and `aria-*` attributes in JSX are used for embedding custom data attributes and Accessible Rich Internet Applications (ARIA) attributes respectively. They are written the same way as in HTML, without camelCasing.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 51,
    //   question: "What is the difference between a controlled component and an uncontrolled component?",
    //   answer: "A controlled component is a form element whose value is controlled by React state, where the value of the form element is always driven by the React state. An uncontrolled component is a form element whose value is handled by the DOM itself, and React has no control over its value.",
    //   topic: "Controlled vs Uncontrolled Components",
    //   category: "definition"
    // },
    // {
    //   id: 52,
    //   question: "How do you prevent code injection attacks in JSX?",
    //   answer: "By default, React DOM escapes any values embedded in JSX before rendering them. This helps prevent XSS (cross-site-scripting) attacks. Everything is converted to a string before being rendered, which avoids injection attacks.",
    //   topic: "Security",
    //   category: "best practices"
    // },
    // {
    //   id: 53,
    //   question: "What is the significance of the `ref` attribute in JSX?",
    //   answer: "The `ref` attribute in JSX is used to get a reference to the underlying DOM node or React component instance. It takes a callback function which will be executed when the component mounts. The DOM node or component instance is passed to this callback as an argument.",
    //   topic: "Refs",
    //   category: "definition"
    // },
    // {
    //   id: 54,
    //   question: "What is the purpose of using curly braces twice `{{ }}` in JSX?",
    //   answer: "In JSX, curly braces are used to embed expressions. When you want to pass an object as a value in JSX, you need to wrap the object in another set of curly braces. For example, to pass a style object: ```<div style={{ color: 'red', fontSize: '14px' }}>```",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 55,
    //   question: "What is the purpose of the `dangerouslySetInnerHTML` attribute in JSX?",
    //   answer: "The `dangerouslySetInnerHTML` is a replacement for using `innerHTML` in the browser DOM. It allows you to set HTML directly from React, but it can be risky because it makes it easy to accidentally expose your users to a cross-site scripting (XSS) attack.",
    //   topic: {
    //     id: "differences-from-html",
    //     label: "Differences from HTML",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 56,
    //   question: "How does React handle events in JSX?",
    //   answer: "In JSX, event handlers are specified as camelCased attributes on elements, and they accept a function as the event handler rather than a string. For example: ```<button onClick={handleClick}>```",
    //   topic: {
    //     id: "event-handling-html",
    //     label: "Event Handling",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 57,
    //   question: "What are the performance implications of using JSX?",
    //   answer: "The use of JSX does not have a significant impact on performance. The JSX code is compiled into regular JavaScript function calls, which are fast. However, the React team is always working on improving the compilation process to make it even faster.",
    //   topic: {
    //     id: "performance",
    //     label: "Performance",
    //   },
    //   category: "performance considerations"
    // },
    // {
    //   id: 59,
    //   question: "What is the role of Babel in the JSX workflow?",
    //   answer: "Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. In the context of JSX, Babel is used to compile JSX code into regular JavaScript that browsers can understand.",
    //   topic: {
    //     id: 'jsx-compilation',
    //     label: 'JSX Compilation' 
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 60,
    //   question: "How can you write comments in JSX?",
    //   answer: "In JSX, you can write comments using the JavaScript multi-line comment syntax wrapped in curly braces. For example: ```{/* This is a comment in JSX */}```. Single-line comments `//` are not supported in JSX.",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 61,
    //   question: "What are the restrictions on JSX tag names?",
    //   answer: "In JSX, tag names must either be lowercase for built-in components like `<div>` or `<span>`, or they must start with an uppercase letter for custom components like `<MyComponent>`. This helps differentiate between HTML tags and custom components.",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 62,
    //   question: "How do you pass a function as a prop in JSX?",
    //   answer: "To pass a function as a prop in JSX, you can reference the function name directly without calling it. For example: ```<MyComponent handleClick={handleClick} />``` Here, `handleClick` is a function defined in the parent component.",
    //   topic: {
    //     id: "jsx-props",
    //     label: "JSX Props",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 63,
    //   question: "What is the significance of the `key` prop in JSX?",
    //   answer: "The `key` prop is used in JSX when rendering a list of elements. It helps React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.",
    //   topic: {
    //     id: "jsx-lists-and-keys",
    //     label: "JSX Lists and Keys",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 64,
    //   question: "Can you use an `if` statement within JSX?",
    //   answer: "No, you cannot use an `if` statement within JSX because JSX is a syntax extension of JavaScript, not a templating language. However, you can use an `if` statement outside of your JSX to conditionally render components, or you can use a ternary expression or logical `&&` operator within JSX.",
    //   topic: {
    //     id: "jsx-conditional-rendering",
    //     label: "JSX Conditional Rendering",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 65,
    //   question: "What is the purpose of using `{}` curly braces in JSX?",
    //   answer: "In JSX, curly braces `{}` are used to embed JavaScript expressions. This allows you to refer to JavaScript variables within JSX, perform computations, call functions, and more. Anything inside the curly braces will be treated as JavaScript code.",
    //   topic: {
    //     id: "jsx-expression-slots",
    //     label: "JSX Expression Slots",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 66,
    //   question: "How does JSX prevent injection attacks?",
    //   answer: "JSX prevents injection attacks by automatically escaping embedded expressions. This means that you cannot inject user input that could be interpreted as code. Instead, JSX treats everything as a string before rendering it, which neutralizes potential attacks.",
    //   topic: {
    //     id: "jsx-security",
    //     label:"JSX Security",
    //   },
    //   category: "best practices"
    // },
    // {
    //   id: 67,
    //   question: "What is the significance of the `children` prop in JSX?",
    //   answer: "In JSX, the `children` prop is used to pass child elements to a component. It allows you to nest components and other JSX within a parent component. The value of `children` can be other JSX elements, strings, numbers, or even functions.",
    //   topic: {
    //     id: "jsx-props",
    //     label:"JSX Props",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 68,
    //   question: "How do you conditionally apply CSS classes in JSX?",
    //   answer: "To conditionally apply CSS classes in JSX, you can use the `className` attribute along with a JavaScript expression that evaluates to the desired class name. For example: ```<div className={isActive ? 'active' : ''}>``` Here, the `active` class will be applied if `isActive` is true.",
    //   topic: {
    //     id: "jsx-conditional-styling",
    //     label: "JSX Conditional Styling",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 69,
    //   question: "Can you use regular CSS stylesheets with JSX?",
    //   answer: "Yes, you can use regular CSS stylesheets with JSX. You can write your CSS in a separate file and import it into your JSX file. The class names defined in your CSS can be used in the `className` attribute of your JSX elements.",
    //   topic: {
    //     id: "jsx-styling",
    //     label: "JSX Styling",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 70,
    //   question: "How do you handle events in JSX?",
    //   answer: "In JSX, you handle events using camelCase event names and providing a function as the event handler. For example: ```<button onClick={handleClick}>``` Here, `handleClick` is a function defined in your component that will be called when the button is clicked.",
    //   topic: {
    //     id: "jsx-event-handling",
    //     label: "JSX Event Handling",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 71,
    //   question: "What is the difference between JSX and HTML?",
    //   answer: "While JSX looks similar to HTML, there are a few key differences. In JSX, you use `className` instead of `class` for CSS classes, `htmlFor` instead of `for` for label associations, and camelCase for event names and attributes. Additionally, in JSX, all tags must be properly closed, even self-closing tags.",
    //   topic: {
    //     id: "jsx-vs-html",
    //     label: "JSX vs HTML",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 72,
    //   question: "Can you embed JSX inside of if statements?",
    //   answer: "JSX cannot be directly embedded inside `if` statements. However, you can use `if` statements to conditionally assign JSX to variables, which can then be used in your return statement. Alternatively, you can use ternary operators or logical `&&` operators for conditional rendering directly within JSX.",
    //   topic: {
    //     id: "jsx-conditional-rendering",
    //     label: "JSX Conditional Rendering",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 73,
    //   question: "How do you iterate over an array in JSX?",
    //   answer: "In JSX, you can iterate over an array using the JavaScript `map()` function. Inside your component, you can map over your array and return JSX elements for each item. Remember to provide a unique `key` prop for each element in the mapped array.",
    //   topic: {
    //     id: "jsx-lists",
    //     label: "JSX Lists",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 74,
    //   question: "What is the purpose of using `()` parentheses in multi-line JSX?",
    //   answer: "In JSX, when you have multi-line expressions, it's common to wrap the entire expression in parentheses `()`. This is not strictly necessary, but it can make your code more readable and it also helps avoid the pitfalls of automatic semicolon insertion.",
    //   topic: {
    //     id: "jsx-syntax",
    //     label: "JSX Syntax",
    //   },
    //   category: "best practices"
    // },
    // {
    //   id: 75,
    //   question: "How do you pass props to a component in JSX?",
    //   answer: "In JSX, you pass props to a component using a syntax similar to HTML attributes. For example: ```<MyComponent propName='value'>``` Here, `propName` is the name of the prop and `value` is the value being passed. The value can be a string in quotes, or a JavaScript expression in curly braces `{}`.",
    //   topic: {
    //     id: "jsx-props",
    //     label:"JSX Props",
    //   },
    //   category: "syntax"
    // },
    // {
    //   id: 76,
    //   question: "What is the significance of the `defaultProps` property in a component?",
    //   answer: "In a React component, the `defaultProps` property allows you to set default values for the component's props. If a prop is not provided when the component is used in JSX, it will fall back to the value specified in `defaultProps`. This can be useful for providing fallback values and making props optional.",
    //   topic: {
    //     id: "jsx-props",
    //     label:"JSX Props",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 77,
    //   question: "How do you conditionally render components in JSX?",
    //   answer: "In JSX, you can conditionally render components using JavaScript operators like the ternary operator or the logical `&&` operator. For example: ```{isLoggedIn ? <UserProfile /> : <LoginForm />}``` Here, if `isLoggedIn` is true, the `<UserProfile />` component will be rendered, otherwise the `<LoginForm />` component will be rendered.",
    //   topic: {
    //     id: "jsx-conditional-rendering",
    //     label: "JSX Conditional Rendering",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 78,
    //   question: "What is the significance of the `PropTypes` library in React?",
    //   answer: "The `PropTypes` library in React is used for type checking a component's props. It allows you to specify the type and shape of props that a component expects, and provides warnings in the JavaScript console if the wrong type of prop is passed. This can help catch bugs and improve the reliability of your components.",
    //   topic: {
    //     id: "jsx-props",
    //     label:"JSX Props",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 79,
    //   question: "How do you handle form submissions in JSX?",
    //   answer: "In JSX, you handle form submissions by attaching an `onSubmit` event handler to the form element. The event handler function should call `event.preventDefault()` to prevent the default form submission behavior. You can then access the form data through the event object or by using refs to the form elements.",
    //   topic: {
    //     id: "jsx-form-handling",
    //     label: "JSX Form Handling",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 80,
    //   question: "What is the purpose of the `ref` attribute in JSX?",
    //   answer: "In JSX, the `ref` attribute is used to get a reference to the underlying DOM node or React component instance. It allows you to directly access and manipulate the node or component. Refs should be used sparingly and only when necessary, such as for managing focus, animations, or integrating with third-party libraries.",
    //   topic: {
    //     id: "jsx-refs",
    //     label: "JSX Refs",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 81,
    //   question: "How do you handle dynamic class names in JSX?",
    //   answer: "In JSX, you can handle dynamic class names by using a JavaScript expression in the `className` attribute. For example: ```<div className={`item ${isActive ? 'active' : ''}`}>``` Here, the `isActive` variable determines whether the `active` class is applied or not. You can also use libraries like `classnames` to simplify complex class composition.",
    //   topic: {
    //     id: "jsx-conditional-styling",
    //     label: "JSX Conditional Styling",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 82,
    //   question: "What is the difference between `state` and `props` in React components?",
    //   answer: "`state` and `props` are both used to store data in React components, but they serve different purposes. `props` are passed to a component from its parent and are read-only within the component. `state` is managed internally by a component and can change over time. When the state changes, the component re-renders itself.",
    //   topic: {
    //     id: "react-component-state-and-props",
    //     label: "React Component State and Props",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 83,
    //   question: "How do you pass data from a child component to a parent component in React?",
    //   answer: "In React, data typically flows from parent components to child components via props. However, to pass data from a child to a parent, you can pass a callback function as a prop from the parent to the child. The child component can then call this function with the data it wants to pass back to the parent.",
    //   topic: {
    //     id: "react-component-communication",
    //     label: "React Component Communication",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 84,
    //   question: "What is the purpose of the `key` prop when rendering lists in JSX?",
    //   answer: "When rendering a list of elements in JSX, each element should have a unique `key` prop. The `key` prop helps React identify which items in the list have changed, been added, or been removed. This is crucial for performance and for correctly updating the UI when the list changes. The `key` should be a string that uniquely identifies an item among its siblings.",
    //   topic: {
    //     id: "jsx-lists-and-keys",
    //     label: "JSX Lists and Keys",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 85,
    //   question: "What is the significance of the `useState` hook in React?",
    //   answer: "The `useState` hook is a built-in hook in React that allows functional components to have state. It takes an initial state value as an argument and returns an array containing the current state value and a function to update it. `useState` enables functional components to manage their own state without needing to convert them to class components.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 86,
    //   question: "How do you conditionally render elements in JSX based on a boolean condition?",
    //   answer: "In JSX, you can conditionally render elements based on a boolean condition using the logical `&&` operator or a ternary operator. For example: ````{isLoggedIn && <WelcomeMessage />}``` Here, the `<WelcomeMessage />` component will only be rendered if `isLoggedIn` is true. Alternatively, you can use a ternary operator: ```{isLoggedIn ? <WelcomeMessage /> : <LoginForm />}```",
    //   topic: {
    //     id: "jsx-conditional-rendering",
    //     label: "JSX Conditional Rendering",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 87,
    //   question: "What is the purpose of the `useEffect` hook in React?",
    //   answer: "The `useEffect` hook is used to perform side effects in functional components. Side effects can include things like fetching data, subscribing to events, or manually changing the DOM. `useEffect` takes two arguments: a callback function that performs the side effect, and an optional array of dependencies. The effect will re-run whenever any of the dependencies change.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 88,
    //   question: "How do you prevent a component from re-rendering in React?",
    //   answer: "In React, you can prevent a component from re-rendering by implementing the `shouldComponentUpdate` lifecycle method (for class components) or by using the `React.memo` higher-order component (for functional components). These allow you to compare the current and next props and state, and return false if the component doesn't need to re-render.",
    //   topic: {
    //     id: "react-performance-optimization",
    //     label: "React Performance Optimization",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 89,
    //   question: "What is the difference between 'controlled' and 'uncontrolled' components in React?",
    //   answer: "In React, 'controlled' components are those where the form data is handled by the component's state. The data is controlled by React, and any changes trigger a re-render. 'Uncontrolled' components, on the other hand, let the DOM handle the form data on its own. The data is retrieved from the DOM when needed, rather than being stored in React's state.",
    //   topic: {
    //     id: "react-forms",
    //     label: "React Forms",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 90,
    //   question: "How do you handle errors in React components?",
    //   answer: "In React, you can handle errors using error boundaries. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. You can create an error boundary component by defining a new class component with either `static getDerivedStateFromError()` or `componentDidCatch()`",
    //   topic: {
    //     id: "react-error-handling",
    //     label: "React Error Handling",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 91,
    //   question: "What is the purpose of the `useContext` hook in React?",
    //   answer: "The `useContext` hook in React is used to consume context in a functional component. Context provides a way to pass data through the component tree without having to pass props down manually at every level. `useContext` accepts a context object and returns the current context value for that context.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 92,
    //   question: "How do you optimize performance in React components?",
    //   answer: "There are several ways to optimize performance in React components: \n1) Use `shouldComponentUpdate` or `React.memo` to avoid unnecessary re-renders. \n2) Use the `useMemo` hook to memoize expensive calculations. \n3) Use the `useCallback` hook to memoize callback functions. \n4) Lazy load components that are not immediately needed. \n5) Virtualize long lists to limit the number of DOM nodes created.",
    //   topic: {
    //     id: "react-performance-optimization",
    //     label: "React Performance Optimization",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 93,
    //   question: "What is the difference between `useEffect` and `useLayoutEffect` in React?",
    //   answer: "`useEffect` and `useLayoutEffect` are similar in that they both allow you to perform side effects in functional components. The main difference is in when they are fired. `useEffect` runs asynchronously and after React has updated the DOM. `useLayoutEffect` runs synchronously after a render but before the browser has painted those changes.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 94,
    //   question: "How do you handle routing in a React application?",
    //   answer: "Routing in a React application is typically handled by a third-party library like React Router. React Router allows you to define routes as components, and it will render the appropriate component based on the current URL. It provides components like `BrowserRouter`, `Route`, and `Link` to declaratively define your routes and navigate between them.",
    //   topic: {
    //     id: "react-routing",
    //     label: "React Routing",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 95,
    //   question: "What is the purpose of the `useRef` hook in React?",
    //   answer: "The `useRef` hook in React allows you to create a mutable reference that persists across component re-renders. It can be used to store a value that doesn't require the component to re-render when it changes. A common use case is to access a DOM element directly. `useRef` can also be used to store any mutable value, similar to instance variables in class components.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 96,
    //   question: "How do you share logic across multiple components in React?",
    //   answer: "In React, there are several ways to share logic across multiple components: \n1) Higher-Order Components (HOCs) are functions that take a component and return a new component with some additional props or behavior. \n2) Render Props is a technique where a component receives a function as a prop and calls it to render something. \n3) Custom Hooks allow you to extract component logic into reusable functions.",
    //   topic: {
    //     id: "react-component-patterns",
    //     label: "React Component Patterns",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 97,
    //   question: "What is the difference between `useCallback` and `useMemo` in React?",
    //   answer: "`useCallback` and `useMemo` are both hooks in React that can help optimize performance, but they serve different purposes. `useCallback` is used to memoize callback functions, so that they are not recreated on every render unless their dependencies change. `useMemo` is used to memoize the result of an expensive calculation, so that it is not recalculated on every render unless its dependencies change.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 98,
    //   question: "How do you handle global state in a React application?",
    //   answer: "There are several ways to handle global state in a React application: \n1) Use the Context API to create a global context that can be accessed by any component in the tree. \n2) Use a state management library like Redux or MobX. These provide a centralized store to manage the entire application's state. \n3) Use the `useReducer` hook along with the Context API to manage more complex state.",
    //   topic: {
    //     id: "react-state-management",
    //     label: "React State Management",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 99,
    //   question: "What is the purpose of the `useImperativeHandle` hook in React?",
    //   answer: "`useImperativeHandle` is a React hook that customizes the instance value that is exposed to parent components when using ref. It allows you to replace the ref's current value with a custom value. This is useful when you want to expose a custom API to parent components, instead of the entire component instance.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 100,
    //   question: "How do you optimize the performance of a list rendering in React?",
    //   answer: "To optimize the performance of a list rendering in React: \n1) Always include a unique `key` prop for each list item. This helps React identify which items have changed. \n2) Avoid using the index as the `key` if the order of items may change. \n3) If the list is large, consider implementing virtualization (rendering only the visible items). \n4) Memoize expensive calculations or callbacks used in the list items.",
    //   topic: {
    //     id: "react-performance-optimization",
    //     label: "React Performance Optimization",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 101,
    //   question: "What is the difference between `useState` and `useReducer` in React?",
    //   answer: "Both `useState` and `useReducer` are hooks in React that are used to manage state in functional components. `useState` is simpler and is used for basic state management. It returns a state value and a function to update that state. `useReducer` is used for more complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 102,
    //   question: "How do you handle side effects in React components?",
    //   answer: "In React, side effects are handled using the `useEffect` hook in functional components, or the lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) in class components. Side effects can include things like fetching data from an API, subscribing to events, or manually changing the DOM.",
    //   topic: {
    //     id: "react-side-effects",
    //     label: "React Side Effects",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 103,
    //   question: "What is the purpose of the `useDeferredValue` hook in React?",
    //   answer: "`useDeferredValue` is a React hook that allows you to defer updating a value until the next render cycle. It's useful for optimizing performance when dealing with non-critical updates. It takes a value and returns a deferred version of that value that will only be updated after other more urgent updates have been processed.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
    // {
    //   id: 104,
    //   question: "How do you implement infinite scrolling in a React component?",
    //   answer: "To implement infinite scrolling in a React component: \n1) Load an initial set of data and render it. \n2) Monitor the scroll position of the window or a scroll container. \n3) When the user has scrolled to the bottom (or near the bottom), load the next set of data. \n4) Append the new data to the existing list and re-render. \n5) Repeat steps 3-4 as the user continues scrolling.",
    //   topic: {
    //     id: "react-performance-optimization",
    //     label: "React Performance Optimization",
    //   },
    //   category: "use case"
    // },
    // {
    //   id: 105,
    //   question: "What is the difference between `useEffect` and `useInsertionEffect` in React?",
    //   answer: "`useEffect` and `useInsertionEffect` are both hooks in React used for performing side effects, but they differ in when they run. `useEffect` runs asynchronously after a render is committed to the screen. `useInsertionEffect` runs synchronously before the DOM mutations are applied. `useInsertionEffect` is useful for inserting dynamic styles into the DOM before reading layout in `useLayoutEffect`.",
    //   topic: {
    //     id: "react-hooks",
    //     label: "React Hooks",
    //   },
    //   category: "definition"
    // },
  ];

export default flashcards;



/*{
  id: 106,
  question: "How do you handle authentication and authorization in a React application?",
  answer: "Authentication and authorization in a React application are typically handled by a combination of client-side and server-side logic. On the client-side, you can use techniques like JSON Web Tokens (JWT) to store the user's authentication state and send it with each request to the server. On the server-side, you verify the token and determine the user's permissions. Libraries like React Router can be used to protect certain routes based on the user's authentication state.",
  topic: "React Security"*/