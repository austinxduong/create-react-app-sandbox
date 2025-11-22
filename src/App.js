import React, { Component } from "react";

// default boilerplate code
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null
    }
  }


  componentDidMount() {
    if ("geolocation" in navigator) {
      this.loadPosition();
    }
  }


  loadPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude } = position.coords;
      this.setState({ latitude, longitude });
    },
    () => {
      console.log("Error getting geolocation");
    },
    {}
  );
};

  render() {
    return (
      <div className="App">
        Latitude: {this.state.latitude}
        <br />
        Longitude: {this.state.longitude}
      </div>
    );
  }
}


// default boilder plate code

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
         
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;
