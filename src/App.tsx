import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import PasswordRecovery from "./PasswordRecovery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/password-recovery" element={<PasswordRecovery />} /> 
    </Routes>
  );
}

