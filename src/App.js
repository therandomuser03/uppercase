import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <div class="nav">
      <a class="nav-link active" href="#">Home</a>
      <a class="nav-link" href="https://github.com/therandomuser03">GitHub</a>
      <a class="nav-link" href="https://www.linkedin.com/in/therandomuser03/">LinkedIn</a>
      </div>
    <div className="container my-3">
      
      <TextForm heading="Convert Lowercase to Uppercase"/>
    </div>
    </>
  );
}

export default App;
