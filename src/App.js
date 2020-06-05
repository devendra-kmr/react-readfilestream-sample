import React from 'react';
import axios from  'axios'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
   super(props);
   this.getPdf= this.getPdf.bind(this);
   this.getXml= this.getXml.bind(this) ;

  }
   
  
  componentDidMount() {
    
  }

  getPdf(){
    let data = {"query":"mutation{\n  getPdf(details:{fileId:\"asddf\",name:\"xyz\",url:\"filePath\"}) {\n    fileId\n    name\n    url\n  }\n  }\n","variables":null};
    axios.post(`http://localhost:8080/graphql`,data,{responseType: 'blob'})
      .then(res => {
      //Create a Blob from the PDF Stream
      const file = new Blob(
      [res.data], 
      {type: 'application/pdf'});
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
       window.open(fileURL);
       //console.log(res.data)
      }).catch(error => {
        console.log(error);
    });
  }

  getXml(){
    let data = {"query":"mutation{\n  getXml(details:{fileId:\"asddf\",name:\"xyz\",url:\"filePath\"}) {\n    fileId\n    name\n    url\n  }\n  }\n","variables":null};
    axios.post(`http://localhost:8080/graphql`,data,{responseType: 'blob'})
      .then(res => {
      //Create a Blob from the XML Stream
      const file = new Blob(
      [res.data], 
      {type: 'application/xml'});
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
       window.open(fileURL);
       //console.log(res.data)
      }).catch(error => {
        console.log(error);
    });
  }

  render() {
  return (
    <div className="App">
  
      <header className="App-header">
      <button onClick={this.getPdf}>Get Pdf</button>
      <br></br><br></br>
      <button onClick={this.getXml}>Get Xml</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
