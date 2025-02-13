import { BrowserRouter, Routes, Route } from "react-router";
import Userlayout from "./layouts/Userlayout";
import { Home } from './pages/index'

function App() {
  return (
    <BrowserRouter>
    <Userlayout/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App