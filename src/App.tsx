import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import PasswordRecovery from "./PasswordRecovery";
import CreatAccount from "./CreatAccount";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/password-recovery" element={<PasswordRecovery />} /> 
      <Route path="/creat-account" element={<CreatAccount/>} />
    </Routes>
  );
}

