//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
  setAlert(
  {
    msg:message,
    type:type
  })
}

  setTimeout(() => {
    setAlert(null);
  }, 2000);
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)

    if(mode==='light')
    {
      setMode('dark');
     document.body.style.backgroundColor='#040826';
     showAlert("Dark mode is activated","Success");
     document.title='MyProject-Dark Mode';
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode is activated','Success');
      document.title='MyProject-Light Mode';
    }
  }
  return (
    <Router>
   <div>
<Navbar title="My Project" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-5">
<Routes>
          <Route path="/About" element={<About  mode={mode}/>}></Route>
          <Route path="/TextForm" element={ <TextForm showAlert={showAlert}heading="Enter the text here!"  mode={mode} />}> </Route>
        </Routes>
</div>

   </div>
   </Router>
  );
}

export default App;
