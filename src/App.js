import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import CheckOut from './containers/CheckOut'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

      <Switch>
        <Route path= "/" exact component={ProductListing}></Route>
        <Route path= "/product/:productId" exact component={ProductDetail}></Route>
        <Route path = "/product/:productId/checkout" exact component = {CheckOut}></Route>
        <Route>404 Not Found</Route>
      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
