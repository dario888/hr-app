import React from 'react';
import {Provider} from 'react-redux'
import store from './utility/store';
import './style/App.scss';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        dsdjsadjs
      </div>
    </Provider>
    
  );
}

export default App;
