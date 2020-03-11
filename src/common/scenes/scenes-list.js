import Dashboard from './dashboard'
import Calendar from './calendar'
import Configuration from './configuration'
import Home from './home'

export const scenesPaths = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  CALENDAR: '/calendar',
  CONFIGURATION: '/configuration',
}

export const scenes = {
  [scenesPaths.HOME]: Home,
  [scenesPaths.DASHBOARD]: Dashboard,
  [scenesPaths.CALENDAR]: Calendar,
  [scenesPaths.CONFIGURATION]: Configuration,
}