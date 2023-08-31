import './App.css';
import Brushes from './components/Brushes';
import Shapes from './components/Shapes';
import Size from './components/Size';
import Colors from './components/Colors';
import Canvas from './components/Canvas';
import Clear from './components/Clear';
import Save from './components/Save';


function App() {
  return (
    <div className="App">
      <div class="tools">
          <Brushes/>
          <Size/>
          <Shapes/>
          <Colors/>
      </div>
      <div class="canvas">
          <Canvas/>
      </div>
      <div class="buttons">
        <Clear/>
        <Save/>
      </div>
    </div>
  );
}

export default App;