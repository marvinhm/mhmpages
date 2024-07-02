import { SelectComponent } from "./components/SelectComponent";
import './App.css';


function App() {

  const appStyle = {
    background: 'hsl(212deg, 50%, 40%)',
    height: '100vh',
    width: '100vw'
  };

  return (
    <div className="App" style={appStyle}>
    <SelectComponent placeholder="Favourite OS">
      <option>Windows</option>
      <option>Linux</option>
      <option>Apple</option>
    </SelectComponent>
    </div>
  )
}

export default App