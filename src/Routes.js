import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import NotFound from "./components/homePage/NotFound";
import React from "react";

//TODO: Code splitting

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ childProps }) => (
    <Switch>
        <Route path="/" exact component={Home} props={childProps} />
        {/* Catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>
);
