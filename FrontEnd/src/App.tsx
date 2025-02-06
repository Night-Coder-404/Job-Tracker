import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="border rounded-md dark:bg-amber-300"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
