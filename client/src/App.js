import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import EditCard from "./components/EditCard/EditCard";
import Search from "./components/Search/Search";
import CardDetails from "./components/CardDetails/CardDetails";
import AddCard from "./components/AddCard/AddCard";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="app-body">
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
          <Route path ="/search">
            <Search />
          </Route>
        </div>
        <Footer />
    </div>
  );
}

export default App;
