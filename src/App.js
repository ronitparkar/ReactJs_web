import "./App.css";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import TextForm from "./myComponents/TextForm";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=> {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#404040';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = '#ffff';
    }
  }
  return (
    <>
      <Header title="Ronit" mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode} />
      <Footer />
    </>
  );
}

export default App;
