import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from '../redux/counter/counter-reducer';

// const initialState = { counter: { value: 0, step: 15 } };

// const reducer = (state = initialState, { type, payload }) => {
//   //   console.log(action);
//   //   console.log(state);

//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: { ...state.counter, value: state.counter.value + payload },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: { ...state.counter, value: state.counter.value - payload },
//       };

//     default:
//       return state;
//   }
// };

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, { type, payload }) => state;

// const counterInitialState = { value: 0, step: 15 };

// const counteReducer = (state = counterInitialState, { type, payload }) => {
//   //   console.log(action);
//   //   console.log(state);

//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         value: state.value + payload,
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         value: state.value - payload,
//       };

//     default:
//       return state;
//   }
// };

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

const rootReducer = combineReducers({ counter: counterReducer });

// const store = createStore(
//   reducer,
//   composeWithDevTools(),
//   // applyMiddleware(...middleware),
//   // other store enhancers if any
// );

const store = createStore(rootReducer, composeWithDevTools());

export default store;
