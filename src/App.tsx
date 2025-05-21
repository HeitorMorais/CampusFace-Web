import { Routes, Route, Navigate } from 'react-router-dom';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';
import Requests from './pages/Dashboard/Requests';
import Members from './pages/Dashboard/Members';
import Verifiers from './pages/Dashboard/Verifiers';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashboard/requests' element={
        <ProtectedRoute>
          <Dashboard page={<Requests />} />
        </ProtectedRoute>
        } 
      />
      <Route path='/dashboard/members' element={
        <ProtectedRoute>
          <Dashboard page={<Members />} />
        </ProtectedRoute>
        } 
      />
      <Route path='/dashboard/verifiers' element={
        <ProtectedRoute>
          <Dashboard page={<Verifiers />} />
        </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
