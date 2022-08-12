import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Initial from './pages/Initial.jsx'
import SignUp from './components/SignUp'
import PlanningPocker from './pages/PlanningPocker.jsx'
import './assets/style/App.css'
import AuthProvider from "../src/auth/authProvider.jsx"


export default function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Initial />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="planningPocker" element={<PlanningPocker />} />
        </Route>
      </Routes>
      </AuthProvider>
    </div>
  )
}
