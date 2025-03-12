//(1) Store: The Redux store is like a big box where all your applications data is kept safe. Everything you do with redux
// - wheteher adding, removing, updating data goes through this store.

//
//(2)Actions: This is an object which tells the redux what to do (like adding a task);

//
//(3)Reducers: How to do. It actually change the data in the store based on the actions.
//A Reducers is a functions that decides how the state should change based on the actions.
//The reducers take the current state and an action and return a new state.
//
//A key thing to remember about reducers:
// (1)Reducers must always return a new state
// (2)They should never modify the old state directly.

//
//<====================Connect React + Redux ====================>
//
// // Step1: Install react - redux
// npm install react-redux
// Step2: Wrap the App with provider
// Use the provider component to pass the Redux store to the entire component

//To use Redux in a React app. We need to connect Redux's store and actions to React components.
//This allows components to access the global state and dispatch actions.

//
//Access Redux State in React using useSelector
//Use the useSelector hook to read data from  the Redux store
//Syntax:
//const count = useSelector(state => state.property);
//Selector function: We define a selector function that takes the entire Redux store state as an argument
//and returns the specific piece of data we need

//
//Lec 7: How to Dispatch actions in react using Redux
//Dispatch Actions in React using useDispatch
//Use the useDispatch hook to dispatch actions from a react component

//
//Redux Thunk in React
// Redux Thunk is a middleware that allows you to write action creators that return a functions instead of actions.
//This function can perform asynchronous logic (like API requests) and
// dispatch actions after the operations is compplete(e.g.' fetching tasks and then dispatching them to the store).
//
//When you return a function from an action creator, Redux Thunk provides the dispatch functions as an argument.
//This allow you to manually dispatch other actons(e.g, When an API call succceeds or fails).

//
//<============Redux Advantages ==============>
//1: Centralized State Management
// --Redux stores your apps state in one place. making it easier to manage and access data across components.

//2: Global Access
// Any component can access and update the state without passing props down.

//
//3: Predictable Updates:
// State  changes are controlled and predictable using reducers.

//
//4: DevTools
// Powerful tools for debugging, inspecting state, and replaying actions

//
//Async Support
//Middleware linke thunk or sage handles async tasks, keeping the code clean

//
//Comparison of Redux, useContext, and Zustand for State Management**

// | Feature       |        Redux                    | useContext + useReducer          | Zustand                    |
// |
// | Complexity    | High (boilerplate code)         | Moderate                         | Low                        |
// | Ease of Use   | Requires setup (actions,        | Simple but limited               | Very simple, minimal setup |
//                   reducers, store, middleware)
// | Performance   | Efficient with optimizations    | Can cause unnecessary re-renders | Optimized, re-renders only needed components |
//                   (e.g., memoization, selectors)

// | Reactivity    | Manual with `useSelector`       | Directly provides state          | Reactive with selectors    |

// | API Simplicity| Verbose(actions,reducers,store) | Simple but lacks middleware support | Intuitive and flexible  |

// | Middleware Support | Yes (Redux Thunk, Redux Saga) | No direct support | Built-in async support |

// | Global State Management | Best for large-scale apps | Suitable for small-scale apps | Suitable for small to medium-scale apps |

// | DevTools Support | Yes (Redux DevTools) | No | Yes (Zustand DevTools) |

// | Asynchronous Handling | Requires middleware | Requires custom async handling | Built-in support (`set`, `get`) |


// # When to Use?
// - Redux: Best for large applications with complex state logic, especially when debugging and middleware (like Thunk or Saga) are needed.
// - useContext + useReducer: Good for small to medium applications with simple state management needs.
// - Zustand: Ideal for small to medium apps needing a global state without boilerplate, optimized reactivity, and simpler API.