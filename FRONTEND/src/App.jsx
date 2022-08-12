import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Initial from './pages/Initial.jsx'
import SignUp from './components/SignUp'
import PlanningPocker from './pages/PlanningPocker.jsx'
import Projects from './pages/Projects.jsx'
import './assets/style/App.css'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Initial />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="planningPocker" element={<PlanningPocker />} />
        </Route>
      </Routes>
    </div>
  )
}
