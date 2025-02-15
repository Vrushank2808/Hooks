import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";
import { useTheme } from "../context/ThemeContext";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { state: { isDark } } = useTheme();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const doubleCount = useMemo(() => count * 2, [count]);

  const style = {
    backgroundColor: isDark ? "#222" : "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    color: isDark ? "#fff" : "#000",
    textAlign: "center",
    boxShadow: isDark ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div style={style}>
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
