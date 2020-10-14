import React from 'react';
import {Provider} from 'react-redux'
import store from './utility/store';

//COMPONENTS
import Employees from './components/employees/Employees'

//STYLE
import './style/App.scss';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Employees />
      </div>
    </Provider>
    
  );
}

export default App;
