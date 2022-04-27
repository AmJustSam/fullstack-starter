import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:9000/").then((res) =>
      res.json()
    );

    setState(data);

    console.log(data);
  };

  return (
    <div>
      <h1>Hello {state.name}</h1>
    </div>
  );
};

export default App;
