import {createBrowserRouter} from 'react-router'
import ErrorBoundry from '../../Pages/ErrorBoundary'
import Layout from '../Layout/Layout'
import Home from '../../Pages/Home'
import GemDetails from '../../features/gems/components/GemDetails/GemDetails'
import Maps from '../../features/Maps/components/Maps'
import Corruption from '../../features/gems/components/Corruption/Corruption'
import LabPage from '../../features/Lab/components/Lab'
import {loader as MapsLoader} from '../../features/Maps/mapsAPI'
import AllGems from '../../features/gems/components/AllGems/AllGems'

export const router = createBrowserRouter([
  {
    caseSensitive: false,
    path: '/',
    element: <Layout />,
    ErrorBoundary: ErrorBoundry,
    children: [
      {index: true, element: <Home />},
      {path: 'gems', element: <AllGems />},
      {path: 'gems/:gemName', element: <GemDetails />},
      {path: 'lab', element: <LabPage />},
      {path: 'corr', element: <Corruption />},
      {path: 'maps', element: <Maps />, loader: MapsLoader},
    ],
  },
])
