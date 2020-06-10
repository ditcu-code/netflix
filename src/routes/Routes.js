import React, {Fragment} from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageOverview from "../pages/PageOverview";
import PageReview from "../pages/PageReview";
import PageActors from "../pages/PageActors"


const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/overview" component={PageOverview} exact />
        <Route path="/reviews" component={PageReview} exact />
        <Route path="/actors" component={PageActors} exact />
      </Switch>
    </Fragment>
  )
}

export default Routes;