import React from 'react';
import {Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import Header from '../header';
import ShopingCartTable from "../shoping-cart-table";

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={100}/>
      <ShopingCartTable/>
      <Switch>
        <Route path="/"
               component={HomePage}
               exact/>
        <Route path="/cart"
               component={CartPage}/>
      </Switch>
    </main>
  )
};

export default App
