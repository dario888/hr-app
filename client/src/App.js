import React, {Fragment} from 'react';
import { Switch, Route} from 'react-router-dom';

//COMPONENTS
import Employees from './components/employees/Employees';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Analytics from './components/Analytics';


//STYLE
import './style/App.scss';



function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/employees' component={Employees} />
        <Route exact path='/analytics' component={Analytics} />
      </Switch>
      <Footer />
    </Fragment>

  

  );
}

export default App;
