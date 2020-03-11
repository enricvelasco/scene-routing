import React from 'react'
import { Redirect, Router, Link, Location } from '@reach/router'
import { scenes } from '../../scenes/scenes-list'

const RenderScene = ({ scene: { path, props }, Component }) => (
  <Router>
    <Component path={path} />
  </Router>
)

const Scenes = ({ path, ...props }) => {
  console.log('SCENES', path)
  return (
    <RenderScene scene={{ path, props }} Component={scenes[path]} />
  )
}

const ScenesLocation = () => {
  return (
    <Location>
      {({ location }) => {
        return (
          <Scenes path={location.pathname} />
        )
      }}
    </Location>
  )
}

export default Scenes
