import './App.css';
import React, { useEffect, useState } from "react";
const exec = require('child_process').exec;
function App() {
  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  const [value3, setValue3] = React.useState();
  const [value4, setValue4] = React.useState();
  const [value5, setValue5] = React.useState();
  const handleChange = (event) => {
    // setValue(event.target.value);
    console.log(event.target.value);
    var newValue = 0;
    if (event.target.value === "High") {
      newValue = 100;
      exec('brightness 100', (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      });
    }
    else if (event.target.value === "Dim") {
      newValue = 50;
      exec('brightness 50', (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        } 
      });
    }
    console.log(newValue);
    exec('brightness 0', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
    });
  };
  const handleChange2 = (event) => {
    // setValue2(event.target.value);
    console.log(event.target.value);
    var newValue = 0;
    if (event.target.value === "High Speed") {
      newValue = 100;
    }
    else if (event.target.value === "Low Speed") {
      newValue = 50;
    }
    console.log(newValue);
  };
  const handleChange3 = (event) => {
    // setValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };
  const [isLoading, setIsLoading] = useState(true);
  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsLoading(false), 1000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          THRIVE
        </p>
      </header> 
      <br></br>
      The Image Captured by Camera Goes Here
      <br></br>
      <br></br>
      <>
      <img
        alt="ad-img"
        className="App-box"
        width={300}
        src="https://www.letsnurture.com/wp-content/uploads/2021/02/Plant-disease-classifier-with-ai-blog-banner.jpg"
        style={{ display: isLoading ? "block" : "none" }}
      />
      <img
        alt="ad-img"
        className="App-box"
        width={300}
        src="https://blog.roboflow.com/content/images/2020/03/plantdoc-tomato-early-blight.png"
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={onLoad}
      />
    </>
      <br></br>
      <a class="App-border"></a>
      <br></br>
      <label>
        Brightness  
        <br></br>
        <br></br>
        <select value={value} onChange={handleChange} class="App-boxes">
          <option value="High">High</option>
          <option value="Dim">Dim</option>
          <option value="Off">Off</option>
        </select>
        <p> The Brightness is Set To : {value}</p>
      </label>
      <a class="App-border2"></a>
      <br></br>
      <label>
        Fan Speed
        <br></br>
        <br></br>
        <select value={value2} onChange={handleChange2} class="App-boxes">
          <option value="High Speed">High Speed</option>
          <option value="Low Speed">Low Speed</option>
          <option value="Off">Off</option>
        </select>
        <p>Fan Speed is Set To : {value2}</p>
      </label>
      <a class="App-border3"></a>
      <br></br>
      <label>
        Pump
        <br></br>
        <br></br>
        <select value={value3} onChange={handleChange3} class="App-boxes">
          <option value="On">On</option>
          <option value="Off">Off</option>
        </select>
        <p>The Pump is Set To : {value3}</p>
        </label>
      <a class="App-border4"></a>
      <br></br>
      <label>
        Temperature
        <br></br>
        <br></br>
        <select value={value4} onChange={handleChange4} class="App-boxes">
          <option value="0 °C">0 °C</option>
          <option value="20 °C">20 °C</option>
          <option value="40 °C">40 °C</option>
          <option value="60 °C">60 °C</option>
          <option value="80 °C">80 °C</option>
          <option value="100 °C">100 °C</option>
        </select>
        <p>The Temperature is Set To : {value4}</p>
        </label>
      <a class="App-border5"></a>
      <br></br>
      <label>
        pH
        <br></br>
        <br></br>
        <select value={value5} onChange={handleChange5} class="App-boxes">
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <p>The pH Scale is Set To : {value5}</p>
        </label>
      <a class="App-border6"></a>
    </div>
  );
}
export default App;
