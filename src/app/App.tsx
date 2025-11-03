import {createBrowserRouter, RouterProvider} from 'react-router'
import ErrorBoundry from '../Pages/ErrorBoundry'
import Layout from '../Components/Layout/Layout'
import GemsList from '../Pages/AllGems'
import Home from '../Pages/Home'
import GemDetails from '../Pages/GemDetails'
import Lab from '../Pages/Lab'
import {useInitApp} from './hooks/useInitApp'
import Corruption from '../Pages/Corruption'

const router = createBrowserRouter([
  {
    caseSensitive: false,
    path: '/',
    element: <Layout />,
    ErrorBoundary: ErrorBoundry,
    children: [
      // {element: <ProtectedRoute />,
      // children:
      {index: true, element: <Home />},
      {path: 'gems', element: <GemsList />},
      {path: 'gems/:gemName', element: <GemDetails />},
      {path: 'lab', element: <Lab />},
      {path: 'corr', element: <Corruption />},
    ],
  },
])

function App() {
  useInitApp()

  return <RouterProvider router={router} />
}

export default App
