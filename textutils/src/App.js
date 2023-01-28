import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert = (message, type)=>{
 setAlert({
  msg:message,
  type: type
})
setTimeout(()=>{
  setAlert(null);
},3000);
 }
  

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title ="TextUtils is Amazing" 
      // },1000)
      // setInterval(()=>{
      //   document.title ="install TextUtils" 
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
     {/* <Navbar/> */}
     <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

       <div className="container my-3">
         <Routes>
           <Route exact path="/about" element={<About/>}></Route>
           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
          </Routes>
       </div>
    </Router>
  </>
  );
}

export default App;
