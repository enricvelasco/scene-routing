import React from 'react'
import { Link, Location, Router } from '@reach/router'
import ScenesLocation from './common/components/scenes'
import Home from './common/scenes/home'
import Dashboard from './common/scenes/dashboard'
import Calendar from './common/scenes/calendar'
import Configuration from './common/scenes/configuration'

const App = () => {
  console.log('START APP')
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/configuration">Configuration</Link></li>
      </ul>
      {/* <Location>
        {({ location }) => {
          return (
            <Scenes path={location.pathname} />
          )
        }}
      </Location> */}
      <Router>
        <Home path="/" default />
        <Dashboard path="dashboard" />
        <Calendar path="calendar" />
        <Configuration path="configuration" />
      </Router>
      {/* <ScenesLocation /> */}
    </div>
  )
}

export default App
