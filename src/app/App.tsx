import {RouterProvider} from 'react-router'

import {router} from './routes/router'
import {useInitApp} from './hooks/useInitApp'

function App() {
  useInitApp()

  return <RouterProvider router={router} />
}

export default App
