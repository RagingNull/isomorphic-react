import React from 'react';

function App() {

  const test = () => {
    console.log("where i am !!");
  }

  return (
    <div className="App">
      {test && <h1>{'manju from teshdhjhfdtetest'}</h1>}
    </div>
  );
}

export default App;
