import React, { useEffect, useState } from 'react';

const App = () => {
  let [state, setState] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => {
      setState(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h3>This is Donodaddy</h3>
      {isLoading ? <p>Loading...</p> : <p>{state.message}</p>}
    </div>
  );
}

export default App;
