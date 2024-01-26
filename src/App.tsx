// Store
// interface CounterState {
//   value: number;
// }

import Counter from "./components/Counter";

// interface UserState {
//   isSignedIn: boolean;
// }

// Actions
// const increment = { type: "INCREMENT", payload: 1 }; //type : required, payload: optional
// const increment = { type: "INCREMENT" }; //type : required, payload: optional
// const incrementByAmount = { type: "INCREMENT", payload: 10 }; //type : required, payload: optional
// const decrement = { type: "DECREMENT" };

// Reducer -> do acording to type

const App = () => {
  return (
    <div>
      Redux Tutorial
      <div className="">
        <Counter />
      </div>
    </div>
  );
};

export default App;
