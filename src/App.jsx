
import "./App.css";
import { Component } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <main className="main">
          <Header />
          <Dashboard />
        </main>
      </div>
    );
  }
}

export default App;
