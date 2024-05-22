import logo from './logo.svg';
import './App.css';
import Textform from './Component/Textform';
import react , {useState} from 'react';
import Header from './Component/Header';
import Alert from './Component/Alert';

function App() {

  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() =>{
      setAlert(null);
    },1500)

  }

  const toggleMode = () =>{

    if(mode == "light"){

      setMode("dark");
      document.body.style.backgroundColor = "#010101";
      showAlert("Dark mode has been enabled", "success");

    }

    else{

      setMode("light");
      document.body.style.backgroundColor = "#efefef";
      showAlert("Light mode has been enabled", "success");
    }

  }

  return (
    <div className="App">
        <Header mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <Textform showAlert = {showAlert} mode = {mode} toggleMode = {toggleMode}/>
    </div>
  );
}

export default App;
