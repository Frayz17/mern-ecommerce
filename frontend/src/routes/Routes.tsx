import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from 'screens/HomeScreen';
import ProductScreen from 'screens/ProductScreen';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/product/:id">
        <ProductScreen />
      </Route>
    </>
  );
};

export default Routes;
