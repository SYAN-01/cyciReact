import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element= {<Home/>}/>
          <Route path={"/about"} element= {<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About</Link>
    </div>
  )
}

function About() {
  return(
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
export default App;
