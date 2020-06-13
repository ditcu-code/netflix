import React, {Fragment} from "react";
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageOverview from "../pages/PageOverview";
import PageReview from "../components/PageReview";
import PageActors from "../components/PageActors";
import ProfilePage from "../pages/ProfilePage"
import Header from '../layout/Header'
import Footer from '../layout/Footer'


const Routes = () => {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/overview/:id" component={PageOverview} exact />
        <Route path="/reviews" component={PageReview} exact />
        <Route path="/actors" component={PageActors} exact />
        <Route path="/profile" component={ProfilePage} exact />
      </Switch>
      <Footer/>
    </Fragment>
  )
}

export default Routes;