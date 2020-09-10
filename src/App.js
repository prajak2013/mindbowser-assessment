import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import Header from './components/Layout/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
