import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CKEpage from './pages/CKEeditor'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cke' element={<CKEpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
