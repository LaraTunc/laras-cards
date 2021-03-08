import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);
  
  return (
    <>
    <GlobalStyles/>
    <div>{bacon ? `Hello World ${bacon}` : "No bacon"}</div>
    </>
  );
}

export default App;
