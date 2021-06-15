import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Settings from '../pages/Settings';

export default function Routers() {
  return (
    <Switch>
      <Route path="/game" component={ Game } />
      <Route path="/Settings" component={ Settings } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
