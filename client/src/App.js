import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditCard from "./components/EditCard";
// import DeleteCard from "./components/DeleteCard";
import CardDetails from "./components/CardDetails";
import AddCard from "./components/AddCard";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path = "/" >
        <Home />
      </Route>
      <Route exact path = "/details/:id">
        <CardDetails />
      </Route>
      <Route path = "/add">
        <AddCard />
      </Route>
      <Route path ="/details/:id/edit">
        <EditCard />
      </Route>
    </div>
  );
}

export default App;
