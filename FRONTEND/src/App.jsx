import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Landing from './pages/Initialice.jsx'
import PlanningPocker from './pages/PlanningPocker.jsx'
import Initialice from './pages/Initialice.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Initialice />} />
          <Route path="planningPocker" element={<PlanningPocker />} />
        </Route>
      </Routes>
    </div>
  )
}
