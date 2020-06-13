import React, {Fragment} from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageOverview from "../pages/PageOverview";
import PageReview from "../pages/PageReview";
import PageActors from "../pages/PageActors";
import ProfilePage from "../pages/ProfilePage"


const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/overview" component={PageOverview} exact />
        <Route path="/reviews" component={PageReview} exact />
        <Route path="/actors" component={PageActors} exact />
        <Route path="/profile" component={ProfilePage} exact />
      </Switch>
    </Fragment>
  )
}

export default Routes;