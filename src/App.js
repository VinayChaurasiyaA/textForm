//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar1 from "./components/Navbar1";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// why use react Router : {
//  A router is used when you have to bring a specific part only not the whole content like YT only bring the main content when you search and ll
// but it doesn't reload the whole page where there is a nagivation bar and home page and all
//}

function App() {
  // const input = document.querySelector('.form-check');
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState("light");

  // input.addEventListener('click' , function (event) {
  //   if(event.id === 'exampleRadios1') {
  //     document.body.style.backgroundColor = "black";
  //    // showAlert("dark mode is enabled", "success");
  //   }
  //   else if(event.id === 'exampleRadios2') {
  //     document.body.style.backgroundColor = 'blue';
  //   }
  //   else if(event.id === 'exampleRadios3') {
  //     document.body.style.backgroundColor = 'red';
  //   }
  // });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2f4f4f";
      showAlert("dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode is disabled", "alert");
      // event.closest('form-check').target.classList.remove('text-light');
    }
  };

  return (
    <Router>
      <Navbar1
        title="TextUtils"
        aboutTitle="about Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm
              heading="Enter your text below"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
        {/* what my-3 is going to do is it'll give a margin of 3 in y-axis!  */}
        {/* <About /> */}
        {/* <TextForm
              heading="Enter your text below"
              mode={mode}
              showAlert={showAlert}
            /> */}
      </div>
    </Router>
  );
}

export default App;
