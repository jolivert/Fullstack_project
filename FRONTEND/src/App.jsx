import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Landing from './pages/Landing.jsx'
import PlanningPocker from './pages/PlanningPocker.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="planningPocker" element={<PlanningPocker />} />
        </Route>
      </Routes>
    </div>
  )
}
