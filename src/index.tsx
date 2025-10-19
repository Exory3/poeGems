import {Provider} from 'react-redux'
import './App.css'
import GemsList from './Pages/GemsList'
import store from './app/store'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './Components/Layout'
import About from './Pages/About'
import ErrorBoundry from './Pages/ErrorBoundry'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    caseSensitive: false,
    path: '/',
    element: <Layout />,
    ErrorBoundary: ErrorBoundry,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
      {path: 'gems', element: <GemsList />},
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
