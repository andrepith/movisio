import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { store } from "./store";
import routes from "./routes";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={`${route.path} - ${index}`}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
