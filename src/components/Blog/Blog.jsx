import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-orange-100 px-8">
        <h1 className="font-bold text-xl">Q1.When we use Content API use?</h1>
        <p>
          <span className="font-bold">Ans: </span>
          Content API is a programming interface that allows developers to
          access and manipulate content stored on a server or database. It
          enables content to be retrieved and displayed on websites, mobile
          apps, and other digital platforms Content API can be used to: <br />
          1.Retrieve content: Developers can use Content API to retrieve content
          from a server or database and display it on their website or app.{" "}
          <br />
          2.Update content: With Content API, developers can update existing
          content or create new content and add it to the server or database.
          <br />
          3.Search content: Content API can be used to search for specific
          content on a server or database based on various criteria such as
          keywords, tags, and categories.
          <br />
          3.Search content: Content API can be used to search for specific
          content on a server or database based on various criteria such as
          keywords, tags, and categories. <br />
          4.Filter content: Developers can use Content API to filter content
          based on specific criteria such as date, author, or popularity. <br />
          5.Analyze content: Content API can provide data and insights on how
          users interact with content, such as how many times a piece of content
          has been viewed or shared. <br />
          Overall, Content API can be a powerful tool for developers to manage
          and optimize their digital content.
        </p>
      </div>
      <div className="bg-orange-100 px-8 mt-3">
        <h1 className="font-bold text-xl">Q2.what is custom hook?</h1>
        <p>
          <span className="font-bold">Ans: </span>
          In React, a custom hook is a reusable function that encapsulates logic
          and state, which can be shared across multiple components. Custom
          hooks allow developers to extract common logic and state management
          code from components, making the code more modular and easier to
          maintain
          <p>
            Custom hooks follow a specific naming convention, starting with the
            word "use". For example, a custom hook for handling form input can
            be named "useFormInput", and a custom hook for fetching data from an
            API can be named "useFetch".
          </p>
          <p>
            To create a custom hook, developers can use existing React hooks
            such as useState, useEffect, useContext, and useReducer, along with
            other JavaScript functions and libraries. Custom hooks can also
            accept parameters, allowing developers to customize their behavior
            based on specific needs.
          </p>
          <p>
            Custom hooks can be used in functional components, just like
            built-in hooks, by calling the custom hook function. This allows
            developers to reuse code across components and share complex logic
            between components without duplicating code.
          </p>
          <p>
            Overall, custom hooks are a powerful tool for building reusable,
            modular, and scalable React applications.
          </p>
        </p>
      </div>
      <div className="bg-orange-100 px-8 mt-3">
        <h1 className="font-bold text-xl">
          Q3.what is useref ?where it's uses?
        </h1>
        <p>
          <span className="font-bold">Ans: </span>
          In React, useRef is a hook that provides a way to create a mutable
          reference that can be attached to a DOM element or any other value.
          The useRef hook returns an object that contains a current property,
          which can be used to store and update a value across re-renders of a
          component. <br />
          The main use case of useRef is to access and modify the DOM elements
          directly. For example, when working with forms, you can use useRef to
          get the value of an input field or to focus on an input field when the
          component mounts.
        </p>
      </div>
      <div className="bg-orange-100 px-8 mt-3">
        <h1 className="font-bold text-xl">Q4.what is use memo?</h1>
        <p>
          <span className="font-bold">Ans: </span>
          In React, useMemo is a hook that can be used to optimize the
          performance of a component by caching the result of a function that
          may be expensive to compute. The useMemo hook returns a memoized
          value, which is only recomputed if one of the dependencies has
          changed. <br />
          The main use case of useMemo is to optimize expensive calculations or
          complex functions that are called frequently within a component. By
          caching the result of the function and only recomputing it when
          needed, useMemo can improve the rendering performance of a component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
