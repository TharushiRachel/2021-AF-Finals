
import './App.css';
import Navbar from './components/navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateVehicle from './components/createVehicle/createVehicle';
import CreateLoad from './components/createLoad/createLoad';
import ViewVehicles from './components/Vehicle/vehicle';
import DeleteVehicle from './components/Vehicle/deleteVehicles';
import Loads from './components/Vehicle/loadForVehicle';
import ViewLoads from './components/Load/load';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <section>
        <Switch>
          <Route path="/create-vehicle" component={CreateVehicle}/>
          <Route path="/create-load" component={CreateLoad}/>
          <Route path="/view-vehicles" component={ViewVehicles}/>
          {/* <Route path="/:id" component={DeleteVehicle}/> */}
          <Route path="/:id" component={Loads}/>
          <Route path="/view-load" component={ViewLoads}/>
        </Switch>
      </section>
    </Router>
    </div>
  );
}

export default App;
