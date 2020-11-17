import './App.css';
import React, { Component} from 'react'
import QrReader from 'react-qr-reader'

class Test extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      window.location.replace(data)
      // this.setState({
       // result: data

      // }
      // )
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '400px' }}
        />
        <h1>{this.state.result}</h1>  
      </div> 
    )
  }
}

function App() {

  return (
    <div className="App">
      <Test></Test>;
    </div>
  );
}

export default App;
    