// import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// function App() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   const increment = () => {
//     dispatch({type: "INCREMENT"});
//   }
//   const decrement = () => {
//     dispatch({type: "DECREMENT"});
//   }

//   const addBy = () => {
//     //Action can take a type and payload for dynamic values
//     dispatch({type: 'ADDBY', payload: 10})
//   }
//   return (
//     <div className='App'>
//       <h1>Counter: </h1>
//       <h2>{counter}</h2>
//       <div className="buttons">
//         <button onClick={decrement} className="decrement">-</button>
//         <button onClick={increment} className="increment">+</button>
//       </div>
//       <button onClick={addBy} className="addBy">Add by 10</button>
//     </div>
//   );
// }

// // export default App;
