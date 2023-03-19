import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'

const Routes = () => {
  const renderRoutes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    )
  }
  return <>{renderRoutes()}</>
}

export default Routes
