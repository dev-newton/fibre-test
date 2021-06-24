import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";
import Wallet from "./pages/Wallet";
import More from "./pages/More";
import "./App.css";

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Redirect to="/buy" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/buy" exact component={Buy} />
            <Route
              path="/buy/product-details/:id"
              exact
              component={ProductDetails}
            />
            <Route path="/buy/cart" exact component={Cart} />
            <Route path="/deals" exact component={Deals} />
            <Route path="/wallet" exact component={Wallet} />
            <Route path="/more" exact component={More} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
