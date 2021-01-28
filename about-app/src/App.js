import React from 'react';


import { Header, Hero, About } from './components';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
