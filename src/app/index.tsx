import {Provider} from 'react-redux'

import {createBrowserRouter, RouterProvider} from 'react-router'
import ErrorBoundry from '../Pages/ErrorBoundry'
import Layout from '../Components/Layout/Layout'
import About from '../Pages/About'
import GemsList from '../Pages/GemsList'
import store from './store'
import Home from '../Pages/Home'
import GemDetails from '../Pages/GemDetails'
import Lab from '../Pages/Lab'

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
      {path: 'gems/:gemName', element: <GemDetails />},
      {path: 'lab', element: <Lab />},
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
