// import {createStore} from 'redux';

// const reducerFn = (state = {counter: 0}, action) => {
//     // Function must be synchronous: no async code
//     // Never mutate the original state
//     switch (action.type) {
//         case 'INCREMENT':
//             return {counter: state.counter + 1}
//         case 'DECREMENT':
//             return {counter: state.counter - 1}
//         case 'ADDBY':
//             return {counter: state.counter + action.payload}
        
//         default:
//             return state;

//     }
// }

// const store = createStore(reducerFn);
// export default store;