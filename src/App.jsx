import router from './router/router.js'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes(router)

  return <Suspense fallback={''}>{element}</Suspense>
}

export default App
