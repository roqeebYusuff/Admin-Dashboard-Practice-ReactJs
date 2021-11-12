import React from 'react'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;