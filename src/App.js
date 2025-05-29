import './App.css';
import Header from './Main/Header';
import { Main } from './Main/Main';
import Loader from './Main/Loader';
import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {!loading && (
        <>
          <Header />
          <Main />
        </>
      )}
      {loading && <Loader onFinish={() => setLoading(false)} />}
    </>
  );
}

export default App;
