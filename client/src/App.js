import React from 'react';
import {Provider} from 'react-redux'
import store from './utility/store';

//COMPONENTS
import Employees from './components/employees/Employees';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';


//STYLE
import './style/App.scss';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Employees />

       
      </div>
    </Provider>
    
  );
}

export default App;
