import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Initial from './pages/Initial.jsx'
import PlanningPocker from './pages/PlanningPocker.jsx'
import './assets/style/App.css'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Initial />} />
          <Route path="planningPocker" element={<PlanningPocker />} />
        </Route>
      </Routes>
    </div>
  )
}
