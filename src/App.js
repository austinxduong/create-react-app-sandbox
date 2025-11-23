import React, { Component } from "react";

// default boilerplate code
import logo from './logo.svg';
import './App.css';


// -------------------------- Promise/then method ------------------------------------

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null
    }
  }


  componentDidMount() {
    // checks to make sure the browser supports geolocation
    if ("geolocation" in navigator) {
    // if does, call load position function
      this.loadPosition();
    }
  }

  getCurrentPosition = (options = {}) => {
    return new Promise((accept, reject) => {
      navigator.geolocation.getCurrentPosition(accept, reject, options);
    })
  }

// load position function/component
  loadPosition = () => {
    this.getCurrentPosition()
    .then(position => {
      const {latitude, longitude} = position.coords;
      this.setState({ latitude, longitude })
    })
    .catch((error) => {
      console.error("Error", error);
    })
};

  render() {
    return (
      <div className="App">
        {/* display the getters */}
        Latitude: {this.state.latitude}
        <br />
        Longitude: {this.state.longitude}
      </div>
    );
  }
}


// -------------------------- call back method -------------------------------

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null
//     }
//   }


//   componentDidMount() {
//     // checks to make sure the browser supports geolocation
//     if ("geolocation" in navigator) {
//     // if does, call load position function
//       this.loadPosition();
//     }
//   }

// // load position function/component
//   loadPosition = () => {
//     // passes two different callbacks & options (emtpy object); if accept, and if reject
//     navigator.geolocation.getCurrentPosition(position => {
//       // if accept
//       // extract the coordinates, store in longitude & latitude variables
//       const {latitude, longitude } = position.coords;
//       // update the states, via the setter
//       this.setState({ latitude, longitude });
//     },
//     // if reject
//     () => {
//       console.log("Error getting geolocation");
//     },
//     // options
//     {}
//   );
// };

//   render() {
//     return (
//       <div className="App">
//         {/* display the getters */}
//         Latitude: {this.state.latitude}
//         <br />
//         Longitude: {this.state.longitude}
//       </div>
//     );
//   }
// }


// ---------------------------- default boiler plate code ----------------------------

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
