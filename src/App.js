import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name = "Riju";
function App() {
  return (
    <>
   
<Navbar title="FIRSTT-APP"/>
<div className="container my-3 ">
<TextForm heading="Enter the text to analyse" />
</div>
     </>
  );
}

export default App;
