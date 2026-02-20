import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import WebPages from "./pages/WebPages";
import Login from "./pages/Login";
import NewForm from "./pages/NewForm";

function App() {
  return (
<Router>
  <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<CreateAccount />}/>
    <Route path="/" element={<Layout><Dashboard /></Layout>}/>
    <Route path="/Web-Pages" element={<Layout><WebPages /></Layout>}/>
    <Route path="/New-Form" element={<Layout><NewForm /></Layout>}/>
  
  </Routes>
</Router>
  )
}

export default App;