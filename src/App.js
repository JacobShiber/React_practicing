import './App.css';
import Logo from './components/logo_component/logo.component';
import AddVagteble from './components/add_vagteble/add_vagteble';
import AddFruit from './components/add_fruit/add_fruit';
import AddSpice from './components/add_spice/add_spice';
import AddCan from './components/add_cans/add_can';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="componentsContainer">
        <AddVagteble />
        <AddFruit />
        <AddSpice />
        <AddCan />
      </div>
    </div>
  );
}

export default App;
