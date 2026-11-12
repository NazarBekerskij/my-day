import "./App.css";
import { Component } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        
        <main className="main">
          <Header />
        </main>
      </div>
    );
  }
}

export default App;
