import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div className="">
        <h2 style={{ textAlign: "center" }}>{count}</h2>
      </div>
      <div className="" style={{ display: "flex", gap: "16px" }}>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          increment 10 times
        </button>
        <button onClick={() => dispatch(incrementAsync(100))}>
          increment 100 times async
        </button>
      </div>
    </div>
  );
};

export default Counter;
