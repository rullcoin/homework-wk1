import logo from './logo.svg';
import './App.css';
import Tempconversion from './components/Tempconversion';
import CylinderCalc from './components/CylinderCalc';
import SecondsFormatting from './components/SecondsFormatting';
import ConcreteCalculator from './components/ConcreteCalculator';

function App() {
  return (
    <div className="container">
      <Tempconversion /> 
      <CylinderCalc /> 
      <SecondsFormatting />
      <ConcreteCalculator /> 
    </div>
  );
}

export default App;
