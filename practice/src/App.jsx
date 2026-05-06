import { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);

  const num1 = () => {
    setA(a + 1);
  };

  const num2 = () => {
    setB(b + 10);
  };

  useEffect(() => {
    console.log("Mein useEffect hoon raaaayyyyyyyy");
  }, [a]);

  return (
    <div>
      <h1 className="text"> value of A is {a}</h1>
      <h1 className="text"> value of B is {b}</h1>

      <button className="btn" onClick={num1}>
        Click A
      </button>
      <button className="btn" onClick={num2}>
        Click B
      </button>
    </div>
  );
};

export default App;
