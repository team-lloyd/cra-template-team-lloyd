import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Router: React.FC = function Router() {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={lazy(() => import('./App'))} />
          <Route path="/login" component={lazy(() => import('./page/Login'))} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
