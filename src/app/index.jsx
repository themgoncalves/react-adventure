import React from 'react';
import { Helmet } from 'react-helmet';

const App = (event) => {
  const handleButtonClick = async () => {
    document.querySelector('body').style.backgroundColor = '#117bf3';
    document.querySelector('body').style.color = '#ffffff';
  };

  return (
    <div>
      <Helmet>
        <title>React Redux Starter Pack</title>
      </Helmet>
      App works!<br />
      <button onClick={handleButtonClick}>Async button</button>
    </div>
  );
};

export default App;
