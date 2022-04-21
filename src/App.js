import './App.css';

function App() {
  return (
    <div className="app">
      <p className='help'><strong>Help ?</strong> </p>
      <h1 className="main">Accelarate.</h1>
      <p className="sub__main">UNLEASHING THE BEST IN YOUTH</p>
      <p className="sign__in">Already have an account with Accelarate? <a> Sign in</a></p>
      <div className="text__components">
      <input className='text' type="text" placeholder="Username"/>
      <input className='text' type="text" placeholder="Email"/>
      <input className='text' type="text" placeholder="Password"/>
      <input type="checkbox" />
        <label className="check"> I agree with <a>Terms and Conditons</a></label>
      <button className='button'>  SIGN UP</button>
      </div>
    </div>
  );
}

export default App;
