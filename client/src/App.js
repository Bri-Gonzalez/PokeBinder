import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Form from "./components/Form";
import EditCard from "./components/EditCard";
// import DeleteCard from "./components/DeleteCard";
import CardDetails from "./components/CardDetails";
import AddCard from "./components/AddCard";
import { Route } from "react-router-dom";

// const KEY = process.env.REACT_APP_AIRTABLE_KEY;
// const BASE = process.env.REACT_APP_AIRTABLE_BASE;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route>
        <Home />
      </Route>
      <Route path = "/details/:id">
        <CardDetails />
      </Route>
      {/* <Route>
        <AddCard />
      </Route> */}
      {/* <Route>
        <EditCard />
      </Route> */}
    </div>
  );
}

export default App;
